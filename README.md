# 🛍️ Teslo Shop - React + TypeScript

A modern e-commerce web application built with **React**, **TypeScript**, and **Vite**, inspired by the Teslo Shop concept.  
This project focuses on performance, clean architecture, and an elegant UI powered by **shadcn/ui** components, **TanStack Query**, **Zustand**, and **Axios**.

---

## 🚀 Screenshots

<img width="1614" height="915" alt="{CECC2D39-A3DA-4F9B-B128-E224319DCFE3}" src="https://github.com/user-attachments/assets/a2c860db-7ec3-4c52-a3c0-3ccaf00703e3" />
<img width="1501" height="917" alt="{55C4BB13-B98C-4B47-B40A-FD31B3CEA475}" src="https://github.com/user-attachments/assets/fdf9ef12-6267-4485-b3f5-36c69d19fac9" />
<img width="1898" height="911" alt="{ED7C81BB-938B-4C90-A649-5EC3610AD321}" src="https://github.com/user-attachments/assets/eaed77a7-f262-48a9-81cc-170f76081537" />
<img width="1899" height="916" alt="{14B271C5-DC12-4DD0-84D3-C8DC8D467D81}" src="https://github.com/user-attachments/assets/d3999c16-7a7c-42b5-ac7f-8d1c221b2d76" />
<img width="1901" height="916" alt="{5078885F-2065-4349-945D-18B6CACF568B}" src="https://github.com/user-attachments/assets/85df56fc-6ea3-4136-a87f-c5b71a734561" />

---

## 🧠 Tech Stack

### Frontend

- ⚛️ **React** — Frontend library for building interactive UIs
- 💙 **TypeScript** — Type-safe JavaScript for scalability and maintainability
- ⚡ **Vite** — Fast development and build tool
- 🔄 **TanStack Query** — Data synchronization and server state management
- 🪣 **Zustand** — Lightweight global state management
- 🌐 **Axios** — Promise-based HTTP client for API requests
- 🧾 **React Hook Form** — Form management using `useForm` for efficient validation and performance
- 🎨 **shadcn/ui** — Modern, accessible UI components built with TailwindCSS

### Backend

The backend for this project is built using **NestJS**, a scalable Node.js framework.  
🔗 **Backend Repository:** [nest-backend-tesloshop](https://github.com/The-Lup/nest-backend-tesloshop)

### Database & Deployment

- 🐘 **PostgreSQL 14** hosted on **Neon Tech**
- 🌐 **Render** — Deployment platform for the backend services

---

## 🧩 Features

- 🛒 **Product listing with dynamic fetching** — Products are retrieved from the backend using Axios and TanStack Query for optimized state management.
- 👤 **User authentication & authorization** — Role-based access control (admin and regular user).
- 🧰 **Admin product management** — Admin users can create, edit, and delete products.
- 🔍 **Product search and filtering** — Non-admin users can search products by name, size, and price.
- ⚡ **Real-time server state updates** — Smooth and efficient data synchronization using TanStack Query and Zustand.
- 🎨 **Clean and responsive UI design** — Built with shadcn/ui and TailwindCSS for a modern and elegant interface.

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js v18+
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/The-Lup/teslo-shop-app-react-ts.git
   cd teslo-shop-app-react-ts
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   Create a `.env` file based on the provided `.env.template` and add the backend API URL:

   ```
   VITE_API_URL=https://your-backend-api.onrender.com
   ```

4. **Run the app**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
teslo-shop-app-react-ts/
├── public/                 # Static assets
├── src/
│   ├── admin/              # Admin dashboard and management pages
│   ├── api/                # API services and requests (Axios)
│   ├── assets/             # Images and static resources
│   ├── auth/               # Authentication and user context
│   ├── components/         # Reusable UI components
│   ├── interfaces/         # TypeScript interfaces and types
│   ├── lib/                # Configuration and utility libraries
│   ├── mocks/              # Mock data for development/testing
│   ├── shop/               # Main e-commerce pages and logic
│   ├── app.router.tsx      # Application routing setup
│   ├── main.tsx            # App entry point
│   ├── TesloShopApp.tsx    # Root app component
│   └── index.css           # Global styles
├── .env.template            # Environment variable example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🧪 Future Improvements

- ✅ Integrate payment gateway (e.g., Stripe)
- ✅ Add product reviews and ratings
- ✅ Implement admin dashboard analytics
- ✅ Improve SEO and performance metrics

---

## 🧑‍💻 Author

**Lu P.**  
🌐 GitHub: [@The-Lup](https://github.com/The-Lup)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
