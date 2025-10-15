MERN Stack E-Commerce Platform

A feature-rich e-commerce application built with the MERN stack, offering secure authentication, role-based access control, and seamless user experience.

Table of Contents

Features Technologies Used Setup and Installation Folder Structure API Endpoints Screenshots Future Enhancements License Features

Secure Authentication & Authorization Passwords are hashed using bcrypt for secure storage. JWT-based authentication to manage user sessions securely. Middleware enforces proper authorization to ensure users access only allowed resources.
Role-Based Access Control (RBAC) Admin roles include managing products, orders, and viewing analytics. User roles allow accessing orders and account settings. Permissions are dynamically integrated into routes and UI components.
Payment Integration Secure payment handling via Braintree payment gateway.
Enhanced User Experience Search and Filters: Quickly find products with advanced search options and pagination. Responsive Design: Mobile-first design with React.js and Bootstrap for accessibility across devices. Email Notifications: Order updates and account-related notifications sent using Nodemailer.
Analytics Dashboard Admin-exclusive dashboard with user growth charts and order statistics using Chart.js. Technologies Used
Frontend: React.js React Hooks Bootstrap Backend: Node.js Express.js Database: MongoDB Authentication: JSON Web Tokens (JWT) bcrypt Additional Libraries: Nodemailer for email notifications Braintree for payment integration Chart.js for visual analytics Setup and Installation

Prerequisites Node.js and npm MongoDB installed locally or an active MongoDB Atlas account Braintree sandbox account for payment testing
