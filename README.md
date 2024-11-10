Course Info Hub (MERN)
Table of Contents
Overview
Features
Tech Stack
Installation
Usage
Project Structure
Contributing
Overview
Course Info Hub is a MERN stack project that includes an admin panel where CRUD operations can be performed to manage course information. The frontend is built with React and styled with Tailwind CSS, while the backend API is developed with Express and MongoDB. The Fetch API is used on the frontend for HTTP requests to communicate with the backend.

Features
Admin panel to add, view, update, and delete course information
RESTful API backend with MongoDB database
Responsive UI with Tailwind CSS
Tech Stack
Frontend: React, Tailwind CSS, JavaScript, Fetch API
Backend: Node.js, Express.js
Database: MongoDB
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Shivaaykansara/Course-Info-Hub--MERN-.git
Install dependencies for both frontend and backend:

Backend
bash
Copy code
cd backend
npm install
Frontend
bash
Copy code
cd frontend
npm install
Set up environment variables for the backend by creating a .env file:

plaintext
Copy code
MONGODB_URI=your_mongodb_connection_string
PORT=5000
Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend development server:

bash
Copy code
cd frontend
npm start
Usage
After starting both servers, open your browser and go to:
arduino
Copy code
http://localhost:3000
Access the admin panel to perform CRUD operations on course data.
Project Structure
plaintext
Copy code
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
Contributing
Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

