# StudySphere AI — Starter Project

A playful, colourful student-learning dashboard built with Next.js, React and TypeScript.

## What works in this starter

- Responsive student dashboard and navigation
- Sample subject progress cards
- Clickable daily study tasks
- AI Tutor interface with an explicitly labelled demo response
- Sample multiple-choice quiz with answer feedback
- Flashcard flip interaction
- Library search over sample subjects
- Study planner and progress screens

## What is intentionally not connected yet

This is the first frontend milestone, not a finished AI product. Authentication, private file uploads, database persistence, RAG, real AI calls, real analytics and curriculum-specific content must be added in later milestones. The numbers and profile shown are sample data.

## Requirements

- Node.js 20 or newer
- npm
- VS Code (recommended)

## Run locally

1. Extract the ZIP.
2. Open the extracted `studysphere-ai` folder in VS Code.
3. Open Terminal in that folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open http://localhost:3000

## Next build milestones

1. Add Supabase project, authentication and Row Level Security.
2. Add profile, subjects, chapters and study-session tables.
3. Add private document upload and text extraction.
4. Add a server-side AI provider adapter and usage limits.
5. Add document chunking, embeddings and retrieval (RAG).
6. Generate quizzes and flashcards from uploaded material.
7. Persist attempts and calculate real learning analytics.
8. Add curriculum selection and verified curriculum metadata.

## AI integration safety

- Never put provider API keys in client components or variables prefixed with `NEXT_PUBLIC_`.
- Make AI requests from server-side route handlers.
- Validate inputs, enforce rate limits and set token/file-size limits.
- Use a provider adapter so the app can switch providers.
- Do not upload private student documents to an AI provider without clear disclosure and appropriate permission.
- Use age-appropriate accounts and check each provider's current minimum-age and terms.

## Design direction

Playful student-first visual language: rounded cards, gentle gradients, cheerful emoji accents, soft purple/mint/peach colours, readable typography and responsive layouts.
