# Complete Guide: Adding Photos to Your Portfolio

## ✅ Code is Already Updated!

I've updated your site to support photos in these locations:
1. **Hero Section** - Professional headshot (right side)
2. **What I'm Building** - AI-generated banner (subtle background)
3. **Execution Stories** - Photos for each story
4. **How I Lead** - Leadership banner (subtle background)

---

## Step 1: Generate AI Images

### Banner for "What I'm Building"

**Go to one of these platforms:**
- **Leonardo.ai** (FREE - 150 credits/day): https://leonardo.ai
- **Midjourney** ($10/month): https://midjourney.com
- **DALL-E 3** (ChatGPT Plus $20/month): https://chat.openai.com

**Copy and paste this prompt:**
```
Professional abstract banner image for AI consulting business, modern tech aesthetic,
subtle neural network patterns in background, warm gold (#D4AF37) and deep navy (#0A1128)
color scheme, clean geometric shapes, Arizona desert-inspired gradient, minimalist design,
business professional style, 16:9 aspect ratio, soft lighting, not too busy,
suitable for website hero background --ar 16:9 --style professional
```

**Download and save as:** `ai-consulting-banner.jpg`

### Banner for "How I Lead and Deliver"

**Prompt:**
```
Subtle abstract leadership background, collaborative team energy, warm professional tones,
geometric patterns suggesting growth and connection, navy blue and gold accents,
clean minimalist design, not distracting, suitable for text overlay,
16:9 wide format --ar 16:9 --style minimal
```

**Download and save as:** `leadership-banner.jpg`

---

## Step 2: Prepare Your Real Photos

### Photos You Need:

#### 1. **Headshot** (Required for Hero)
- **File name:** `headshot.jpg`
- **Size:** 800x800px (square)
- **Type:** Professional photo, clear face, good lighting
- **Where it shows:** Top of homepage, right side of hero section

#### 2. **Foundation Stage Photo** (For Foundation Turnaround story)
- **File name:** `foundation-stage.jpg`
- **Size:** 1200x800px (landscape)
- **Type:** You speaking or on stage at Big Brothers Big Sisters event
- **Where it shows:** Foundation Turnaround execution story

#### 3. **Ukraine Mission Photos** (For Ukraine Extractions story)
- **File names:**
  - `ukraine-mission-1.jpg`
  - `ukraine-mission-2.jpg` (optional second photo)
- **Size:** 1200x800px each (landscape)
- **Type:** Photos from Ukraine humanitarian work
- **Where it shows:** Ukraine Extractions execution story

#### 4. **Veteran Advocacy Photo** (For Veteran Advocacy story)
- **File name:** `veteran-advocacy-1.jpg`
- **Size:** 1200x800px (landscape)
- **Type:** Political events, veteran work, meetings
- **Where it shows:** Veteran Advocacy Wins execution story

---

## Step 3: Optimize Your Photos

### Resize Images

**Mac - Using Preview:**
1. Open photo in Preview
2. Tools → Adjust Size
3. Width: 1200px (for story photos) or 800px (for headshot)
4. Check "Scale proportionally"
5. Click OK
6. File → Export → Save

**Windows - Using Paint:**
1. Open photo in Paint
2. Home → Resize
3. Select "Pixels"
4. Horizontal: 1200 (or 800 for headshot)
5. Check "Maintain aspect ratio"
6. Click OK
7. File → Save As → JPEG

**Online Tool (Easiest):**
1. Go to https://squoosh.app/
2. Drag your photo
3. Resize to 1200px wide (or 800px for headshot)
4. Download

### Compress Images

**CRITICAL:** Large images slow down your site!

1. Go to https://tinypng.com/
2. Drag ALL your photos (up to 20 at once)
3. Wait for compression (reduces file size by 50-70%)
4. Click "Download All"
5. Unzip the folder
6. **Use these compressed versions!**

---

## Step 4: Add Photos to Your Site

### Create Images Folder

1. **Open VS Code** with your Portfolio Folder open
2. **In left sidebar**, find the `public` folder
3. **Right-click on "public"**
4. Select **"New Folder"**
5. Name it: `images`

### Add Your Photos

**Method 1 - Drag and Drop (Easiest):**
1. Open Finder (Mac) or File Explorer (Windows)
2. Find all your compressed photos
3. **Drag them all** into the `/public/images/` folder in VS Code
4. You should see them appear in the folder

**Method 2 - Manual Copy:**
1. Find all your photos in Finder/Explorer
2. Copy them (Cmd+C or Ctrl+C)
3. Navigate to `/Users/starkind./Portfolio Folder/public/images/`
4. Paste (Cmd+V or Ctrl+V)

### Final File Structure Should Look Like This:

```
Portfolio Folder/
  public/
    images/
      headshot.jpg ✅
      ai-consulting-banner.jpg ✅
      leadership-banner.jpg ✅
      foundation-stage.jpg ✅
      ukraine-mission-1.jpg ✅
      ukraine-mission-2.jpg ✅ (optional)
      veteran-advocacy-1.jpg ✅
    resume.pdf
```

---

## Step 5: Test Your Photos

### Start Dev Server (if not running):
```bash
npm run dev
```

### Check Each Section:

**Hero Section:**
- Open `localhost:3000`
- Scroll to top
- **Should see:** Your headshot on the right side in a circular frame with gold border

**What I'm Building:**
- Scroll to "What I'm Building" section
- **Should see:** Very subtle AI banner in background (5% opacity)

**Execution Stories:**
- Scroll to execution stories
- **Foundation Turnaround:** Should show your stage photo
- **Ukraine Extractions:** Should show 1-2 Ukraine photos in grid
- **Veteran Advocacy:** Should show political/advocacy photo

**How I Lead:**
- Scroll to "How I Lead and Deliver"
- **Should see:** Subtle leadership banner in background (5% opacity)

### If Images Don't Show Up:

**Problem:** Images appear as broken/missing
**Fix:**
1. Check file names match EXACTLY (case-sensitive!)
   - `headshot.jpg` NOT `Headshot.JPG` or `headshot.jpeg`
2. Make sure files are in `/public/images/` folder
3. Stop dev server (Ctrl+C) and restart (`npm run dev`)
4. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

**Problem:** Images are too large/slow
**Fix:**
- Make sure you compressed them at TinyPNG.com
- Check file sizes: should be <500KB each
- If larger, resize to smaller dimensions

---

## Step 6: Optional - If You Don't Have All Photos Yet

### Working Without Photos (Won't Break Site):

The site will work fine without images, but you'll see:
- Hero: No headshot (just text on left, empty space on right)
- Stories: No photos (just text)
- Banners: Plain backgrounds

### Add Placeholder Images Temporarily:

**Free Stock Photo Sites:**
- Unsplash.com - Professional photos, free to use
- Pexels.com - High-quality stock photos

**Temporary placeholders:**
- AI technology image → ai-consulting-banner.jpg
- Team/collaboration image → leadership-banner.jpg
- Generic professional headshot → headshot.jpg

**Note:** Replace with YOUR real photos before going live!

---

## Image Specifications Summary

| Location | File Name | Size | Type |
|----------|-----------|------|------|
| Hero Headshot | `headshot.jpg` | 800x800px | Square, professional |
| Building Banner | `ai-consulting-banner.jpg` | 1920x1080px | Wide, abstract AI |
| Leadership Banner | `leadership-banner.jpg` | 1920x1080px | Wide, team/growth |
| Foundation Story | `foundation-stage.jpg` | 1200x800px | Landscape, stage |
| Ukraine Story 1 | `ukraine-mission-1.jpg` | 1200x800px | Landscape, mission |
| Ukraine Story 2 | `ukraine-mission-2.jpg` | 1200x800px | Landscape, mission |
| Veteran Story | `veteran-advocacy-1.jpg` | 1200x800px | Landscape, political |

**All images should be:**
- ✅ Compressed (using TinyPNG.com)
- ✅ Under 500KB each
- ✅ JPG format (not PNG, unless transparency needed)
- ✅ Properly named (lowercase, no spaces)

---

## Advanced: Adding More Images

### Want to add a second veteran advocacy photo?

1. **Add photo to** `/public/images/veteran-advocacy-2.jpg`
2. **Open** `lib/constants.ts` in VS Code
3. **Find** "Veteran Advocacy Wins" section (around line 126)
4. **Change:**
   ```typescript
   images: ["/images/veteran-advocacy-1.jpg"],
   ```
   **To:**
   ```typescript
   images: ["/images/veteran-advocacy-1.jpg", "/images/veteran-advocacy-2.jpg"],
   ```
5. **Save** (Cmd+S or Ctrl+S)
6. Check browser - should show 2 photos in grid!

### Remove banner backgrounds?

If you don't want the subtle banner backgrounds:

**For "What I'm Building":**
1. Open `components/home/BuildingNowSection.tsx`
2. Delete lines 13-22 (the `<div className="absolute inset-0 opacity-5">` section)
3. Save

**For "How I Lead":**
1. Open `components/home/OperatingPrinciples.tsx`
2. Delete lines 12-21 (the `<div className="absolute inset-0 opacity-5">` section)
3. Save

---

## Need Help?

**Images not showing:**
- Check browser console (F12 → Console tab)
- Look for red errors about missing images
- Verify file paths match exactly

**Images look blurry:**
- They might be too small - use larger source images
- Make sure you're not upscaling (original should be bigger than target size)

**Site is slow:**
- Compress images at TinyPNG.com
- Check file sizes - should all be <500KB

**Ready to deploy?**
- Make sure ALL images are added before running `git push`
- Images will be included in your deployment automatically

---

Good luck! Your site will look amazing with photos! 📸✨
