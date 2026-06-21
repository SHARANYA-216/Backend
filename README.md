# E-Commerce Backend

## Overview

Backend API for an e-commerce application developed using Node.js, Express.js, and MongoDB. Provides secure APIs for authentication, product management, cart operations, and order processing.

## Features

* User Authentication
* JWT Authorization
* Product Management APIs
* Cart Management APIs
* Order Processing
* MongoDB Database Integration
* RESTful API Architecture

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* REST APIs

## Live API

Backend URL: [My-store Backend Deployed URL](https://backend-1-wz0o.onrender.com)

## Frontend Repository

Frontend URL: [YOUR_FRONTEND_GITHUB_URL](https://github.com/SHARANYA-216/Frontend-Mystore)

## Installation

```bash
git clone YOUR_BACKEND_REPOSITORY_URL
cd backend
npm install
npm run dev
```

## Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login

### Products

* GET /api/products
* GET /api/products/:id

### Orders

* POST /api/orders
* GET /api/orders

## Author

Sharanya Kathroju
