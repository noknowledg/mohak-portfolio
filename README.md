# Mohak Jha — Portfolio

A mobile-first personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide icons. No backend or database.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add real contact details

Open `lib/content.ts` and change the three values in `contact`:

```ts
export const contact = {
  email: "[EMAIL]",       // e.g. "name@example.com"
  phone: "[PHONE]",       // e.g. "+977 98XXXXXXXX"
  linkedin: "[LINKEDIN]", // e.g. "https://www.linkedin.com/in/your-name"
  location: "Nepal",
};
```

The Email, Call and LinkedIn buttons turn into working links automatically once the placeholders are replaced.
All other text (journey, skills, roadmap, interests, profile) is also in `lib/content.ts`.

## Deploy to GitHub + Vercel (free)

1. Create a new empty repository on GitHub.
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. Go to https://vercel.com/new, import the repository, and click **Deploy**. No settings need changing.

## Structure

```
app/            layout, page, global styles, favicon
components/     one file per section (Hero, About, Journey, Skills, Future, Beyond, Philosophy, Profile, Contact)
lib/content.ts  all editable content
```
