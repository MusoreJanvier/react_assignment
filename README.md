# Doctor Appointment System

## Overview

This project is a Doctor Appointment System built with React, Express.js, and MongoDB. It provides a comprehensive platform for managing medical appointments, user authentication, and administrative functions.

## Features

- **User Authentication**
  - Login and registration
  - Forgot password functionality
  - Role-based access control

- **Doctor Management**
  - Add new doctors
  - Edit doctor profiles
  - View doctor listings

- **Appointment Management**
  - Schedule new appointments
  - Edit existing appointments
  - View appointment lists
  - Patient and admin appointment tracking

- **Calendar Management**
  - Add and manage appointment calendars
  - View available time slots
  - Prevent double bookings

- **Navigation**
  - Intuitive user interface
  - Role-specific dashboards
  - Easy access to different system sections

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB (Local or Cloud Instance)
- Git

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/MusoreJanvier/react_assignment.git
   cd doctor-appointment-system
   ```

2. **Install Dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Configure Environment**
   - Create a `.env` file in the backend directory
   - Add necessary environment variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the Application**
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend development server
   cd ../frontend
   npm start
   ```

## Project Structure

```
doctor-appointment-system/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
└── README.md
```

## Technologies Used

- **Frontend**
  - React.js
  - React Router
  - Axios
  - Material-UI or Bootstrap

- **Backend**
  - Express.js
  - MongoDB
  - Mongoose
  - JSON Web Tokens (JWT)

- **Authentication**
  - bcrypt for password hashing
  - JWT for secure authentication

## Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/52f47f55-d3a0-4253-88d4-5db15f719731)

### Login Page
![Login Page](https://github.com/user-attachments/assets/87f9911a-ad59-4ce5-a1e5-45ba2a3fb7ba)

### Signup Page
![Signup Page](https://github.com/user-attachments/assets/54692dc6-5e52-4d10-a658-96623ff9eeaf)

### Admin Dashboard
![Admin Home](https://github.com/user-attachments/assets/b21652a3-0f4a-44dd-a230-13b04f8b54d8)

### User Appointments
![User Appointments](https://github.com/user-attachments/assets/ad139044-8a25-4192-93e8-a9c0a41ee5df)

## Repository

[GitHub Repository](https://github.com/MusoreJanvier/react_assignment.git)

## License

This project is open-source and available under the MIT License.

## Contact

Janvier Musore - [Your Email or LinkedIn]

**Project Link**: [https://github.com/MusoreJanvier/react_assignment.git](https://github.com/MusoreJanvier/react_assignment.git)
