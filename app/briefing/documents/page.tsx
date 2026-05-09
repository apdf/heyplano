"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { briefingDocuments, type BriefingDocument } from "@/lib/briefing-documents";
import s from "./page.module.css";

const TYPE_LABELS: Record<BriefingDocument["type"], string> = {
  deck: "Deck",
  appendix: "Appendix",
  research: "Research",
};

function ActiveDocument({ doc }: { doc: BriefingDocument }) {
  return (
    <div className={s.docCard}>
      <div className={s.docHeader}>
        <span className={s.typeBadge}>{TYPE_LABELS[doc.type]}</span>
        <span className={s.versionBadge}>v{doc.version}</span>
        <span className={s.docMeta}>{doc.date}</span>
      </div>
      <h2 className={s.docTitle}>{doc.title}</h2>
      <p className={s.docDescription}>{doc.description}</p>
      <a
        href={`/briefing/${doc.filename}`}
        className={s.downloadLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        View / Download
      </a>
    </div>
  );
}

function ArchivedDocument({ doc }: { doc: BriefingDocument }) {
  return (
    <div className={s.archivedRow}>
      <span className={s.typeBadge}>{TYPE_LABELS[doc.type]}</span>
      <span className={s.archivedTitle}>{doc.title}</span>
      <span className={s.archivedMeta}>
        v{doc.version} · {doc.date}
      </span>
    </div>
  );
}

export default function BriefingDocuments() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("briefing_email");
    if (!stored) {
      router.replace("/briefing");
      return;
    }
    setEmail(stored);
  }, [router]);

  if (!email) return null;

  const active = briefingDocuments.filter((d) => d.status === "active");
  const archived = briefingDocuments.filter((d) => d.status === "archived");

  return (
    <>
      <nav className={s.nav}>
        <div className={s.navInner}>
          <span className={s.wordmark}>
            <span className={s.hey}>Hey</span>
            <span className={s.plano}>Plano</span>
          </span>
          <span className={s.navLabel}>Client Briefing</span>
        </div>
      </nav>

      <main className={s.main}>
        <div className={s.wrapper}>
          <header className={s.header}>
            <p className={s.eyebrow}>Document Library</p>
            <h1 className={s.heading}>Your briefing materials</h1>
          </header>

          <section className={s.activeSection}>
            {active.map((doc) => (
              <ActiveDocument key={doc.filename} doc={doc} />
            ))}
          </section>

          {archived.length > 0 && (
            <section className={s.archivedSection}>
              <p className={s.archivedHeading}>Previous versions</p>
              <div className={s.archivedList}>
                {archived.map((doc) => (
                  <ArchivedDocument key={doc.filename} doc={doc} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <footer className={s.footer}>
        <div className={s.footerInner}>
          <span className={s.footerNote}>Accessed as {email}</span>
        </div>
      </footer>
    </>
  );
}
