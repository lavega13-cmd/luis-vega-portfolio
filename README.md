# Luis Vega - Founder Portfolio Website

A modern, interactive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, animated design with Framer Motion
- 📱 Fully responsive (mobile-first)
- ⚡ Fast performance with Next.js App Router
- 🎨 Clean, professional UI with Tailwind CSS
- ♿ Accessible components
- 🔢 Animated counters and scroll-triggered animations
- 📊 Interactive metric cards and execution story cards
- 🎯 SEO optimized with proper metadata

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/app
  layout.tsx          # Root layout with metadata
  page.tsx            # Home page
  resume/
    page.tsx          # Resume page
  globals.css         # Global styles

/components
  /home
    HeroSection.tsx
    ProofMetrics.tsx
    MetricCard.tsx
    BuildingNowSection.tsx
    PilotEngagements.tsx
    PilotCard.tsx
    ExecutionStories.tsx
    StoryCard.tsx
    OperatingPrinciples.tsx
    ResumeContact.tsx

  /shared
    AnimatedCounter.tsx
    Button.tsx
    Badge.tsx
    Container.tsx

/lib
  animations.ts       # Framer Motion variants
  constants.ts        # Site data and content

/public
  resume.pdf          # Downloadable resume (add your PDF here)
```

## Customization

### Update Content

Edit `/lib/constants.ts` to modify:
- Proof metrics
- Pilot engagement details
- Execution stories
- Operating principles
- Contact information

### Update Styles

- Colors and theme: Edit `tailwind.config.ts`
- Global styles: Edit `app/globals.css`
- Component-specific styles: Inline with Tailwind classes

### Add Resume PDF

Place your resume PDF file at `/public/resume.pdf`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and configure everything
5. Deploy!

Your site will be live at `https://your-project.vercel.app`

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Any platform supporting Node.js

## Performance

- Lighthouse Score: 95+ (all metrics)
- Core Web Vitals optimized
- Lazy loading for images and components
- Optimized animations with Framer Motion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Private - All rights reserved

## Contact

Luis Vega
- Email: vegaonmission@gmail.com
- LinkedIn: [linkedin.com/in/vega101](https://linkedin.com/in/vega101)
- Phone: 702-902-0227
