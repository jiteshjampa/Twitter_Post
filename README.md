# 🐦 Twitter Post

A **Twitter-like** web application where users can **create, retrieve, like, and delete posts** with an intuitive and visually appealing UI. Built with **React, Tailwind CSS, React Toastify, Spring Boot, and MySQL**.

---

## 🚀 Features

✅ **Create Posts** - Users can create a Twitter post with the following details:
   - Name
   - Description
   - Image URL
   - Creator Name
   - Creation Date
   - Likes (default: 0)

✅ **Retrieve Posts** - All posts are displayed in a sorted order by creation date.

✅ **Like a Post** - Users can like a post, updating it in the database.

✅ **Delete a Post** - Users can delete a post permanently.

✅ **Post Details Page** - Each post can be opened in a new page (`/post`).

✅ **React Hooks & Router** - Fully optimized with React Hooks and React Router for seamless navigation.

✅ **Toast Notifications** - React Toastify is used for **real-time alerts** and feedback.

---

## 🛠️ Tech Stack

### 🌐 Frontend
- **React.js** - UI development
- **Tailwind CSS** - Modern styling
- **React Router** - Navigation handling
- **React Toastify** - Elegant notifications

### ⚙️ Backend
- **Spring Boot** - REST API
- **MySQL** - Database
- **JPA & Hibernate** - ORM for database interaction


## 🔧 Installation Guide

### 🖥 Backend (Spring Boot)
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/twitter-post.git
   ```
2. Navigate to the backend folder:
   ```sh
   cd backend
   ```
3. Configure **application.properties** with your MySQL credentials.
4. Run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

### 🌍 Frontend (React)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

---

## 🌍 API Endpoints
| Method | Endpoint        | Description             |
|--------|----------------|-------------------------|
| GET    | `/api/posts`   | Retrieve all posts     |
| GET    | `/api/posts/{id}` | Retrieve a single post |
| POST   | `/api/posts`   | Create a new post      |
| PUT    | `/api/posts/{id}/like` | Like a post    |
| DELETE | `/api/posts/{id}` | Delete a post        |

---


