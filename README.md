This project uses Next.js as the React framework. The solution intentionally uses a single page and no routing logic, in line with the assessment requirements.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## Development Assessment

### 1. Component & Styling Decisions

**Component Structure:**

- I broke the main card into three focused subcomponents (`PracticeSummaryCard`, `Metric`, and `TrendChart`) to keep concerns separated and make testing easier down the line
- `PracticeSummaryCard` acts as the orchestrator - it handles the layout and wires together the status logic, recommendations, and child components
- `Metric` is a simple presentational component that just displays a label-value pair, making it reusable anywhere we need to show similar stats
- `TrendChart` encapsulates the bar chart visualization logic, so if we ever need to swap it for a different chart library, we only touch one file
- Helper functions (`getStatus`, `getRecommendations`) live separately so the business logic isn't cluttered inside components - makes the code easier to test and reason about

**Styling Approach:**

- Went with Tailwind CSS because it's fast for prototyping and keeps styling decisions visible right in the component (no jumping between files)
- Used utility classes directly in JSX rather than abstracting to CSS modules since this is a focused component and the patterns aren't complex enough to warrant extra abstraction yet
- Tailwind's design tokens (colors, spacing) naturally enforce consistency without needing a separate design system file

**Visual Consistency & Responsiveness:**

- Stuck to Tailwind's built-in color palette and spacing scale throughout - no magic numbers or one-off colors
- Grid layout (`grid-cols-2` for metrics, `md:grid-cols-2 lg:grid-cols-3` for card layout) automatically handles responsive breakpoints
- Added dark mode support using Tailwind's `dark:` variants so the cards work in both themes
- Hover states (`hover:shadow-md`, `hover:scale-105`) provide visual feedback consistently across all cards

---

### 2. Scaling & Real-World Use

**Dashboard Integration:**

- The component already accepts a `PracticeSummary` prop, so it can easily render lists of practices fetched from an API
- To integrate into a larger dashboard, I'd wrap it in a `useQuery` and pass practice data down
- For theming across multiple widgets, I'd extract the color mappings and spacing values into a shared theme config file that all components reference
- The card could export variants (compact, detailed, etc.) controlled by a `variant` prop if different dashboard views need different detail levels

**With One Extra Day:**

- **Accessibility improvements**: Add proper ARIA labels, keyboard navigation for the card interactions, and ensure screen reader announcements for status changes
- **Animation polish**: Subtle entrance animations when cards load, and smooth transitions when data updates (using Framer Motion or CSS transitions)
- **Unit tests**: Install Jest andwrite tests for the helper functions and component rendering logic - the current structure makes this pretty straightforward.
- **Loading and error states**: Add skeleton loaders and empty states for when data is fetching or unavailable
- **Localization**: Extract all strings into a translations file and add i18n support for international practices

---

### 3. Time Management

**Breakdown of 2 hours:**

- **Setup & planning (15 minutes)**: Created the Next.js project, installed Tailwind, set up TypeScript types, and sketched out component hierarchy on paper
- **Core structure & logic (50 minutes)**: Built the main `PracticeSummaryCard` and helper functions, implemented the status and recommendations logic, created the mock data structure
- **Subcomponents (25 minutes)**: Developed `Metric` and `TrendChart` components with proper props and styling
- **Styling & polish (20 minutes)**: Refined the card design, added hover effects, dark mode support, and ensured responsive behavior across screen sizes
- **README documentation (10 minutes)**: Wrote this assessment section

**Priority Decisions:**

- Focused on getting the core functionality and data flow working first before any styling
- Chose simple bar chart visualization over more complex charting libraries to stay within time constraints - gets the job done without external dependencies
- Skipped adding tests and accessibility features initially to ensure the main deliverable was complete and polished
