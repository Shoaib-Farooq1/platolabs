'use client'

import { useState } from 'react'
import Image from 'next/image'

// ── Section 1: Brand splash ───────────────────────────────────────────────────
function BrandSplash() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 1.5rem',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(13,198,187,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13,198,187,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />
      <div className="glow-orb" style={{ width: 700, height: 700, top: '-200px', left: '-300px', opacity: 0.5 }} />
      <div className="glow-orb" style={{ width: 400, height: 400, bottom: '-100px', right: '-100px', opacity: 0.3 }} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="animate-fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <Image src="/logo.png" alt="PlatoLabs" width={160} height={160} style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 'clamp(4rem, 11vw, 9rem)', letterSpacing: '-0.04em', lineHeight: 1, color: '#f0f0f0' }}>
            Plato<span className="shimmer-text" style={{ color: '#0dc6bb' }}>Labs</span>
          </span>
        </div>
        <div className="animate-fade-up delay-200" style={{ fontSize: '1rem', color: '#aaa', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 500 }}>
          Sense · Track · Optimise
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '0.65rem', color: '#333', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, #0dc6bb, transparent)' }} />
      </div>
    </section>
  )
}

// ── Section 2: Hero statement ─────────────────────────────────────────────────
function HeroStatement() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '0 1.5rem', borderTop: '1px solid #1a1a1a' }}>
      <div className="glow-orb" style={{ width: 500, height: 500, top: '10%', right: '-150px', opacity: 0.35 }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, width: '100%', margin: '0 auto' }}>
        <h1 className="animate-fade-up" style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '1.5rem', color: '#f0f0f0', maxWidth: 820 }}>
          Performance & Rehabilitation<br />
          <span className="shimmer-text">Intelligence.</span>
        </h1>
        <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#666', lineHeight: 1.8, maxWidth: 520, marginBottom: '3rem' }}>
          PlatoLabs is engineering wearable systems for rehabilitation, recovery, and human performance tracking.
        </p>
        <div className="animate-fade-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn-ghost px-7 py-3.5 rounded-full text-sm inline-flex">Join Waitlist</a>
        </div>
      </div>
    </section>
  )
}

// ── PL1 ───────────────────────────────────────────────────────────────────────
function PL1() {
  const features = [
    { label: 'Motion Capture', desc: 'High performance wearable sensors capture precise full-body movement data in real time.' },
    { label: 'Movement Learning', desc: 'Our AI pipeline learns each users unique movement signature and flags deviations instantly.' },
    { label: 'Live Scoring', desc: 'Movement quality scored rep by rep — live, on dashboard, no delay.' },
    { label: 'Personalised Baselines', desc: 'The system adapts to each users anatomy and style, not a one-size-fits-all norm.' },
  ]
  return (
    <section id="pl1" style={{ padding: '8rem 1.5rem', background: 'rgba(13,198,187,0.02)', borderTop: '1px solid #1a1a1a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            The Platform: <span className="shimmer-text">PL1</span>
          </h2>
          <p style={{ color: '#666', maxWidth: 520, margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            A wearable resistance-training form analyser that gives patients and clinicians real-time biomechanical feedback.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {features.map((f, i) => (
            <div key={i} className="feature-card" style={{ padding: '1.75rem', borderRadius: '0.875rem' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid rgba(13,198,187,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', color: '#0dc6bb', fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.95rem' }}>{f.label}</h3>
              <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact / Waitlist ────────────────────────────────────────────────────────
function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', location: '', subject: '', message: '' })

  const handleSubmit = async () => {
    if (!form.email) return
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyJAay4Xb_ObRyPegKXy_U_NaXQA61YqM96yOVSR06JNSv5KOr3dxlMhPQm2sdig0I0Sw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch (e) {
      console.error(e)
    }
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%', background: '#111', border: '1px solid #1e1e1e', borderRadius: '0.5rem',
    padding: '0.875rem 1rem', color: '#f0f0f0', fontSize: '0.9rem', outline: 'none',
    transition: 'border-color 0.2s', fontFamily: 'var(--font-dm-sans)',
  }
  const labelStyle = {
    display: 'block', fontSize: '0.7rem', letterSpacing: '0.08em',
    textTransform: 'uppercase' as const, color: '#555', marginBottom: '0.5rem', fontWeight: 600,
  }

  return (
    <section id="contact" style={{ padding: '8rem 1.5rem', borderTop: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
      <div className="glow-orb" style={{ width: 700, height: 700, bottom: '-300px', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }} />
      <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem', color: '#f0f0f0' }}>
            Join the <span className="shimmer-text">PL1</span> Waitlist
          </h2>
          <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 460, margin: '0 auto' }}>
            Be first to get access to PL1 hardware and early research partnerships.
          </p>
        </div>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px solid rgba(13,198,187,0.2)', borderRadius: '1rem', background: 'rgba(13,198,187,0.04)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
            <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.5rem', fontWeight: 700, color: '#0dc6bb', marginBottom: '0.5rem' }}>You're on the list.</h3>
            <p style={{ color: '#555', fontSize: '0.9rem' }}>We'll be in touch when PL1 is ready for early access.</p>
          </div>
        ) : (
          <div style={{ border: '1px solid #1a1a1a', borderRadius: '1rem', padding: '2.5rem', background: 'rgba(17,17,17,0.6)', backdropFilter: 'blur(12px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input style={inputStyle} placeholder="Kyle Smith" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  onFocus={e => (e.currentTarget.style.borderColor = '#0dc6bb')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#1e1e1e')} />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input style={inputStyle} type="email" placeholder="you@example.com" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  onFocus={e => (e.currentTarget.style.borderColor = '#0dc6bb')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#1e1e1e')} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Location</label>
                <input style={inputStyle} placeholder="City / Country" value={form.location}
                  onChange={e => setForm({ ...form, location: e.target.value })}
                  onFocus={e => (e.currentTarget.style.borderColor = '#0dc6bb')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#1e1e1e')} />
              </div>
              <div>
                <label style={labelStyle}>Subject</label>
                <input style={inputStyle} placeholder="Clinician / Investor / Researcher" value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  onFocus={e => (e.currentTarget.style.borderColor = '#0dc6bb')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#1e1e1e')} />
              </div>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <label style={labelStyle}>Tell us about yourself</label>
              <textarea style={{ ...inputStyle, height: 140, resize: 'vertical' }}
                placeholder="Briefly describe your setting and how movement analytics could help you"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                onFocus={e => (e.currentTarget.style.borderColor = '#0dc6bb')}
                onBlur={e => (e.currentTarget.style.borderColor = '#1e1e1e')} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button onClick={handleSubmit} className="btn-teal"
                style={{ padding: '1rem 3.5rem', borderRadius: '100px', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1a1a1a', padding: '2rem 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Image src="/logo.png" alt="PlatoLabs" width={24} height={24} style={{ borderRadius: 4 }} />
        <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem', color: '#444' }}>
          PlatoLabs © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <main>
        <BrandSplash />
        <HeroStatement />
        <PL1 />
        <Contact />
      </main>
      <Footer />
    </>
  )
}