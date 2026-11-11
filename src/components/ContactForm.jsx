/**
 * ContactForm — name / email / subject / message form on the Contact page.
 *
 * Messages are sent directly to your inbox through web3forms.com, using
 * the access key in src/data/site.js → form.accessKey. The visitor stays
 * on the page and sees a confirmation once the message is delivered.
 */
import { useState } from 'react'
import { site } from '../data/site.js'

const EMPTY = { name: '', email: '', subject: '', message: '', company: '' }

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!values.name.trim()) er.name = 'Please enter your name.'
    if (!values.email.trim()) er.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) er.email = 'Please enter a valid email address.'
    if (!values.message.trim()) er.message = 'Please write a short message.'
    return er
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (values.company) return // honeypot: silently ignore bots

    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) {
      document.getElementById(`cf-${Object.keys(er)[0]}`)?.focus()
      return
    }

    const subject = values.subject.trim() || `Message from ${values.name.trim()}`

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: site.form.accessKey,
          from_name: 'Portfolio contact form',
          name: values.name.trim(),
          email: values.email.trim(),
          subject,
          message: values.message.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success) throw new Error(data.message || `HTTP ${res.status}`)
      setStatus('sent')
      setValues(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading">Send a message</h2>
      <p className="contact-form-note">I usually reply within a few working days.</p>

      <div className="form-row">
        <Field id="name" label="Name" value={values.name} error={errors.name} onChange={update} autoComplete="name" />
        <Field id="email" label="Email" type="email" value={values.email} error={errors.email} onChange={update} autoComplete="email" />
      </div>

      <Field id="subject" label="Subject" optional value={values.subject} onChange={update} />
      <Field id="message" label="Message" textarea value={values.message} error={errors.message} onChange={update} />

      {/* Honeypot field — hidden from people, often filled by spam bots */}
      <div className="form-hp" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={update} />
      </div>

      <div className="form-actions">
        <button type="submit" className="button contact-submit" disabled={status === 'sending'}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M22 2 11 13" />
            <path d="M22 2 15 22l-4-9-9-4 20-7z" />
          </svg>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        <p className="form-status" role="status" aria-live="polite">
          {status === 'sent' && 'Thank you! Your message has been sent.'}
          {status === 'error' && (
            <>Sorry, something went wrong. Please email me at{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>.</>
          )}
        </p>
      </div>
    </form>
  )
}

function Field({ id, label, type = 'text', textarea, optional, value, error, onChange, autoComplete }) {
  const inputId = `cf-${id}`
  const errorId = `${inputId}-error`
  const shared = {
    id: inputId,
    name: id,
    value,
    onChange,
    autoComplete,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
  }
  return (
    <div className={`form-field${error ? ' has-error' : ''}`}>
      <label htmlFor={inputId}>
        {label}
        {optional && <span className="form-optional"> (optional)</span>}
      </label>
      {textarea ? <textarea rows={6} {...shared} /> : <input type={type} {...shared} />}
      {error && <p className="form-error" id={errorId}>{error}</p>}
    </div>
  )
}
