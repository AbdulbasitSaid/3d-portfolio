# CgSalih — 3D Animation & Motion Design Portfolio

Personal portfolio website for CgSalih, a 3D animator and motion designer. Built with Next.js 15, Three.js, and Tailwind CSS.

## Features

- Interactive 3D model viewer (Three.js / React Three Fiber)
- 3D animation showcase with GIF previews
- Product visualization gallery with lightbox
- Contact form powered by Resend
- Responsive mobile navigation

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **3D:** Three.js, @react-three/fiber, @react-three/drei
- **Styling:** Tailwind CSS, shadcn/ui
- **Email:** Resend
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install --legacy-peer-deps
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key_here
```

Get an API key at [resend.com](https://resend.com). The contact form will fail silently without it.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  actions/email.ts     # Server action for contact form
  page.tsx             # Main portfolio page
  layout.tsx           # Root layout
components/
  model-viewer.tsx     # Interactive 3D model (Three.js)
  contact-form.tsx     # Contact form with validation
  youtube-player.tsx   # Featured video section
  mobile-nav.tsx       # Mobile navigation drawer
  stats-card.tsx       # Services cards
  ui/                  # shadcn/ui components
public/
  models/camera.glb    # 3D model for the hero viewer
  images/              # Product renders and profile photo
```

## Notes

- The `--legacy-peer-deps` flag is needed during install due to peer dependency conflicts between some Radix UI packages and React 19.
- Images are hosted on Vercel Blob Storage for animated GIFs in the portfolio section.
- The 3D model viewer uses `OrbitControls` — drag to rotate, scroll to zoom.


### Todos



