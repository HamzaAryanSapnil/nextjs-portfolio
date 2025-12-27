# Google Search Console Verification Setup Guide

## Method 1: HTML Meta Tag (Recommended for Next.js)

### Steps:
1. Go to Google Search Console: https://search.google.com/search-console
2. Click "Add Property" → Select "URL prefix"
3. Enter your site URL: `https://nextjs-portfolio-delta-three.vercel.app`
4. Choose "HTML tag" verification method
5. Copy the `content` value from the meta tag (it looks like: `content="abc123xyz..."`)

### Add to Environment Variables:
1. Create or update `.env.local` file in your project root
2. Add this line:
   ```
   NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code_here
   ```
   (Replace `your_verification_code_here` with the actual code from Google)

3. Deploy to Vercel and add the same environment variable in Vercel dashboard:
   - Go to your project settings
   - Environment Variables
   - Add: `NEXT_PUBLIC_GOOGLE_VERIFICATION` = `your_verification_code_here`

4. After deployment, go back to Google Search Console and click "Verify"

---

## Method 2: HTML File Upload (Alternative)

If HTML tag doesn't work, you can use HTML file method:

1. In Google Search Console, choose "HTML file" verification method
2. Download the HTML file (e.g., `google1234567890abcdef.html`)
3. Place it in your `public` folder
4. Deploy to Vercel
5. The file will be accessible at: `https://nextjs-portfolio-delta-three.vercel.app/google1234567890abcdef.html`
6. Go back to Google Search Console and click "Verify"

---

## Method 3: DNS Verification (If you have custom domain)

If you have a custom domain:

1. Choose "DNS record" verification in Google Search Console
2. Add the TXT record to your domain's DNS settings
3. Wait for DNS propagation (can take up to 48 hours)
4. Click "Verify" in Google Search Console

---

## After Verification:

1. Submit your sitemap: `https://nextjs-portfolio-delta-three.vercel.app/sitemap.xml`
2. Use URL Inspection tool to request indexing for your homepage
3. Wait 1-7 days for Google to index your site

---

## Troubleshooting:

- **Verification failed?** Make sure:
  - The meta tag is in the `<head>` section (it is, via Next.js metadata)
  - The site is deployed and accessible
  - You're using the correct URL (with or without www)
  - Clear browser cache and try again

- **Still not working?** Try the HTML file method instead

