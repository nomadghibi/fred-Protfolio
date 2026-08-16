# Fred Dehnashi — GitHub Portfolio

A customized creative developer portfolio for **Fred Dehnashi** (`nomadghibi`). It presents selected AI, SaaS, automation, analytics, accessibility, and local-business projects using an interactive Next.js and Three.js interface.

## Portfolio Content

- Personalized home and about pages
- Curated GitHub project showcase
- Live GitHub statistics and contribution cards
- Technology-stack visualization
- GitHub and TechEze AI contact paths
- Optional EmailJS or `mailto:` contact form
- Responsive Three.js models, Framer Motion animations, and Tailwind CSS styling

## Technology Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Three.js / React Three Fiber
- Framer Motion
- React Hook Form
- EmailJS (optional)

## Run Locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

Bun also works:

```bash
bun install
bun dev
```

## Configure the Contact Form

Choose one method in `.env.local`.

### EmailJS

```env
NEXT_PUBLIC_SERVICE_ID="your_service_id"
NEXT_PUBLIC_TEMPLATE_ID="your_template_id"
NEXT_PUBLIC_PUBLIC_KEY="your_public_key"
```

### Mail Client Fallback

```env
NEXT_PUBLIC_CONTACT_EMAIL="your@email.com"
```

When neither method is configured, the page still provides direct links to GitHub and TechEze AI.

## Customize Profile and Projects

Edit:

```text
src/app/data.js
```

That file contains the profile identity, external links, navigation, and curated project data.

## Quality Checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Create a new GitHub repository.
2. Push this project to the repository.
3. Import the repository into Vercel.
4. Add optional environment variables.
5. Deploy.

## Credits and Licensing

This customization is based on the open-source **Next.js Creative Portfolio Website** by CodeBucks. The original project license and the Creative Commons attribution requirements for the included 3D models remain in this repository. See `LICENSE.md` and the original model credits below:

- “Tim Mckee - Boy Wizard” by elbertwithane — CC BY 4.0
- “Stylized wizard hat” by Enkarra — CC BY 4.0
- “Wizard Staff” by Toymancer Studio — CC BY 4.0
