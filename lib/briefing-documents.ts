export type DocumentType = "deck" | "appendix" | "research";
export type DocumentStatus = "active" | "archived";

export interface BriefingDocument {
  title: string;
  version: string;
  date: string;
  type: DocumentType;
  status: DocumentStatus;
  description: string;
  filename: string;
}

export const briefingDocuments: BriefingDocument[] = [
  {
    title: "Strategic Brief",
    version: "0.3",
    date: "9 May 2026",
    type: "deck",
    status: "active",
    description:
      "The founding hypothesis, product architecture, moat, and revenue model — 13 slides. Sent to a small circle. Not for distribution.",
    filename: "pitch_deck.html",
  },
];
