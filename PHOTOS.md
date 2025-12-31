# Photo Management Guide

This document explains how to add, replace, and manage photos across the portfolio site.

## Directory Structure

All images must be placed in:
```
public/images/
```

## Required Image Files

### Hero Section
- **Filename:** `headshot.jpg`
- **Purpose:** Professional headshot displayed in hero section
- **Recommended size:** 800x800px minimum
- **Format:** JPG or PNG
- **Notes:** Will be displayed in circular frame with gold accent ring

### Building Now Section (Background Banner)
- **Filename:** `ai-consulting-banner.jpg`
- **Purpose:** Subtle background banner for "What I'm Building" section
- **Recommended size:** 1920x1080px
- **Format:** JPG
- **Notes:** Displayed at 6% opacity with blur effect. If missing, shows premium fallback background.

### Operating Principles Section (Background Banner)
- **Filename:** `leadership-banner.jpg`
- **Purpose:** Subtle background banner for "How I Lead" section
- **Recommended size:** 1920x1080px
- **Format:** JPG
- **Notes:** Displayed at 6% opacity with blur effect. If missing, shows premium fallback background.

### Execution Stories Photos

#### Foundation Turnaround Story
- **Filename:** `foundation-stage.jpg`
- **Purpose:** Photo from foundation event/presentation
- **Recommended size:** 1200x900px

#### Ukraine Extractions Story
- **Filename:** `ukraine-1.jpg` (required)
- **Filename:** `ukraine-2.jpg` (optional)
- **Purpose:** Photos from humanitarian missions
- **Recommended size:** 1200x900px each
- **Notes:** 2 photos will display in side-by-side grid

#### Veteran Advocacy Wins Story
- **Filename:** `veteran-advocacy-1.jpg` (required)
- **Filename:** `veteran-advocacy-2.jpg` (optional)
- **Purpose:** Photos from advocacy/community engagement work
- **Recommended size:** 1200x900px each
- **Notes:** 2 photos will display in side-by-side grid

## Image Rename Mapping

If you have photos with current filenames, rename them as follows:

| Current Filename | Target Filename |
|------------------|-----------------|
| `Headshot1.png` | `headshot.jpg` |
| `ukraine-1..png` | `ukraine-1.jpg` |
| `Screenshot 2025-12-12 at 10.01.27 PM.png` | `ukraine-2.jpg` |
| `242E1CA8-9E22-45EF-AAF1-7137EC02EFCF.jpg` | `foundation-stage.jpg` |
| `Veteran.JPG` | `veteran-advocacy-1.jpg` |
| `Foundation II.png` | `veteran-advocacy-2.jpg` |

## How to Add or Replace Photos

### Step 1: Prepare Your Image
1. Resize to recommended dimensions
2. Optimize for web (compress without losing quality)
3. Convert to JPG format if needed
4. Rename to exact target filename (case-sensitive)

### Step 2: Add to Project
1. Place the file in `public/images/`
2. Ensure filename matches exactly (case-sensitive)
3. No code changes required - images load automatically

### Step 3: Update Captions (Optional)
If you want to change photo captions, edit `lib/constants.ts`:

```typescript
images: [
  {
    src: "/images/ukraine-1.jpg",
    alt: "Humanitarian mission in Ukraine",
    caption: "Your new caption here"  // Edit this
  }
]
```

## Photo Grid Behavior

### 1 Photo
- Displays as single wide frame
- Full width of card

### 2 Photos
- Side-by-side grid
- Equal width columns
- Responsive: stacks on mobile

### 3 Photos
- Top photo spans full width
- Bottom 2 photos side-by-side
- Maintains visual balance on all screens

## Alt Text Guidelines

When updating alt text in `lib/constants.ts`:
- Be descriptive and neutral
- Describe what's visually obvious
- Avoid identity claims beyond what's visible
- Avoid sensitive details
- Keep it concise (1-2 short sentences)

**Good examples:**
- "Humanitarian mission in Ukraine"
- "Foundation event presentation"
- "Community engagement and voter outreach"

**Avoid:**
- Personal identifying information
- Speculation about people or events
- Overly detailed descriptions

## Missing Images

The site gracefully handles missing images:

### Banner Backgrounds
If `ai-consulting-banner.jpg` or `leadership-banner.jpg` are missing:
- Premium fallback background displays automatically
- Soft gradient with subtle noise pattern
- Thin border for polish
- No broken image icons

### Story Photos
If story photos are missing:
- PhotoGrid component detects missing files
- Section displays without images
- No broken image icons
- Layout remains clean and intentional

## Performance Notes

- All images use Next.js `next/image` for optimization
- Hero headshot loads with priority (immediate)
- All other images lazy load (on scroll)
- Responsive sizes configured automatically
- No cumulative layout shift
- Images are cached by browser

## Troubleshooting

**Image not showing:**
1. Check filename matches exactly (case-sensitive)
2. Verify file is in `public/images/` directory
3. Ensure file format is JPG or PNG
4. Check browser console for errors
5. Try hard refresh (Cmd+Shift+R or Ctrl+Shift+F5)

**Image looks blurry:**
1. Check source file resolution (should be 2x display size)
2. Verify file isn't over-compressed
3. Ensure using JPG quality 80+ or PNG

**Layout shift when loading:**
1. Images should have fixed aspect ratios
2. Check that PhotoGrid component is being used
3. Verify `next/image` width/height or fill prop is set

## File Size Recommendations

- **Headshot:** < 200KB
- **Banner backgrounds:** < 500KB
- **Story photos:** < 300KB each

Use tools like TinyPNG or ImageOptim to compress without quality loss.

## Adding New Stories with Photos

To add photos to a new execution story:

1. Add image files to `public/images/`
2. Edit `lib/constants.ts` in the `EXECUTION_STORIES` array:

```typescript
{
  title: "Your New Story",
  timeline: "2023-2024",
  challenge: "...",
  actions: [...],
  metrics: [...],
  learning: "...",
  images: [
    {
      src: "/images/your-photo-1.jpg",
      alt: "Descriptive alt text",
      caption: "Optional short caption"
    },
    {
      src: "/images/your-photo-2.jpg",
      alt: "Descriptive alt text"
      // caption is optional
    }
  ]
}
```

3. Save and refresh - changes appear automatically

## Best Practices

1. **Always optimize images** before adding to project
2. **Use descriptive filenames** that match the mapping exactly
3. **Test on mobile** after adding new photos
4. **Keep captions short** (5-8 words max)
5. **Maintain consistent aspect ratios** within each story
6. **Use high-quality source files** (2x display size minimum)
7. **Check accessibility** - ensure alt text is meaningful

## Questions?

If you need to add new photo locations or change photo behavior, edit:
- `components/shared/PhotoGrid.tsx` - Photo grid layout logic
- `components/home/StoryCard.tsx` - Story card photo integration
- `lib/constants.ts` - Photo data and captions
