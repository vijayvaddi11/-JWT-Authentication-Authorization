# JWT Authentication & Authorization (Node.js)

A demo backend project for **JWT based Authentication & Authorization** using **Node.js**, **Express**, and **MongoDB** — built as a practice and reference REST API.

This project includes:
- Secure user registration & login
- Password hashing (bcrypt)
- JWT token generation & validation
- Protected routes with middleware
- Role-based access control support

---

##  Features

✔ User Signup (register)  
✔ User Login (generate JWT)  
✔ Token protected routes  
✔ Middleware to verify tokens  
✔ Role-based access checks  
✔ Uses best practices for security

---

##  Tech Stack

| Component | Technology |
|-----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB (via Mongoose) |
| Authentication | JSON Web Tokens (JWT) |
| Security | bcrypt (password hashing) |
| Environment | dotenv |

---

## 🛠 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/vijayvaddi11/-JWT-Authentication-Authorization.git
cd -JWT-Authentication-Authorization
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create .env file
Create a .env file in the root folder:
```bash
PORT=5000
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

### 4️⃣ Run the server
```bash
npm start
```
