// Lightweight inline SVG icon set — no icon library needed.

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
)

export const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
)

export const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23zm-1.16 17.52h1.83L7.02 4.13H5.05l12.03 15.64z" />
  </svg>
)

export const MailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="0" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const MapPinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const ArrowRightIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

export const ChevronUpIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="m18 15-6-6-6 6" />
  </svg>
)

export const ChevronLeftIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="m15 18-6-6 6-6" />
  </svg>
)

export const ChevronRightIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
)

export const MenuIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
)

export const CloseIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

// Big decorative quote mark (mirrors Font Awesome "quote-left")
export const QuoteIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
    <path d="M0 216C0 98.8 98.8 0 216 0h40c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-40c-66.3 0-120 53.7-120 120v8h32c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm288 0c0-117.2 98.8-216 216-216h40c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-40c-66.3 0-120 53.7-120 120v8h32c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216z" />
  </svg>
)

// Newspaper/article icon for blog card placeholders
export const NewsIcon = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0V9" />
    <path d="M11 6h7M11 10h7M11 14h7M11 18h4" />
  </svg>
)
