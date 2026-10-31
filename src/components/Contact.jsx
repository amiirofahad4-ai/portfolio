import { useState } from "react";
import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "../data";
import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* Returns { field: true } for every invalid field */
function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = true;
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = true;
  if (values.subject.trim().length < 2) errors.subject = true;
  if (values.message.trim().length < 10) errors.message = true;
  return errors;
}

/* One row: gradient icon, label, value, optional Copy button */
function InfoRow({ Icon, label, value, href, copy }) {
  const { t } = useLanguage();
  const c = t.contact;
  const [state, setState] = useState("idle"); // idle | copied | failed

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2000);
  }

  return (
    <li className="flex items-center gap-4 rounded-2xl p-2 transition hover:bg-purple-500/5">
      <span className="icon-badge h-12 w-12">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">{label}</p>
        {href ? (
          <a
            href={href}
            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            className="block font-semibold transition-colors [overflow-wrap:anywhere] hover:text-accent"
          >
            {value}
          </a>
        ) : (
          <p className="font-semibold [overflow-wrap:anywhere]">{value}</p>
        )}
      </div>
      {copy && (
        <button
          type="button"
          onClick={handleCopy}
          className="pill shrink-0 px-3 py-1.5 text-xs font-semibold transition hover:border-purple-500 hover:text-accent"
        >
          {state === "copied" ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
          <span aria-live="polite">{state === "copied" ? c.copied : state === "failed" ? c.copyFailed : c.copy}</span>
        </button>
      )}
    </li>
  );
}

/* Labelled input/textarea with its error message */
function Field({ id, label, error, errorText, multiline, ...props }) {
  const Tag = multiline ? "textarea" : "input";
  return (
    <div className="mb-3 flex flex-col">
      <label htmlFor={id} className="mb-1.5 text-sm font-medium text-muted">{label}</label>
      <Tag
        id={id}
        name={id}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`field-input ${multiline ? "min-h-[140px] resize-y" : ""} ${error ? "!border-rose-400" : ""}`}
        {...props}
      />
      <span id={`${id}-error`} className="mt-1 min-h-[1.15em] text-xs text-rose-400">
        {error ? errorText : ""}
      </span>
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const f = c.form;

  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | invalid | sending | success | error

  function handleChange(e) {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (errors[e.target.name]) setErrors(validate(next)); // re-check once the user fixes it
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("invalid");
      e.target.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(profile.formspree, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      setValues(EMPTY_FORM);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  // Looked up at render time, so the message follows the language toggle
  const statusText = { invalid: f.fixFields, success: f.success, error: f.error }[status] ?? "";
  const statusColor = status === "success" ? "text-emerald-400" : "text-rose-400";

  return (
    <section id="contact" className="pt-20">
      <div className="container-page">
        <Reveal as="h2" className="mb-6 flex items-center gap-3 text-2xl font-bold sm:text-3xl">
          <span className="icon-badge h-11 w-11">
            <Send size={20} aria-hidden="true" />
          </span>
          {c.title}
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Contact information */}
          <Reveal className="glass p-6 sm:p-7">
            <h3 className="mb-5 text-xl font-bold">{c.infoTitle}</h3>
            <ul className="space-y-2">
              <InfoRow Icon={Mail} label={c.rows.email} value={profile.email} href={`mailto:${profile.email}`} copy />
              <InfoRow Icon={Phone} label={c.rows.phone} value={profile.phone} href={profile.phoneLink} copy />
              <InfoRow Icon={MapPin} label={c.rows.location} value={c.location} />
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="glass p-6 sm:p-7">
            <h3 className="mb-5 text-xl font-bold">{c.formTitle}</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-x-4 sm:grid-cols-2">
                <Field id="name" label={f.name} autoComplete="name" value={values.name} onChange={handleChange}
                  error={errors.name} errorText={f.errors.name} />
                <Field id="email" type="email" label={f.email} autoComplete="email" value={values.email}
                  onChange={handleChange} error={errors.email} errorText={f.errors.email} />
              </div>
              <Field id="subject" label={f.subject} value={values.subject} onChange={handleChange}
                error={errors.subject} errorText={f.errors.subject} />
              <Field id="message" label={f.message} multiline rows={5} value={values.message} onChange={handleChange}
                error={errors.message} errorText={f.errors.message} />

              {/* Honeypot: hidden from people, catches spam bots */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
                <Send size={18} aria-hidden="true" />
                {status === "sending" ? f.sending : f.send}
              </button>
              <p role="status" aria-live="polite" className={`mt-3 min-h-[1.4em] text-center text-sm font-medium ${statusColor}`}>
                {statusText}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
