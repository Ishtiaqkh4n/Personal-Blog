
# 📝 Personal Blog Web Application

A simple **Personal Blog platform** that allows users to read articles and provides an admin interface to create, edit, and manage blog posts. This project focuses on server-side rendering, file handling, and basic authentication.

---

## 🚀 Features

### 🌐 Guest (Public) Features

Accessible to all users without authentication:

* 🏠 **Home Page**

  * Displays a list of all published blog posts
  * Shows titles and publication dates

* 📄 **Article Page**

  * View full blog content
  * Displays:

    * Title
    * Content
    * Publication date

---

### 🔐 Admin Features

Accessible only to authenticated users:

* 📊 **Dashboard**

  * View all blog posts
  * Manage content بسهولة (CRUD operations)

* ➕ **Create Article**

  * Add new blog posts
  * Fields include:

    * Title
    * Content
    * Publication date

* ✏️ **Edit Article**

  * Update existing posts
  * Modify title, content, or date

* ❌ **Delete Article**

  * Remove blog posts permanently

---

### 🔑 Authentication Features

* Basic login system for admin access
* Session-based authentication
* Protected admin routes ([roadmap.sh][1])

---

### 💾 Data & Storage

* 📁 **File-Based Storage**

  * Articles stored as separate files
  * Supports:

    * JSON format
    * Markdown format ([roadmap.sh][1])

* 📌 Each article includes:

  * Title
  * Content
  * Publication date

---

### 🎨 Frontend Features

* Server-rendered HTML pages
* Simple UI using:

  * HTML
  * CSS
* Optional templating engine for dynamic rendering ([roadmap.sh][1])

---

### ⚙️ Backend Features

* Handles:

  * Routing
  * Form submissions
  * File operations
* No need for API (server-rendered approach) ([roadmap.sh][1])

---

## 📦 Article Structure (Example)

```json
{
  "title": "My First Blog",
  "content": "This is my first blog post!",
  "publishedAt": "2026-03-20"
}
```

---

## 🧪 Usage

### 🏠 View Blog

```bash
http://localhost:3000/
```

### 📄 View Article

```bash
http://localhost:3000/article/:id
```

### 🔐 Admin Login

```bash
http://localhost:3000/admin
```

### ➕ Create Article

```bash
http://localhost:3000/admin/add
```

### ✏️ Edit Article

```bash
http://localhost:3000/admin/edit/:id
```

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/personal-blog.git
cd personal-blog
```

Run the project:

```bash
# Node.js
npm install
npm start

## 🎯 Learning Objectives

This project helps you practice:

* Server-side rendering
* File system operations
* Form handling
* Authentication basics
* CRUD operations
* Templating engines

---

## 🔒 Constraints (as per project)

* No database required
* Use filesystem for storage
* Simple authentication system
* Server-rendered pages only ([roadmap.sh][1])

---

## 🚀 Possible Improvements

* 🔍 Search functionality
* 🏷️ Categories & tags
* 💬 Comments system
* 📱 Responsive design
* 🌐 Deploy online
* 🗄️ Database integration (MongoDB, PostgreSQL)
* 🔐 Advanced authentication (JWT, OAuth)

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork and improve the project.

---

## 📄 License

This project is open-source and available under the MIT License.

---

 ⭐ Acknowledgment

This project is inspired by the roadmap.sh backend projects collection.



[1]: https://roadmap.sh/projects/personal-blog   "Personal Blog Project Idea"
