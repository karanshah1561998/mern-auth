# 🔐 MERN Auth
A full-stack **authentication system** built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Includes robust features like email verification, password reset, and JWT-protected routes. Ideal for bootstrapping secure, modern web applications.

## 🚀 Live Demo
Access the live app here: [MERN Auth](https://mern-auth-ysso.onrender.com)

## ✨ Features
- User Signup & Login
- JWT Authentication & Session Management
- Email Verification (via Mailtrap)
- Forgot Password & Reset Functionality
- Protected Routes (Frontend + Backend)
- Responsive UI with TailwindCSS
- Password Strength Meter
- Toast Notifications
- Real-Time Form Validation

## 🛠 Tech Stack
- Frontend: React.js (Vite), Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB (Atlas)
- Authentication: JWT + Email Verification
- Email Service: Mailtrap Email Sending API
- Hosting: Render

## ⚙️ Installation
### Prerequisites
**Ensure you have the following installed:**
- Node.js (v16+)
- MongoDB (local or Atlas)
- Mailtrap account with verified domain (`karanshah.dev`)

### Setup
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/karanshah1561998/mern-auth.git
   cd mern-auth

2. **Install dependencies:**
   ```bash
   cd mern-auth/backend
   npm install
   
   cd mern-auth/frontend
   npm install

3. **Set up environment variables:**
   Create a `.env` file in the mern-auth/backend directory and add:
   ```bash
   PORT = 3000
   NODE_ENV = development
   MONGODB_URI = your_mongodb_uri
   JWT_SECRET = your_jwt_secret
   MAILTRAP_TOKEN = your_token
   CLIENT_URL = http://localhost:5173

4. **Navigate to the backend directory and start the backend server:**
   ```bash
   cd friendsync/backend
   npm run dev

5. **Navigate to the frontend directory and start the React app:**
   ```bash
   cd friendsync/frontend
   npm run dev


## 📩 Email Functionality (Mailtrap Setup)
- Domain: `karanshah.dev` (Verified with Mailtrap)
- Emails sent via `@karanshah.dev` using Mailtrap Email Sending
- Templates: Welcome Email, Password Reset, Email Verification
- Uses Mailtrap Email API, not SMTP

## 🧩 Troubleshooting

### 1. Email Not Sending
- Ensure `MAILTRAP_TOKEN` and other Mailtrap credentials are correct in `.env`.
- Verify that your domain `yourdomain.com` is verified on Mailtrap.
- Make sure you're using Mailtrap **Email Sending** (not SMTP).

### 2. Invalid JWT / Auth Errors
- Check if the JWT secret in `.env` matches what's used in your backend logic.
- Confirm if the token is being correctly stored (e.g., localStorage or cookies).
- Look for expired tokens or improperly signed tokens.

### 3. MongoDB Connection Issues
- Double-check your `MONGODB_URI` in the `.env` file.
- Ensure your current IP address is whitelisted in MongoDB Atlas.
- Verify that your cluster is active and accessible.

### 4. CORS or Proxy Issues
- Add CORS middleware in your Express app and allow requests from your frontend domain.
- If using Vite, set `"proxy"` in `vite.config.js` for API requests.
- Use tools like browser dev tools or Postman to inspect CORS headers.

### 5. Password Reset Not Working
- Confirm that the token is sent to the correct user email and is valid.
- Check the backend logic for token expiration time and validation.
- Ensure the frontend is sending the token correctly via the reset URL.
