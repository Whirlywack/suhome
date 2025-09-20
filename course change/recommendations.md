Got it. Here’s a clean, dev-ready guide that sticks to your template and only includes the optional items you approved (no Framer Motion/parallax). I’ve kept it pragmatic and copy-pasteable.

⸻

Superoptimised – Dev Guide (Parity + Approved Options)

Goals
• Keep visual parity with the HTML mockup.
• Next.js 14.2.25 + TypeScript App Router.
• No animation work now.
• Add: SSR-safe theming, mobile one-pager menu, a11y basics (skip/focus/reduced-motion), security headers & CSP, metadata + manifest, Playwright + Lighthouse in CI.

⸻

1. App shell

app/layout.tsx
• Loads fonts, sets metadata, injects before-paint theme init (prevents dark/light flash), and renders a skip link.
• The theme init reads localStorage.theme or prefers-color-scheme and sets data-theme on <html> before paint.

// app/layout.tsx
import type { Metadata } from "next"
import { Inter, Lexend } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend", display: "swap" })

export const metadata: Metadata = {
title: { default: "Superoptimised", template: "%s · Superoptimised" },
description: "An indie dev studio in London.",
metadataBase: new URL("https://superoptimised.example"),
icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
manifest: "/manifest.webmanifest",
}

const themeInit = `(function(){
  try {
    const saved = localStorage.getItem("theme"); // "light" | "dark" | null
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = saved || system;
    document.documentElement.setAttribute("data-theme", theme);
  } catch {}
})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (

<html lang="en" suppressHydrationWarning>
<head>
{/_ Before-paint theme init – replace with nonce/hash in CSP when ready _/}
<script dangerouslySetInnerHTML={{ __html: themeInit }} />
<meta name="theme-color" content="#0C0C0C" />
</head>
<body className={`${inter.variable} ${lexend.variable} antialiased`}>
<a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded"
        >
Skip to content
</a>
{children}
</body>
</html>
)
}

app/page.tsx
• Home is the one-pager on mobile: render About + Contact sections here as well.
• Reuse the same section components that the /about and /contact pages use.

// app/page.tsx
import Hero from "@/components/sections/hero"
import AboutStory from "@/components/sections/about-story"
import ContactEmail from "@/components/sections/contact-email"

export default function HomePage() {
return (

<main id="main">
<Hero />
{/_ One-pager sections (also present as standalone pages) _/}
<AboutStory id="about" />
<ContactEmail id="contact" />
</main>
)
}

app/about/page.tsx & app/contact/page.tsx
• Server components that render the same section components (no duplication).

// app/about/page.tsx
import AboutStory from "@/components/sections/about-story"
export default function AboutPage() { return <main className="pt-[--nav-h]"><AboutStory /></main> }

// app/contact/page.tsx
import ContactEmail from "@/components/sections/contact-email"
export default function ContactPage() { return <main className="pt-[--nav-h]"><ContactEmail /></main> }

app/not-found.tsx
• Keep simple and on-brand.

⸻

2. Header + Mobile one-pager menu
   • Desktop: regular 3-page links (/, /about, /contact).
   • Mobile: same header button opens a sheet/list that links to home anchors (/#about, /#contact) so it behaves like a one-pager.

// components/layout/header.tsx
"use client"
import Link from "next/link"
import { useState } from "react"

const desktopNav = [
{ href: "/", label: "Home" },
{ href: "/about", label: "About" },
{ href: "/contact", label: "Contact" },
]
const mobileNav = [
{ href: "/#about", label: "About" },
{ href: "/#contact", label: "Contact" },
]

export default function Header() {
const [open, setOpen] = useState(false)
return (

<header className="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-background/70">
<nav className="mx-auto max-w-6xl h-14 px-4 flex items-center justify-between">
<Link href="/" className="font-medium">Superoptimised</Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {desktopNav.map(i => (
            <li key={i.href}><Link href={i.href} className="hover:opacity-80">{i.label}</Link></li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="md:hidden p-2"
        >☰</button>
      </nav>

      {open && (
        <ul className="md:hidden border-t">
          {mobileNav.map(i => (
            <li key={i.href}>
              <Link href={i.href} onClick={() => setOpen(false)} className="block px-4 py-3">
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>

)
}

A11y note: The menu button exposes aria-expanded. The list is a simple, keyboard-navigable list of links.

⸻

3. Theme toggle (parity, no animations)
   • Implement your mock’s sun/moon toggle as a client component; it writes localStorage.theme and updates data-theme.

// components/ui/theme-toggle.tsx
"use client"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
const [theme, setTheme] = useState<"light" | "dark">("dark")

useEffect(() => {
const ls = (typeof window !== "undefined" && localStorage.getItem("theme")) as "light" | "dark" | null
const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
setTheme(ls || system)
}, [])

useEffect(() => {
document.documentElement.setAttribute("data-theme", theme)
try { localStorage.setItem("theme", theme) } catch {}
}, [theme])

return (
<button
type="button"
aria-label="Toggle theme"
aria-pressed={theme === "dark"}
onClick={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))}
className="inline-flex h-10 w-10 items-center justify-center rounded border" >
<span aria-hidden>{theme === "dark" ? "🌙" : "☀️"}</span>
</button>
)
}

⸻

4. globals.css (a11y + one-pager QoL)
   • Skip link visibility handled above.
   • Anchor offset so fixed header doesn’t cover content.
   • Reduced motion: disable transitions/scroll effects if the user requests it.

/_ app/globals.css – add to your existing design tokens _/
:root { --nav-h: 56px; }
[id] { scroll-margin-top: var(--nav-h); }

/_ Focus visibility for keyboard users _/
:focus-visible {
outline: 2px solid var(--accent, #004B87);
outline-offset: 2px;
}

/_ Respect prefers-reduced-motion _/
@media (prefers-reduced-motion: reduce) {

- { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
  }

What “skip link / focus-visible / prefers-reduced-motion” means:
• Skip link: a hidden “Skip to content” anchor that becomes visible for keyboard users to bypass the nav.
• focus-visible: shows a clear outline only when navigating by keyboard (not on every mouse click).
• prefers-reduced-motion: if a user has reduced motion enabled in OS, we remove non-essential transitions/animations.

⸻

5. Tailwind config (map to your tokens)

Keep your mock’s variables as the source of truth; Tailwind references them.

// tailwind.config.ts
import type { Config } from "tailwindcss"
const config: Config = {
content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
theme: {
extend: {
colors: {
background: "rgb(var(--bg) / <alpha-value>)",
foreground: "rgb(var(--fg) / <alpha-value>)",
card: "rgb(var(--card) / <alpha-value>)",
accent: "rgb(var(--accent) / <alpha-value>)",
"muted-foreground": "rgb(var(--muted-fg) / <alpha-value>)",
},
fontFamily: { sans: ["var(--font-inter)"], display: ["var(--font-lexend)"] },
container: { center: true, padding: "1rem", screens: { "2xl": "72rem" } },
},
},
plugins: [],
}
export default config

⸻

6. Security headers & baseline CSP

// next.config.js
/\*_ @type {import('next').NextConfig} _/
const nextConfig = {
reactStrictMode: true,
async headers() {
const csp = [
"default-src 'self'",
// TEMP: allow the inline theme script; replace with 'nonce-<value>' or 'sha256-<hash>' before launch
"script-src 'self' 'unsafe-inline'",
"style-src 'self' 'unsafe-inline'",
"img-src 'self' data: blob:",
"font-src 'self'",
"connect-src 'self'",
"object-src 'none'",
"base-uri 'self'",
"frame-ancestors 'none'",
].join("; ")

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ]

},
}
module.exports = nextConfig

Follow-up hardening: replace 'unsafe-inline' in script-src by hashing the theme init script or using a nonce; consider upgrade-insecure-requests if needed.

⸻

7. Metadata API + manifest
   • Metadata already set in layout.tsx.
   • Add a minimal PWA manifest (even if you don’t plan full PWA yet).

// public/manifest.webmanifest
{
"name": "Superoptimised",
"short_name": "Superoptimised",
"start_url": "/",
"display": "standalone",
"background_color": "#0C0C0C",
"theme_color": "#0C0C0C",
"icons": [
{ "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
{ "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
]
}

⸻

8. Utilities

// lib/utils.ts
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

⸻

9. Tests (Playwright) + CI (Lighthouse)

Playwright smoke test

// tests/smoke.spec.ts
import { test, expect } from "@playwright/test"

test("header nav and anchors work", async ({ page }) => {
await page.goto("/")
await expect(page.getByRole("link", { name: "Superoptimised" })).toBeVisible()
await page.getByRole("link", { name: "About" }).click()
await expect(page).toHaveURL(/about|#about/)
})

test("theme toggle persists", async ({ page, context }) => {
await page.goto("/")
await page.getByRole("button", { name: "Toggle theme" }).click()
const theme = await page.evaluate(() => document.documentElement.getAttribute("data-theme"))
expect(theme).toBeTruthy()
const storage = await context.storageState()
expect(JSON.stringify(storage)).toContain("theme")
})

GitHub Actions (Playwright + Lighthouse CI)

# .github/workflows/ci.yml

name: CI
on: [push, pull_request]
jobs:
e2e:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v4 - uses: actions/setup-node@v4
with: { node-version: 20 } - run: npm ci - run: npm run build - run: npx playwright install --with-deps - run: npm run start & npx wait-on http://localhost:3000 - run: npx playwright test
lighthouse:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v4 - uses: actions/setup-node@v4
with: { node-version: 20 } - run: npm ci - run: npm run build && npm run start & npx wait-on http://localhost:3000 - run: npx @lhci/cli autorun --upload.target=temporary-public-storage

⸻

10. Developer checklist

Parity
• Recreate theme (tokens, data-theme, sun/moon) and responsive typography exactly as in the mock.
• Fixed header with backdrop blur; ensure sections use the same spacing rhythm.
• About/Contact sections match the mock (same copy + hierarchy).

Approved add-ons
• Before-paint theme init (no flash).
• Mobile menu that links to /#about and /#contact.
• Skip link, visible :focus-visible outlines, reduced-motion fallback.
• Security headers + baseline CSP.
• Metadata API + manifest.webmanifest.
• Playwright smoke tests + Lighthouse in CI.

That’s it—no Framer Motion or parallax included. If you want, I can tailor the header to your exact type scale and spacing tokens next.
