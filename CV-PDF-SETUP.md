# Resume PDF Setup

## Adding Your CV/Resume PDF

To enable the PDF download functionality on the Resume page:

1. **Export your CV as PDF**
   - Use a tool like Microsoft Word, Google Docs, or Canva
   - Export/Save as PDF format
   - Name the file `cv.pdf`

2. **Add the PDF to your portfolio**
   ```
   public/
   └── cv.pdf  <- Place your CV PDF file here
   ```

3. **The download button is already configured**
   - Located on the Resume page
   - Downloads the file from `/cv.pdf`
   - Works in both English and French

## Alternative: Update the PDF Path

If you want to use a different filename or location, update the download link in:

**File:** `src/pages/Resume.tsx`

Find this line (around line 360):
```tsx
href="/cv.pdf"
```

Change to your preferred path:
```tsx
href="/your-custom-name.pdf"
```

## Online Resume Builders (Recommended)

- **Canva**: https://www.canva.com/create/resumes/
- **Resume.io**: https://resume.io/
- **Novoresume**: https://novoresume.com/
- **Zety**: https://zety.com/

## Tips for Your CV PDF

1. Keep file size under 1MB for faster downloads
2. Use a professional layout that matches your portfolio style
3. Include the same information shown on your Resume page
4. Make sure all links (GitHub, LinkedIn) are clickable in the PDF
5. Save with a descriptive filename for when users download it

---

**Note:** The current href (`/cv.pdf`) will work once you add the file. Without the PDF file, clicking the download button will show a 404 error.
