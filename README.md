This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Contact Form Setup

The contact form uses Resend to send email notifications. To set it up:

1. **Get Resend API Key:**
   - Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
   - Go to [API Keys](https://resend.com/api-keys) and create a new key
   - Copy your API key

2. **Local Development:**
   - Create a `.env.local` file in the project root
   - Add: `RESEND_API_KEY=re_your_api_key_here`
   - Optional: `CONTACT_EMAIL=your-email@example.com` (defaults to genexis.ailab@gmail.com)

3. **Vercel Deployment:**
   - Go to your project settings in Vercel
   - Navigate to Environment Variables
   - Add `RESEND_API_KEY` with your Resend API key
   - Add `CONTACT_EMAIL` (optional) if you want a different recipient email
   - Redeploy your application

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
