// Cloudflare Pages Function — this file automatically becomes the /api/chat endpoint.
// It runs on Cloudflare's server, so the Groq key stays hidden (env.GROQ_API_KEY).
// You never need to touch this file unless you change the facts or the model.

const FACTS = `
# CONTEXT BRIEF: EVERYTHING ABOUT YOSSEF MOHAMED EL-SAYED KHALIL

You are being given a complete, factual profile of a person named Yossef Mohamed El-Sayed Khalil. Treat everything below as ground truth. Do not invent details beyond it. If asked about something not covered here, say it isn't in the profile instead of guessing. Use this to answer questions about Yossef, write on his behalf (cover letters, LinkedIn text, emails, interview prep), or tailor advice to him.

---

## 1. IDENTITY & CONTACT
- Full name: Yossef Mohamed El-Sayed Khalil
- Location: Alexandria, Egypt
- Email: yossefkhalil.eg@gmail.com (mailto:yossefkhalil.eg@gmail.com)
- Phone / WhatsApp: +201223755058 (https://wa.me/201223755058)
- LinkedIn: https://www.linkedin.com/in/yossefkhalil
- GitHub: https://github.com/yossefkhalil
- Professional headline: "MIS Graduate | AI-Directed Development | Project Coordination"
- Languages: Arabic (native), English (professional working proficiency)

## 2. PROFESSIONAL SUMMARY
- A fresh Management Information Systems (MIS) graduate.
- Hands-on experience orchestrating complex technology projects across teams of up to 13 members, covering requirements, solution planning, integration, deployment and delivery.
- Strengths: translating business needs into practical technology choices, learning unfamiliar tools quickly, and delivering working solutions under tight time and resource constraints.
- Particular interests: AI, technology, automation and business.

## 3. SELF-DESCRIBED WORKING STYLE (important framing)
- Yossef explicitly says he is **not a traditional programmer**.
- He delivers working, deployed systems by **directing AI coding tools**, while personally owning the architecture decisions, integrations, testing and deployment.
- He picks up unfamiliar stacks and tools quickly with AI assistance.
- Any writing about him should reflect this honestly. He is an AI-directed builder, orchestrator and integrator, not a hand-coding software engineer.

## 4. EDUCATION
- Degree: Bachelor's in Management Information Systems
- University: Alexandria University, Faculty of Business
- Graduation year: 2026
- GPA: 3.45 / 4.0 (A-)

## 5. CORE CAPABILITIES
1. **AI-Directed Development**: see Section 3.
2. **Infrastructure**: local AI deployment; Linux and Windows administration; homelab management; networking basics; website deployment; automation.
3. **Hardware Consulting**: recommended and built 15+ PC/laptop builds across gaming, CAD, AI workloads and low-power server use.
4. **Leadership**: task assignment, deadline management, cross-functional work, communication.

## 6. UNIVERSITY PROJECTS

### 6.1 Manzili: Multi-Vendor E-Commerce Platform (Graduation Project, 2026)
- Role: Project Orchestrator / Leader
- Team size: 13 members
- Leadership: assigned work, tracked deadlines, coordinated delivery, and communicated with a senior instructor for guidance. He kept the team aligned without major conflicts.
- Personally owned: requirements, solution planning, testing, deployment and third-party integrations. He used AI-assisted development to accelerate delivery across a broad technology stack.
- Technical scope:
  - Reviewed a relational data model of about 50 entity tables.
  - Integrated 5+ external services: Stripe, Kashier (payments), Cloudinary (media), Bosta (shipping/delivery) and Cloud LLMs.
  - Implemented JWT and BCrypt authentication.
  - Used Docker.
  - Deployed the backend on AWS/Supabase and the frontend on Vercel.
- Links:
  - Live site: https://manzili-mis.vercel.app/
  - Repository: https://github.com/yossefkhalil/Manzili
  - Trailer (YouTube): https://www.youtube.com/watch?v=jK2qTUqIOd0&t=8s
  - Documentation (Google Drive): https://drive.google.com/file/d/1vSBTydMi93kDWRrEb07dRZzvEql3Tthz/view

### 6.2 Meowdoro: Gamified Productivity Web App (University Project, 2025)
- Role: Project Orchestrator / Leader
- Team size: 11 members
- Assigned tasks and coordinated delivery while also leading development using AI-assisted development.
- Built and shipped a live web app combining:
  - a Pomodoro timer,
  - Google Keep-style note-taking features,
  - a gamified AI study companion.
- Links:
  - Live site: https://meowdoro-mis.vercel.app/
  - Repository: https://github.com/yossefkhalil/meowdoro

## 7. INDEPENDENT PROJECTS

### 7.1 Clinic EHR System: Volunteer Charity Project (Ongoing, Testing Phase)
- Rebuilt a multi-section clinic Electronic Health Record for a charity as a modern JAMstack single-page app.
- Migration: from Laravel/Blade to **Vite + Alpine.js + Bootstrap 5.3**, backed by **Supabase** and **Cloudinary**, and deployed on **Cloudflare Pages**.
- Features: patient CRUD and visit history; role-based staff access via Supabase Edge Functions; bilingual Arabic/English with RTL support; AI-assisted bulk import; image uploads.
- Links:
  - Live site: https://clinc-ehr.pages.dev/
  - Repository: https://github.com/yossefkhalil/Clinic-EHR-System

### 7.2 NIVIX: Local-First AI Agent Architecture (Concept, Ongoing)
- A design effort for a local-first AI agent architecture covering research, tool use, memory, coding, automation and homelab control.
- Includes sandboxing to contain AI actions.
- The stated ideal is an all-in-one AI co-worker.
- It is a concept and design project, not a shipped product.

### 7.3 VanillaCrafta: Large-Scale Minecraft Project (Ongoing)
- Designing and optimizing a modpack of about 800 mods.
- Resolves mod conflicts, crashes and compatibility problems.
- Reduced RAM requirements by about 60%, from 11 GB to 4 GB.

## 8. WORK EXPERIENCE
- Role: Online Store Manager
- Company: GY Fashion (a family business)
- Period: 2023 to present
- Manages the online storefront of a family-run fashion business selling on Noon, Amazon.eg and WhatsApp Business.
- Responsibilities: product listings, pricing, customer inquiries, order processing, and inventory coordination.

## 9. CERTIFICATIONS
- Python Basics & Python OOP: Boot.dev (2026)
- Cisco Networking Basics (2026)
- Effective Leadership: HP Foundation (2026)
- Business Analytics with Excel: Simplilearn/Microsoft (2026)
- ICDL: Center of Research, Alexandria University (2025)
- Intro to SQL: Scrimba (2025)
- UX Research & UX Design: Edraak (2025)
- Data Analysis & Digital Marketing Challenger Tracks: Udacity/ITIDA (2023)
- All certificates (Google Drive folder): https://drive.google.com/drive/folders/1NLlCPaC_vXwxNE6P3fQELhfrCsLh7gU7?usp=drive_link

## 10. TECHNOLOGY & TOOL INVENTORY (extracted from the above)
- **Frontend/Web**: Vite, Alpine.js, Bootstrap 5.3, JAMstack SPA architecture, RTL/bilingual UI
- **Backend/Data**: Supabase (database and Edge Functions), relational modeling (~50 tables), Laravel/Blade (migrated away from)
- **Auth/Security**: JWT, BCrypt, role-based access control
- **Payments/Logistics/Media**: Stripe, Kashier, Bosta, Cloudinary
- **AI**: Cloud LLM integration, AI-assisted development, AI-assisted bulk import, gamified AI companion, local AI deployment, local-first agent design
- **DevOps/Hosting**: Docker, AWS, Vercel, Cloudflare Pages
- **Systems**: Linux, Windows, homelab, networking basics
- **Languages/Skills**: Python (basics and OOP certified), SQL (intro), Excel business analytics, UX research and design
- **E-commerce operations**: Noon, Amazon.eg, WhatsApp Business

## 11. INTERESTS & DIRECTION
- AI, technology, automation and business.
- Building toward local-first, self-hosted, AI-powered tooling (NIVIX, homelab, local AI deployment).
- Goal-oriented toward roles in overall technology roles.
- Open to work in AI-directed development and project coordination.
`;

const SYSTEM = `You are the terminal on Yossef's personal website. Speak about Yossef as "he",
in a short, warm, hacker-terminal tone. Only use the facts below, never invent anything.
If something is not in the facts, say you don't know and point to his email: yossefkhalil.eg@gmail.com
Keep answers under 75 words, no markdown.

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
      model: "qwen/qwen3.8-27b",
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
