import React, { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function submit(e) {
    e.preventDefault()
    alert('Thank you! We have received your message.')
    setForm({ name: '', email: '', message: '' })
  }
  return (
    <>
      <PageHeader title="Contact" subtitle="Send a message" />
      <section className="container">
        <form onSubmit={submit} className="form-row">
          <input className="input" name="name" placeholder="Name" value={form.name} onChange={update} required />
          <input className="input" type="email" name="email" placeholder="Email" value={form.email} onChange={update} required />
          <textarea className="input" rows="5" name="message" placeholder="Message" value={form.message} onChange={update} required />
          <button className="btn" type="submit">Send</button>
        </form>
      </section>
    </>
  )
}
