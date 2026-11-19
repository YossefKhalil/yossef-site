// Cloudflare Pages Function - this file automatically becomes the /api/chat endpoint.
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
- Website: https://yossefkhalil.pages.dev
- Professional headline: "MIS Graduate | AI Integration & Automation | Technical Delivery | AI-Directed Development"
- Languages: Arabic (native), English (B1+ intermediate)
- Military status: Exempted (mention only if asked directly)

## 2. PROFESSIONAL SUMMARY
- MIS graduate (Alexandria University, GPA 3.45/4.0) who takes products from requirements to live deployment.
- Leads small technical teams and owns solution planning, architecture and stack selection, integration contracts, quality gates and release.
- Shipped a multi-vendor e-commerce platform with a 13-person team and 5+ integrations, plus a bilingual clinic EHR now live in production for a charity.
- Builds local-first AI agents and automation; has run a family online store on Noon and Amazon.eg since 2022.
- Currently focused on Python and LLM fine-tuning.
- Broad knowledge of technology that informs a software-architect mindset.
- Particular interests: AI, technology, automation and business.
- Open to work in AI integration and automation, technical delivery, AI-directed development and project coordination.

## 3. SELF-DESCRIBED WORKING STYLE (important framing)
- Yossef does not present himself as a traditional hands-on programmer.
- He delivers working, deployed systems by **directing AI coding tools**, while personally owning the architecture decisions, integrations, testing and deployment.
- He picks up unfamiliar stacks and tools quickly with AI assistance.
- Any writing about him should reflect this honestly. He is an AI-directed builder, orchestrator and integrator, not a hand-coding software engineer.

## 4. EDUCATION
- Degree: Bachelor's in Management Information Systems
- University: Alexandria University, Faculty of Business
- Years: 2022 - 2026
- GPA: 3.45 / 4.0 (A-)

## 5. CORE CAPABILITIES
- **AI & automation**: AI agents and generative AI; LLMs, llama.cpp and Hugging Face; LLM fine-tuning (current focus); AI-directed development and applied integration; data privacy, sandboxing and on-device inference; N8N automation.
- **Engineering & delivery**: architecture and system design; REST APIs and third-party integrations; requirements and solution planning; testing and delivery ownership; performance optimization and troubleshooting.
- **Leadership**: project management; task assignment; cross-team coordination and deadlines.
- **Infrastructure**: AWS, Docker, Supabase, Vercel, Cloudflare; Git and GitHub; Linux and Windows administration; networking, hosting and deployment; technical support.
- **Data & business**: Python and SQL fundamentals; business analytics and Excel; e-commerce and inventory management; UI/UX design and research.
- **Hardware**: consulting and custom PC builds; 15+ builds across gaming, CAD, AI workloads and low-power server use; homelab management.

## 6. EXPERIENCE

### 6.1 Software Developer (Volunteer): Charity Clinic EHR (Sep 2026 - Present)
- Replaced the clinic's legacy Laravel records app with a bilingual, cloud-native EHR on Supabase and Cloudflare; live in production for a charity clinic.
- Owned requirements and solution planning across a 17-field patient registry, visit history, clinical notes, attachments, financial reporting, Excel export and Arabic-aware search, with per-section role-based access and row-level security on every table.
- Specified and directed an AI import agent that reads spreadsheets, PDFs and photographed notes for bulk patient import, running LFM3-VL-2B in the browser through wllama so patient data never leaves the clinic PC.
- Set the release bar: an automated test suite and CI gate every deployment.
- Stack notes: JAMstack SPA rebuilt from Laravel/Blade to Vite + Alpine.js + Bootstrap 5.3, Supabase and Cloudinary, deployed on Cloudflare Pages.
- Links:
  - Live site: https://clinc-ehr.pages.dev/
  - Repository: https://github.com/yossefkhalil/Clinic-EHR-System

### 6.2 Team Lead: Manzili, Multi-Vendor E-Commerce Platform (Graduation Project, Jun 2026)
- Led a 13-member team: assigned work, tracked deadlines and coordinated delivery from requirements through deployment, working closely with the senior instructor to keep the team aligned.
- Owned solution planning and testing, and selected and coordinated five third-party integrations (Stripe, Kashier, Cloudinary, Bosta and cloud LLMs), defining each integration contract and its acceptance criteria.
- Took ownership of a roughly 50-table relational model and JWT/BCrypt authentication, reviewing and improving a teammate's design before build; containerised in Docker and deployed on AWS, Supabase and Vercel.
- Links:
  - Live site: https://manzili-mis.vercel.app/
  - Repository: https://github.com/yossefkhalil/Manzili
  - Trailer (YouTube): https://www.youtube.com/watch?v=jK2qTUqIOd0&t=8s
  - Documentation (Google Drive): https://drive.google.com/file/d/1vSBTydMi93kDWRrEb07dRZzvEql3Tthz/view

### 6.3 Online Store Manager: GY Fashion (Family Business), 2022 - Present
- Manages the online storefront of a family-run fashion business selling on Noon, Amazon.eg and WhatsApp Business.
- Responsibilities: product listings, pricing, customer inquiries, order processing, and inventory coordination.

## 7. PROJECTS

### 7.1 AI-DA System: AI Deletion-Audit Agent (HackerRank Orchestrate, Oct 2026)
- An AI-powered deletion-audit agent that verifies whether personal data was truly deleted across databases, logs, backups and sync paths, modelled on a $2.4M ghost-data failure.
- Built in 24 hours using free-tier tools and local models only; ranked in the top 1,000 of roughly 52,000 participants.
- Links:
  - Repository: https://github.com/YossefKhalil/AI-DA-System
  - Problem statement: https://github.com/interviewstreet/hackerrank-orchestrate-october26

### 7.2 VCamdroid NEXT: Android Phone as Windows Webcam (Personal Project, 2026)
- Maintains a fork of the open-source VCamdroid, which turns an Android phone into a Windows webcam over USB (ADB) or Wi-Fi with QR pairing, working with Zoom, Teams, Meet, Discord and OBS.
- Diagnosed the upstream Wi-Fi streaming failure (a handshake packet read at the wrong offsets) and drove the fix, moving RTSP to TCP with automatic reconnection and watchdogs.
- Rebuilt the desktop client with a Material 3 interface: Kotlin, Camera2 and OpenGL on Android; C++, FFmpeg and Softcam (DirectShow) on Windows; shipped with a Windows installer, portable build and APK.
- Links:
  - Repository: https://github.com/YossefKhalil/VCamdroid-NEXT
  - Releases: https://github.com/YossefKhalil/VCamdroid-NEXT/releases

### 7.3 NIVIX: Local-First AI Agent Architecture (Personal Project, Ongoing)
- Designing a local-first AI agent architecture covering research, tool use, memory, coding, automation and homelab control, with sandboxing to contain AI actions; the long-term goal is an all-in-one AI co-worker running on his own hardware.
- Specified the embodiments: Ni-Volt, a phone-brained omnidirectional robot with an offline local-LLM fallback and hard safety stops, and Ni-Watch, a wrist push-to-talk interface to the agent.
- Link: https://github.com/YossefKhalil/N.I.V.I.X

### 7.4 Meowdoro: Gamified Productivity Web App (University Project, 2025)
- Team lead for 11 people, assigning tasks and coordinating delivery while leading development with AI-assisted tooling.
- Shipped a live productivity app combining a Pomodoro timer, a Google Keep style note-taking space and a gamified AI study companion.
- Links:
  - Live site: https://meowdoro-mis.vercel.app/
  - Repository: https://github.com/yossefkhalil/meowdoro

### 7.5 VanillaCrafta: Large-Scale Minecraft Modpack (Personal Project, Ongoing)
- Tuned a roughly 800-mod Minecraft pack to resolve mod conflicts, crashes and compatibility issues, cutting RAM use by about 60 percent, from 11GB to 4GB.

## 8. CERTIFICATIONS
- Python Basics & Python OOP: Boot.dev (2026)
- Cisco Networking Basics (2026)
- Effective Leadership: HP Foundation (2026)
- Business Analytics with Excel: Simplilearn/Microsoft (2026)
- AWS 1: Intro to Cloud Computing: Manara (2026)
- Intro to SQL: Scrimba (2025)
- ICDL Arabia (2025)
- All certificates (Google Drive folder): https://drive.google.com/drive/folders/1NLlCPaC_vXwxNE6P3fQELhfrCsLh7gU7?usp=drive_link

## 9. TECHNOLOGY & TOOL INVENTORY (extracted from the above)
- **Frontend/Web**: Vite, Alpine.js, Bootstrap 5.3, JAMstack SPA architecture, RTL/bilingual UI
- **Backend/Data**: Supabase (database and Edge Functions), relational modeling (~50 tables), Laravel/Blade (migrated away from)
- **Auth/Security**: JWT, BCrypt, role-based access control, row-level security
- **Payments/Logistics/Media**: Stripe, Kashier, Bosta, Cloudinary
- **AI**: Cloud LLM integration, AI-assisted development, AI-assisted bulk import, on-device vision models (LFM3-VL-2B via wllama), llama.cpp, Hugging Face, gamified AI companion, local AI deployment, local-first agent design
- **DevOps/Hosting**: Docker, AWS, Vercel, Cloudflare Pages
- **Systems**: Linux, Windows, homelab, networking basics, N8N automation
- **Languages/Skills**: Python (basics and OOP certified), SQL (intro), Excel business analytics, UX research and design
- **Mobile/Desktop**: Kotlin, Camera2, OpenGL, C++, FFmpeg, DirectShow (Softcam)
- **E-commerce operations**: Noon, Amazon.eg, WhatsApp Business

## 10. INTERESTS & DIRECTION
- AI, technology, automation and business.
- Hands-on with local LLMs, local AI deployment, homelab and automation.
- Currently focused on Python and LLM fine-tuning.
- Building toward local-first, self-hosted, AI-powered tooling (NIVIX, homelab).
- Goal-oriented toward roles in overall technology roles.
- Open to work in AI integration and automation, technical delivery, AI-directed development and project coordination.
`;

const SYSTEM = `You are the terminal on Yossef's personal website. Speak about Yossef as "he",
in a short, warm, hacker-terminal tone. Only use the facts below, never invent anything.
If something is not in the facts, say you don't know and point to his email: yossefkhalil.eg@gmail.com
Keep answers under 75 words, no markdown, no em dashes.

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
  return Response.json({ reply: text || "no answer - try rephrasing?" });
}
