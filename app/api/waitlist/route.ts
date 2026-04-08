import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: Request) {
  const { email } = (await request.json()) as { email?: string };

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    // Add contact to Resend audience
    await getResend().contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    // Send welcome email
    await getResend().emails.send({
      from: "HeyPlano <hello@heyplano.com>",
      to: email,
      subject: "You're on the HeyPlano waitlist",
      text: [
        `Hey,`,
        ``,
        `You're in. Welcome to the HeyPlano waitlist.`,
        ``,
        `We started building this because we went through the process of buying property in Spain ourselves — and honestly, it made us angry. The whole system is set up to benefit agents, lawyers, and middlemen. Nobody is on your side. Nobody tells you what you don't know. And by the time you figure it out, you've already signed something you shouldn't have.`,
        ``,
        `HeyPlano is the independent advice we wish we'd had. No referral fees. No hidden agendas. Just clear, honest guidance from people who've been through it.`,
        ``,
        `We're building it right now. When we launch, you'll be the first to know.`,
        ``,
        `In the meantime — we're putting together a free guide: "7 things we learned the hard way about buying in Spain." We'll send it your way as soon as it's ready.`,
        ``,
        `Talk soon,`,
        `The HeyPlano team`,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
