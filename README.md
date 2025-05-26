# 📫 Portfolio Contact Backend API

This is the backend for the contact form on my full-stack personal portfolio website. It is a production-ready **RESTful API** built with **Node.js** and **Express.js**, live-hosted on **Render**.

The API handles `POST` requests from the frontend and sends emails via **Nodemailer** using secure Gmail App Password authentication. It includes optional integration with **MongoDB** using **Mongoose** (commented for flexibility), allowing for future message persistence and analytics.

---

## 🚀 Features

- RESTful API endpoint to handle contact form submissions
- Email delivery via Nodemailer and Gmail
- Environment variable management with `dotenv`
- CORS configured for secure frontend communication
- Optional MongoDB + Mongoose support (commented out)
- Deployed and live on [Render](https://render.com/)

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Nodemailer**
- **REST API**
- **dotenv**
- **CORS**
- **MongoDB** (optional)
- **Mongoose** (optional)
- **Render** (deployment)

---

## 📩 How It Works

1. Frontend sends a `POST` request to `/api/contact` with:
   - `name`
   - `email`
   - `message`

2. Backend:
   - Uses Nodemailer to send an email to your inbox
   - (Optionally) saves the message to MongoDB

---


