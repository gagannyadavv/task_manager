# 📝 Task Manager

A full-stack Task Manager application built with **Node.js**, **Express**, **MongoDB**, and **React**.
Create, view, update, delete, and filter tasks with a modern, professional UI.

---

## 🚀 Features

* Create a new task
* View all tasks
* Update task status (completed / incomplete)
* Update task title
* Delete a task
* Filter tasks by completion status
* Modern React UI with landing page
* Toast notifications & edit modals
* Responsive design

---

## 🛠️ Tech Stack

* **Frontend**: React (Vite), React Router, CSS
* **Backend**: Node.js, Express
* **Database**: MongoDB, Mongoose
* **Tools**: Postman, Git, GitHub

---

## 📂 Project Structure

```
task_manager/
├── backend/
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js
│       ├── controllers/
│       │   └── task.controller.js
│       ├── database/
│       │   └── db.js
│       ├── models/
│       │   └── task.model.js
│       └── routes/
│           └── task.routes.js
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   ├── TaskCard.jsx
│       │   ├── CreateTaskPanel.jsx
│       │   ├── EditModal.jsx
│       │   └── Toast.jsx
│       └── pages/
│           ├── LandingPage.jsx
│           └── TaskApp.jsx
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/gagannyadavv/task_manager.git
cd task_manager
```

### 2. Install all dependencies

```bash
npm run install:all
```

### 3. Setup environment variables

Create a `.env` file inside the `backend/` folder:

```
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run in development mode

Start backend and frontend in **separate terminals**:

```bash
# Terminal 1 — Backend
npm run dev:backend

# Terminal 2 — Frontend
npm run dev:frontend
```

The frontend dev server runs at `http://localhost:5173` and proxies API calls to the backend at `http://localhost:3000`.

### 5. Production build

```bash
npm run build
npm start
```

Visit `http://localhost:3000`.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/filter?completed=true` | Filter tasks |
| PATCH | `/api/tasks/:id` | Update task status |
| PATCH | `/api/tasks/updatetitle/:id` | Update task title |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## 👨‍💻 Author

**Gagan Yadav**
