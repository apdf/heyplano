import { Resend } from "resend";

export async function POST(request: Request) {
  const { email } = (await request.json()) as { email?: string };

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[waitlist] RESEND_API_KEY is not set");
    return Response.json({ error: "Server misconfigured" }, { status: 500 });
  }

  if (!process.env.RESEND_AUDIENCE_ID) {
    console.error("[waitlist] RESEND_AUDIENCE_ID is not set");
    return Response.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Add contact to Resend audience
    const { error: contactError } = await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    });

    if (contactError) {
      console.error("[waitlist] contacts.create failed:", contactError);
      return Response.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    // Send welcome email
    const { error: emailError } = await resend.emails.send({
      from: "HeyPlano <hello@heyplano.com>",
      to: email,
      subject: "Your guide is inside.",
      text: [
        `Hey,`,
        ``,
        `We went through the process of buying property in Spain ourselves. It was maddening. The kind of maddening where you realise, halfway through signing a 70-page mortgage contract, that nobody in the room is actually on your side.`,
        ``,
        `So we built HeyPlano. And we wrote you a guide.`,
        ``,
        `7 things we learned the hard way about buying property in Spain is attached. Real process, real numbers, no agent spin. Read it before you sign anything.`,
        ``,
        `Download it here: https://heyplano.com/heyplano-guide.pdf`,
        ``,
        `We're building the full product now — a step-by-step guide through the entire buying process, document review, mortgage comparison, and plain-language explanations of everything the industry would rather keep opaque. When it's ready, you'll be first in.`,
        ``,
        `One ask: if you know someone starting to look at property in Spain, send them to heyplano.com. The more people who find this early, the better we can build it.`,
        ``,
        `Talk soon,`,
        `The HeyPlano team`,
      ].join("\n"),
    });

    if (emailError) {
      console.error("[waitlist] emails.send failed:", emailError);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] unexpected error:", err);
    return Response.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
