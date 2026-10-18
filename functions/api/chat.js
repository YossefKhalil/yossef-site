// Cloudflare Pages Function — this file automatically becomes the /api/chat endpoint.
// It runs on Cloudflare's server, so the Groq key stays hidden (env.GROQ_API_KEY).
// You never need to touch this file unless you change the facts or the model.

const FACTS = `
Yossef Mohamed El-Sayed Khalil — fresh MIS (Management Information Systems) graduate,
Alexandria University, 2026, GPA 3.45 (A-). Based in Alexandria, Egypt.
Into AI, tech, automation and business. Arabic (native), English (professional).

Projects:
- Manzili: multi-vendor e-commerce graduation project. Led a 13-person team. Integrated
  Stripe, Kashier, Cloudinary, Bosta and cloud LLMs; JWT/BCrypt auth; Docker; backend on
  AWS/Supabase, frontend on Vercel. Live: manzili-mis.vercel.app — repo github.com/YossefKhalil/Manzili
- Meowdoro: gamified productivity web app (Pomodoro timer, note-taking, AI study companion),
  led an 11-person team. Live: meowdoro-mis.vercel.app
- Clinic EHR System: volunteer charity project. JAMstack SPA (Vite, Alpine.js, Bootstrap,
  Supabase, Cloudinary) deployed on Cloudflare Pages.
- NIVIX: concept for a local-first AI agent architecture (memory, tools, homelab control).
- VanillaCrafta: ~800-mod Minecraft pack; cut RAM needs from 11GB to 4GB.

Work: manages his family's online fashion store (Noon, Amazon.eg, WhatsApp Business) since 2023.
Hardware: recommended and built 15+ PC builds (gaming, CAD, AI, low-power servers); runs a homelab.
Certifications: Boot.dev Python, Cisco Networking Basics, HP leadership, ICDL, SQL, UX and more.

Links: github.com/yossefkhalil, linkedin.com/in/yossefkhalil, yossefkhalil.eg@gmail.com,
WhatsApp +20 122 375 5058. Open to work in AI-directed development and project coordination.
`;

const SYSTEM = `You are the terminal on Yossef's personal website. Speak about Yossef as "he",
in a short, warm, hacker-terminal tone. Only use the facts below — never invent anything.
If something is not in the facts, say you don't know and point to his email.
Keep answers under 80 words.

FACTS: ` + FACTS;

export async function onRequestPost({ request, env }) {
  const message = (await request.json()).message;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + env.GROQ_API_KEY,
    },
    body: JSON.stringify({
      model: "qwen/qwen3.8-27b",   // change the model here if you want another one
      max_tokens: 250,
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: String(message).slice(0, 500) },
      ],
    }),
  });

  if (!res.ok) {
    return Response.json({ reply: "brain offline (Groq said HTTP " + res.status + ")." });
  }

  const data = await res.json();
  const text = (data.choices?.[0]?.message?.content || "").trim();
  return Response.json({ reply: text || "no answer — try rephrasing?" });
}
