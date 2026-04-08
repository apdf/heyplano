"use client";

import { useState, FormEvent } from "react";
import s from "./page.module.css";
import {
  NAV_LINKS,
  HERO_EYEBROW,
  HERO_HEADLINE,
  HERO_SUBTEXT,
  EMAIL_PLACEHOLDER,
  EMAIL_BUTTON,
  EMAIL_THANKS,
  PROOF_BAR,
  PAIN_HEADLINE,
  PAIN_CARDS,
  BUILDING_HEADLINE,
  BUILDING_ITEMS,
  CTA_HEADLINE,
  CTA_SUBTEXT,
  FOOTER_COPY,
  FOOTER_EMAIL,
} from "./content";

/* ------------------------------------------------------------------ */
/*  Reusable email signup form                                        */
/* ------------------------------------------------------------------ */

function EmailForm({ id }: { id: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    console.log(`[HeyPlano waitlist] ${email}`);
    setSubmitted(true);
  }

  if (submitted) {
    return <p className={s.thankYou}>{EMAIL_THANKS}</p>;
  }

  return (
    <form className={s.emailForm} onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder={EMAIL_PLACEHOLDER}
        className={s.emailInput}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label={`Email address (${id})`}
      />
      <button type="submit" className={s.emailButton}>
        {EMAIL_BUTTON}
      </button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Logo wordmark                                                     */
/* ------------------------------------------------------------------ */

function Logo() {
  return (
    <span className={s.logo}>
      <span className={s.logoHey}>Hey</span>
      <span className={s.logoPlano}>Plano</span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* --- Nav --- */}
      <nav className={s.nav}>
        <div className={s.navInner}>
          <Logo />
          <ul className={s.navLinks}>
            <li>
              <a href="#how-it-works">{NAV_LINKS[0]}</a>
            </li>
            <li>
              <a href="#why-free">{NAV_LINKS[1]}</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* --- Hero --- */}
      <section className={s.hero}>
        <p className={s.eyebrow}>{HERO_EYEBROW}</p>
        <h1 className={s.heroHeadline}>{HERO_HEADLINE}</h1>
        <p className={s.heroSub}>{HERO_SUBTEXT}</p>
        <EmailForm id="hero" />
      </section>

      {/* --- Proof bar --- */}
      <div className={s.proofBar}>{PROOF_BAR}</div>

      {/* --- Pain section --- */}
      <section id="how-it-works" className={s.pain}>
        <div className={s.wrapper}>
          <h2 className={s.sectionHeadline}>{PAIN_HEADLINE}</h2>
          <div className={s.cardRow}>
            {PAIN_CARDS.map((card) => (
              <div key={card.title} className={s.card}>
                <h3 className={s.cardTitle}>{card.title}</h3>
                <p className={s.cardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- What we're building --- */}
      <section id="why-free" className={s.building}>
        <div className={s.wrapper}>
          <h2 className={s.sectionHeadline}>{BUILDING_HEADLINE}</h2>
          <div className={s.grid2x2}>
            {BUILDING_ITEMS.map((item) => (
              <div key={item.title} className={s.card}>
                <p className={s.cardLabel}>{item.label}</p>
                <h3 className={s.cardTitle}>{item.title}</h3>
                <p className={s.cardBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Second CTA --- */}
      <section className={s.secondCta}>
        <h2 className={s.sectionHeadline}>{CTA_HEADLINE}</h2>
        <p className={s.secondCtaSub}>{CTA_SUBTEXT}</p>
        <EmailForm id="cta" />
      </section>

      {/* --- Footer --- */}
      <footer className={s.footer}>
        <div className={s.footerInner}>
          <Logo />
          <span className={s.footerCopy}>{FOOTER_COPY}</span>
          <a href={`mailto:${FOOTER_EMAIL}`} className={s.footerEmail}>
            {FOOTER_EMAIL}
          </a>
        </div>
      </footer>
    </>
  );
}
