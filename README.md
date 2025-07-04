Book Review Platform

A simple full-stack application for browsing, reviewing, and rating books.

---

Project Structure

book-review-platform/
├── frontend/   # React or Vite frontend
└── backend/    # Node.js/Express backend

---

Technologies Used

Frontend: React (Vite)

Backend: Node.js, Express

Database: MongoDB

Authentication: JWT

---

Getting Started

Frontend Setup

cd frontend
npm install
npm run dev

Opens on: http://localhost:5173

Backend Setup

cd backend
npm install
npm run dev    # development mode with live reload
or
npm run start  # production mode

Runs on: http://localhost:4000

---

Environment Variables

Create a .env file in the backend directory with the following:

PORT=4000
MONGO_URL=your_database_url
JWT_SECRET=your_jwt_secret

Replace these values with your own.

---

Features

- User authentication (register/login)
- Browse books
- Add and read reviews
- Star ratings
- REST API integration

---


Author

Made with ❤️ by [Tripurari]
