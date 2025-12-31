# Deployment Guide

## Prerequisites

Before deploying, ensure you have:
- [x] Completed the QA checklist
- [x] Updated contact information in `/lib/constants.ts`
- [x] Added your resume PDF to `/public/resume.pdf`
- [x] Updated Calendly link
- [x] Committed all changes to Git
- [x] Created a GitHub repository (recommended)

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is built by the creators of Next.js and offers the best experience for Next.js apps.

### Step-by-Step Instructions

1. **Push Code to GitHub**
   ```bash
   cd "/Users/starkind./Portfolio Folder"
   git init
   git add .
   git commit -m "Initial commit - Luis Vega portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Sign Up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub"

3. **Import Your Repository**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your portfolio repository
   - Click "Import"

4. **Configure Project**
   - **Project Name:** `luis-vega-portfolio` (or your choice)
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build` (auto-configured)
   - **Output Directory:** `.next` (auto-configured)
   - **Install Command:** `npm install` (auto-configured)

5. **Add Environment Variables (if needed)**
   - Currently none required
   - If you add analytics later, add them here

6. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site is now live at `https://your-project.vercel.app`

7. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `luisvega.com`)
   - Follow DNS configuration instructions
   - Vercel provides free SSL certificate

### Vercel Features You Get
- ✅ Automatic deployments on git push
- ✅ Preview deployments for branches
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Analytics (optional paid add-on)
- ✅ Edge functions
- ✅ Zero configuration

---

## Option 2: Deploy to Netlify

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Follow Prompts**
   - Create new site or link existing
   - Build directory: `.next`
   - Deploy

**Custom Domain:** Add in Netlify dashboard → Domain Settings

---

## Option 3: Deploy to Your Own Server (VPS/Dedicated)

### Requirements
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache (reverse proxy)

### Steps

1. **Build Production Bundle**
   ```bash
   npm run build
   ```

2. **Upload Files to Server**
   ```bash
   rsync -avz --exclude node_modules --exclude .git ./ user@your-server.com:/var/www/portfolio/
   ```

3. **Install Dependencies on Server**
   ```bash
   ssh user@your-server.com
   cd /var/www/portfolio
   npm install --production
   ```

4. **Start with PM2**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Enable SSL with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Local Development & Testing

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build for Production (Test Locally)
```bash
npm run build
npm start
```

### Check for TypeScript Errors
```bash
npx tsc --noEmit
```

### Check for Linting Issues
```bash
npm run lint
```

---

## Post-Deployment Checklist

### Immediate (Within 1 hour)
- [ ] Visit live site and click through all pages
- [ ] Test all CTAs (email, phone, calendly)
- [ ] Verify resume PDF downloads
- [ ] Test on mobile device
- [ ] Check Google Search Console (submit sitemap)
- [ ] Check page speed with PageSpeed Insights

### Within 24 Hours
- [ ] Share link with 2-3 trusted people for feedback
- [ ] Monitor for any errors (check Vercel logs)
- [ ] Test email links actually work
- [ ] Verify analytics tracking (if configured)

### Within 1 Week
- [ ] Update LinkedIn with portfolio link
- [ ] Share with ASU venture program
- [ ] Add to email signature
- [ ] Monitor traffic and user behavior
- [ ] Collect feedback and iterate

---

## Updating Content After Launch

1. **Edit Files Locally**
   - Update `/lib/constants.ts` for content changes
   - Edit components for layout changes

2. **Test Changes**
   ```bash
   npm run dev
   ```

3. **Commit and Push**
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```

4. **Automatic Deployment**
   - Vercel automatically deploys on push
   - Live in 2-3 minutes

---

## Troubleshooting

### Build Fails
- Check TypeScript errors: `npx tsc --noEmit`
- Check for missing dependencies
- Review build logs in Vercel dashboard

### Site is Slow
- Check image sizes (should be optimized)
- Review Lighthouse score
- Check for large dependencies

### Animations Not Working
- Ensure Framer Motion is installed
- Check browser console for errors
- Verify CSS is loading

### 404 on Resume Page
- Ensure `/app/resume/page.tsx` exists
- Check file naming (lowercase, no spaces)
- Clear build cache and rebuild

---

## Analytics Setup (Optional)

### Google Analytics 4

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)

2. Install package:
   ```bash
   npm install @next/third-parties
   ```

3. Add to `app/layout.tsx`:
   ```typescript
   import { GoogleAnalytics } from '@next/third-parties/google'

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>{children}</body>
         <GoogleAnalytics gaId="G-XXXXXXXXXX" />
       </html>
     )
   }
   ```

### Plausible Analytics (Privacy-Friendly Alternative)

1. Sign up at [plausible.io](https://plausible.io)

2. Add script to `app/layout.tsx`:
   ```typescript
   <Script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js" />
   ```

---

## Domain Setup

### Custom Domain Configuration

**DNS Records for Vercel:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Wait Time:** 24-48 hours for full propagation

---

## Performance Optimization

### After Launch Improvements

1. **Add Image Optimization**
   - Convert images to WebP
   - Use Next.js Image component
   - Add lazy loading

2. **Enable Caching**
   - Already configured in Next.js
   - Vercel CDN handles this

3. **Monitor Core Web Vitals**
   - Use PageSpeed Insights
   - Check Vercel Analytics
   - Aim for all green scores

---

## Support & Resources

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Tailwind Docs:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion:** [framer.com/motion](https://www.framer.com/motion/)

---

## Estimated Costs

- **Vercel Free Tier:** $0/month
  - Unlimited deployments
  - 100GB bandwidth
  - Perfect for portfolio sites

- **Custom Domain:** $10-15/year
  - Register at Namecheap, Google Domains, etc.

- **Analytics:** $0 (Plausible free tier) or paid options

**Total Monthly Cost:** $0 (with free Vercel + existing domain)

---

**Ready to Deploy?**

1. Run through QA checklist one more time
2. Commit all changes
3. Push to GitHub
4. Deploy to Vercel
5. Share your new portfolio!

Good luck! 🚀
