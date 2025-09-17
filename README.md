# SuperOptimised Web

A modern, fast, and beautiful website built with Next.js 14.2.25 and TypeScript.

## 🚀 Tech Stack

- **Framework**: Next.js 14.2.25 (with security CVE-2025-29927 fix)
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.14 with brutalist design system
- **Fonts**: Inter & Lexend (optimized with next/font)
- **Animation**: Framer Motion 10.18.0
- **Code Quality**: ESLint & Prettier

## 🎨 Design System

- **Colors**: 5-color brutalist palette (off-black, off-white, warm-gray, light-gray, primary)
- **Spacing**: Mathematical 8px base unit system
- **Typography**: Inter for body text, Lexend for headings
- **Layout**: Responsive grid with perfect alignment

## 🏗️ Project Structure

```
├── app/                 # Next.js App Router
│   ├── about/
│   ├── contact/
│   ├── globals.css      # Design system styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # Reusable components
│   ├── ui/              # Base UI components
│   ├── layout/          # Layout components
│   └── sections/        # Page sections
├── lib/                 # Utilities and constants
└── public/              # Static assets
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run format   # Format with Prettier
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure deployment
3. Push to main branch to trigger automatic deployment

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the 'out' directory to your hosting provider
```

## 🎯 Features

- ⚡ Sub-2-second load times
- 📱 Fully responsive design
- ♿ WCAG AA accessibility compliance
- 🔒 Security headers and best practices
- 🎨 Beautiful brutalist design system
- 🚀 Optimized static site generation

## 📝 Pages

- **Home** (`/`) - AI products & beautiful UI/UX showcase
- **About** (`/about`) - Passion projects & innovation
- **Contact** (`/contact`) - Friendly email presentation

## 🔧 Configuration

- TypeScript configuration: `tsconfig.json`
- Tailwind configuration: `tailwind.config.ts`
- Next.js configuration: `next.config.js`
- ESLint configuration: `.eslintrc.json`
- Prettier configuration: `.prettierrc`