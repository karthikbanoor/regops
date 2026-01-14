# Comprehensive Deployment Documentation for RegOps

This document details the complete zero-cost hosting architecture and deployment process for the RegOps application. It is designed to be a reference for future developers to understand, maintain, and redeploy the stack.

---

## 🏗️ Architecture Overview

To achieve a **$0/month** hosting cost while maintaining persistent data and files, we use a "Best-of-Breed" multi-provider stack:

| Component | Provider | Reason for Selection |
| :--- | :--- | :--- |
| **Frontend** | **[Vercel](https://vercel.com)** | Best-in-class performance for Next.js, static export support, global CDN. |
| **Backend** | **[Render](https://render.com)** | Offers a free Node.js web service tier (spins down after inactivity). |
| **Database** | **[Neon](https://neon.tech)** | Provides a free, persistent Postgres database (Render's free DB expires after 30 days). |
| **Storage** | **[Cloudinary](https://cloudinary.com)** | Permanent cloud storage for images/media (Render's filesystem is ephemeral/wipes on restart). |

---

## 🛠️ Step 1: Prerequisites & Account Setup

Ensure you have accounts on all four platforms:
1.  **GitHub**: Hosts the source code.
2.  **Neon**: For the PostgreSQL database.
3.  **Cloudinary**: For media asset storage.
4.  **Render**: For running the Strapi backend.
5.  **Vercel**: For serving the Next.js frontend.

---

## 🗄️ Step 2: Database Setup (Neon)

1.  Create a new project in Neon (e.g., `regops`).
2.  Select Postgres version **16** or **17**.
3.  **CRITICAL**: Copy the **Connection String** immediately after creation.
    *   It looks like: `postgresql://neondb_owner:*******@ep-xyz.aws.neon.tech/neondb?sslmode=require`
    *   This is your `DATABASE_URL`.

---

## ☁️ Step 3: Storage Setup (Cloudinary)

1.  Log in to the Cloudinary Programmable Media Dashboard.
2.  Locate the **"Product Environment Credentials"** section (top-left).
3.  Copy these three values:
    *   **Cloud Name** (`CLOUDINARY_NAME`)
    *   **API Key** (`CLOUDINARY_KEY`)
    *   **API Secret** (`CLOUDINARY_SECRET`)

---

## 🚀 Step 4: Backend Deployment (Render)

Strapi needs to run as a Node.js service.

1.  **New Web Service**: In Render, create a new Web Service and connect your GitHub repo.
2.  **Configuration**:
    *   **Name**: `regops-backend`
    *   **Root Directory**: `backend` (IMPORTANT: The backend code is in this subfolder)
    *   **Runtime**: `Node`
    *   **Build Command**: `npm install && npm run build`
    *   **Start Command**: `npm run start`
    *   **Instance Type**: **Free**

3.  **Environment Variables**:
    You MUST set these variables for the app to function.

    | Variable Key | Value Definition |
    | :--- | :--- |
    | `NODE_ENV` | `production` |
    | `DATABASE_CLIENT` | `postgres` |
    | `DATABASE_URL` | *(Your Neon Connection String)* |
    | `CLOUDINARY_NAME` | *(Your Cloudinary Cloud Name)* |
    | `CLOUDINARY_KEY` | *(Your Cloudinary API Key)* |
    | `CLOUDINARY_SECRET` | *(Your Cloudinary API Secret)* |
    | `APP_KEYS` | `randomString1,randomString2` (Any random text) |
    | `API_TOKEN_SALT` | `randomString` |
    | `ADMIN_JWT_SECRET` | `randomString` |
    | `TRANSFER_TOKEN_SALT`| `randomString` |
    | `JWT_SECRET` | `randomString` |

4.  **Deploy**: Click "Create Web Service".
5.  **Result**: Once live, copy your backend URL (e.g., `https://regops-backend.onrender.com`).

---

## 🌐 Step 5: Frontend Deployment (Vercel)

The Next.js app is deployed as a static export.

1.  **New Project**: In Vercel, import the same GitHub repo.
2.  **Configuration**:
    *   **Framework Preset**: `Next.js`
    *   **Root Directory**: `.` (Leave default)
3.  **Environment Variables**:
    *   `NEXT_PUBLIC_STRAPI_API_URL`: `https://regops-backend.onrender.com` (Your Render URL)
    *   *Note: Do NOT include a trailing slash.*

4.  **Deploy**: Click Deploy.
5.  **Troubleshooting**:
    *   If styles are broken, ensure `next.config.mjs` **does not** have `basePath` set.
    *   If build fails with `missing generateStaticParams`, ensure you have at least one page (e.g., 'home') published in Strapi.

---

## 🛡️ Step 6: Final Configuration (Strapi Admin)

After both are deployed, you need to configure Strapi to allow the frontend to fetch data.

1.  **Access Admin**: Go to `https://regops-backend.onrender.com/admin`.
2.  **Create Admin User**: Set up your login credentials.
3.  **Set Public Permissions**:
    *   Go to **Settings** -> **Users & Permissions** -> **Roles** -> **Public**.
    *   Under **Page** permissions, check **find** and **findOne**.
    *   Under **Global** permissions (if any), check **find**.
    *   Click **Save**.
4.  **Publish Content**: Ensure you have created and **Published** at least one Page (e.g., with slug `home`).

---

## 🔄 Maintenance & Redeployment

*   **Frontend Updates**: Pushing to the `main` branch on GitHub automatically triggers a redeploy on Vercel.
*   **Backend Updates**: Pushing changes to the `backend/` folder triggers a redeploy on Render.
*   **Database**: Data persists indefinitely on Neon.
*   **Uploads**: Images persist indefinitely on Cloudinary.
