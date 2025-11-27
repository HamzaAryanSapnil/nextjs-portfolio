# README — My Portfolio Frontend (Next.js)

 A modern, role-based My Portfolio frontend built with Next.js, TypeScript, Tailwind CSS (v4), and shadcn/ui. It consumes a REST API to power an Admin-only dashboard, with solid UX, and reusable tables.


# 🚀 ✨ Features (at a glance)

- Public site: Home, Blogs 

- Auth: Admin Login,  JWT persistence, role-based redirects

- Admin Dashboard: Admin Profile, manage blogs, (advanced filters & search)

- UI/UX: Light/Dark theme, responsive layout,  toasts,


- DX: Type-safe APIs, clean folder structure

---



## 🛠️ 🧱 Tech Stack

- **Core**: Next.js + TypeScript

- **UI**: Tailwind CSS v4, shadcn/ui, Lucide/Tabler icons

- **Tables**: TanStack Table

- **Auth**: JWT (persisted; backend validates)

- **Backend**: Node.js, Express.js
- **Language**: TypeScript
- **Database**: Prisma + PostgreSQL
- **Validation**: Zod
- **Authentication**: JWT
- **Password Hashing**: bcryptjs
- **Error Handling**: Centralized, Global Error is handled with a custom AppError Function.
- **Authorization**: Role-based (admin)

---

## 🔐 Authentication & Authorization

- JWT-based authentication
- Role-based access (`admin`)
- Protected routes with role checks, like no one can access the admin's route except user is an admin.

---


# Backend 🧪 API Endpoints (Sample)

Main api: https://digital-walet-backend.vercel.app/api/v1

### Auth
- `POST /auth/login` — Login and receive access token
### Admin
- `GET /blogs` — View all blogs
- `GET /blogs/[slug]` — View single blog
---

## 3. ⚙️ Environment Variables


### Create .env (or .env.local) at project root:
```
DATABASE_URL=Your DB

PORT=5000
NODE_ENV=development


JWT_SECRET=Your Secret
JWT_EXPIRES_IN=Your Time
REFRESH_TOKEN_SECRET=Your Refresh Secret
REFRESH_TOKEN_EXPIRES_IN=7d

JWT_REFRESH_EXPIRES_IN=Your Time
RESET_PASS_TOKEN=Your Token
RESET_PASS_TOKEN_EXPIRES_IN=Your Time
RESET_PASS_SECRET=Your Secret
RESET_PASS_LINK=http://Your Url/reset-password

# bcryptjs
SALT_ROUND=10

# Admin credentials
ADMIN_EMAIL=Admin Credentials
ADMIN_PASS=Admin Pass



EMAIL=resend Email
APP_PASS=email pass
```

## 4. 🚀 Getting Started, Start the Server

### For Development:

```bash
npm run dev
bun dev (recommend) 
```
### For Production:

```bash
npm run build
npm run start
bun build
bun start
```

## 🔐 Authentication Flow
- Login returns a JWT → stored in localStorage under VITE_JWT_STORAGE_KEY.

- RTK Query baseQuery attaches Authorization:Cookie automatically.

- Post-login redirect is role-based:
-   - admin → /dashboard/admin



## 📊 Data Visualization

- Reusable DataTable with pagination, search, and column formatters


## 🔎 Filters & Search
- Pagination via server or client (configurable per page)


## 🧹 Code Quality
- ESLint + Prettier preconfigured

- Commit history should reflect feature branches & PRs

- Use TypeScript types for all API responses & UI models


## 🌐 Deployment
- Vercel/Netlify for frontend

- Set env vars in platform settings

- Ensure CORS & HTTPS on backend
- Add live URLs in README once deployed

## 🙌 Credits
- Icons: lucide-react / @tabler/icons-react

- UI: shadcn/ui

- Charts: Recharts

- Tables: TanStack Table
  





📫 Author
Hamza Aryan Sapnil
📍 Bangladesh
🌐 LinkedIn • 💻 Full Stack Developer

📄 License
This project is licensed for educational purposes under MIT.


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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
