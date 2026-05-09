"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import s from "./page.module.css";

export default function BriefingLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !password || loading) return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/briefing-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 401) {
        setError("Incorrect password.");
        setLoading(false);
        return;
      }
    } catch {
      // logging failure doesn't block access
    }

    sessionStorage.setItem("briefing_email", email);
    router.push("/briefing/documents");
  }

  return (
    <main className={s.page}>
      <div className={s.card}>
        <div className={s.wordmark}>
          <span className={s.hey}>Hey</span>
          <span className={s.plano}>Plano</span>
        </div>
        <h1 className={s.heading}>Client Briefing</h1>
        <p className={s.sub}>Enter your email to access the document library.</p>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className={s.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className={s.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
          <button type="submit" className={s.button} disabled={loading}>
            {loading ? "Opening…" : "Access briefing"}
          </button>
          {error && <p className={s.error}>{error}</p>}
        </form>
      </div>
    </main>
  );
}
