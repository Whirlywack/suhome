# SuperOptimised Web

A mathematically perfect, accessibility-first website built with brutalist design precision. Features multi-screen optimized scaling and Perfect Fifth mathematical progression.

## 🚀 Tech Stack

- **Framework**: Next.js 14.2.25 (with security CVE-2025-29927 fix)
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.14 with Perfect Fifth brutalist design system
- **Fonts**: Inter & Lexend (optimized with next/font + responsive scaling)
- **Animation**: Framer Motion 10.18.0
- **Code Quality**: ESLint & Prettier

## 🎨 Advanced Design System

- **Mathematical Foundation**: Perfect Fifth progression (1.5x ratio) + Golden Ratio
- **Color Architecture**: HSL design tokens for perfect theme switching
- **Multi-Screen Scaling**: Responsive root font (16px→22px) across 7 breakpoints
- **Spacing Harmony**: Perfect Fifth rem progression (0.25rem→11.25rem)
- **Typography Scale**: Mathematical precision with controlled fluid scaling
- **Reading Optimization**: Container widths optimized for all screen sizes (320px→4K)

📖 **Complete specification**: [`design-system-architecture.md`](design-system-architecture.md)

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

- ⚡ Sub-2-second load times with perfect optimization
- 📱 Multi-screen responsive (320px → 4K displays)
- ♿ WCAG AA accessibility with user preference respect
- 🔒 Security headers and best practices
- 🎨 Mathematically perfect brutalist design system
- 🚀 Optimized static site generation
- 🎯 Perfect Fifth mathematical spacing progression
- 📏 Responsive root font scaling (7 breakpoints)
- 🖥️ Reading-width optimized containers
- 🌗 Perfect dark/light mode theme switching

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
