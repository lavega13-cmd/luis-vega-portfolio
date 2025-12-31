# QA Checklist

## Pre-Launch Quality Assurance

### ✅ Content Accuracy
- [ ] All metrics match source documents (no inflated numbers)
- [ ] No invented claims or partnerships
- [ ] Dates and timelines are accurate
- [ ] Contact information is current
- [ ] LinkedIn URL is correct
- [ ] Email address is correct
- [ ] Phone number is correct
- [ ] Resume PDF is uploaded to `/public/resume.pdf`
- [ ] Calendly link is updated in `/lib/constants.ts`

### ✅ Honesty & Positioning
- [ ] "Building now" language is clear throughout
- [ ] Pilot engagements are framed as in-progress
- [ ] No client logos or testimonials (unless real)
- [ ] No revenue claims unless verified
- [ ] Venture framing feels grounded, not aspirational

### ✅ Mobile Responsiveness
- [ ] Hero section displays properly on mobile (320px+)
- [ ] Proof metrics stack correctly on small screens
- [ ] Pilot cards are readable on mobile
- [ ] Execution story cards don't overflow
- [ ] Navigation works on touch devices
- [ ] Buttons are large enough for touch targets (44px min)
- [ ] Text is legible (16px minimum body text)

### ✅ Performance
- [ ] Page loads in under 3 seconds on 3G
- [ ] No layout shift (CLS score)
- [ ] Images are optimized
- [ ] Animations don't cause jank
- [ ] Smooth scroll behavior works
- [ ] No console errors
- [ ] No TypeScript errors

### ✅ Accessibility
- [ ] All images have alt text
- [ ] Keyboard navigation works (tab through all interactive elements)
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG AA standards (4.5:1 minimum)
- [ ] Headings are properly nested (h1 → h2 → h3)
- [ ] Links are descriptive ("Click here" avoided)
- [ ] Form inputs have labels
- [ ] ARIA labels where needed

### ✅ SEO
- [ ] Page title is descriptive
- [ ] Meta description is compelling (150-160 chars)
- [ ] Open Graph tags are set
- [ ] Twitter Card meta tags are set
- [ ] Heading hierarchy is logical
- [ ] URLs are clean and descriptive
- [ ] robots.txt allows indexing
- [ ] Sitemap generated (if needed)

### ✅ Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### ✅ Functionality
- [ ] All internal links work
- [ ] External links open in new tabs
- [ ] Email links trigger email client
- [ ] Phone links work on mobile
- [ ] Download resume button works
- [ ] Smooth scroll to sections works
- [ ] Hover effects work on desktop
- [ ] Touch interactions work on mobile
- [ ] Animated counters trigger on scroll
- [ ] Card expansions work smoothly

### ✅ Copy & Typos
- [ ] Spell check entire site
- [ ] Grammar check all content
- [ ] Consistent voice and tone
- [ ] No placeholder text remaining
- [ ] Proper capitalization
- [ ] Punctuation is correct

### ✅ Design Polish
- [ ] Spacing is consistent
- [ ] Colors match brand
- [ ] Typography is clean and readable
- [ ] Buttons have consistent styling
- [ ] Cards have consistent shadows
- [ ] No visual bugs or glitches
- [ ] Loading states are smooth
- [ ] Animations feel professional (not gimmicky)

### ✅ Analytics
- [ ] Analytics tracking code added (Google Analytics, Plausible, etc.)
- [ ] Event tracking for buttons configured
- [ ] Conversion tracking setup

## Test Scenarios

### Homepage Flow
1. Land on hero
2. Read proof metrics (counters animate)
3. Click "What I'm Building" → scrolls to section
4. Expand pilot cards to read details
5. Read execution stories
6. Review operating principles
7. Click "Book a Call" → opens Calendly
8. Click "Download Resume" → PDF downloads

### Resume Page Flow
1. Navigate to /resume
2. Review full experience
3. Click "Download PDF" → file downloads
4. Click contact links → email/phone/LinkedIn open
5. Click "Back to Home" → returns to homepage

### Mobile Experience
1. Test on actual mobile device (not just DevTools)
2. Verify touch targets are large enough
3. Check text readability without zoom
4. Test horizontal scrolling (should be none)
5. Verify animations don't slow down device

## Fix Priority

**High Priority (Must Fix)**
- Broken functionality
- Content inaccuracies
- Accessibility violations
- Mobile layout breaks

**Medium Priority (Should Fix)**
- Performance issues
- Minor design inconsistencies
- Typos

**Low Priority (Nice to Have)**
- Animation polish
- Advanced optimizations
- Additional features

## Sign-Off

- [ ] All HIGH priority items resolved
- [ ] All MEDIUM priority items resolved or documented
- [ ] Final review by Luis completed
- [ ] Ready for deployment

---

**QA Performed By:** _______________
**Date:** _______________
**Ready for Launch:** [ ] Yes [ ] No
