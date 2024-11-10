
# Course Info Hub (MERN)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Overview
**Course Info Hub** is a MERN stack project that includes an admin panel where CRUD operations can be performed to manage course information. The frontend is built with React and styled with Tailwind CSS, while the backend API is developed with Express and MongoDB. The Fetch API is used on the frontend for HTTP requests to communicate with the backend.

## Features
- Admin panel to add, view, update, and delete course information
- RESTful API backend with MongoDB database
- Responsive UI with Tailwind CSS

## Tech Stack
- **Frontend**: React, Tailwind CSS, JavaScript, Fetch API
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shivaaykansara/Course-Info-Hub--MERN-.git
   ```

2. **Install dependencies** for both frontend and backend:

   ### Backend
   ```bash
   cd backend
   npm install
   ```

   ### Frontend
   ```bash
   cd frontend
   npm install
   ```

3. **Set up environment variables** for the backend by creating a `.env` file:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```

5. **Start the frontend development server**:
   ```bash
   cd frontend
   npm start
   ```

## Usage
1. After starting both servers, open your browser and go to:
   ```
   http://localhost:3000
   ```
2. Access the admin panel to perform CRUD operations on course data.

## Project Structure

```plaintext
Course-Info-Hub--MERN-/
├── backend/               # Express server and MongoDB connection
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── controllers/       # Request handlers
│   ├── .env               # Environment variables
│   └── server.js          # Entry point for the backend
└── frontend/              # React application
    ├── public/            # Static assets
    ├── src/
    │   ├── components/    # Reusable components
    │   ├── pages/         # Application pages
    │   ├── services/      # Fetch functions for API requests
    │   └── App.js         # Main app component
```

## Contributing
Contributions are welcome! Fork the repository, make your changes, and submit a pull request.
