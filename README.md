# Health Track
![image](https://github.com/user-attachments/assets/651ab464-c084-441a-8a11-0fd2d636a613)


## Introduction

Welcome to the Hospital Management System Application named Health Track, a comprehensive solution designed to streamline hospital operations, enhance patient care, and facilitate efficient record management. This project encompasses both frontend and backend development, utilizing modern web technologies.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Secure login and registration.
- **Profile Management**: Manage user profiles with image uploads.
- **Appointment Scheduling**: Book and manage doctor appointments.
- **Department Information**: Display department details with a carousel.
- **Messaging System**: Send messages through a contact form.
- **Responsive Design**: Works on desktop and mobile devices.

## Technologies Used

### Frontend

![image](https://github.com/user-attachments/assets/b7c3ef2c-2c1e-4c2f-9ba0-c3d4df978546)
- **React**: UI Library
- **Vite**: Frontend Tooling
- **Axios**: HTTP Client
- **React Icons**: Icon Library
- **React Multi Carousel**: Carousel Component
- **React Router DOM**: Routing Library
- **React Toastify**: Notification Library

### Backend

![image](https://github.com/user-attachments/assets/bc3354c5-dc20-4112-bce6-45e31db925ee)

- **Node.js**: JavaScript Runtime
- **Express.js**: Web Framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **Cloudinary**: Image and Video Management
- **Bcrypt**: Password Hashing
- **JWT**: JSON Web Tokens for Authentication
- **Validator**: Data Validation
- **Dotenv**: Environment Variable Management
- **Cors**: Cross-Origin Resource Sharing
- **Cookie-Parser**: Cookie Handling
- **Express File Upload**: File Upload Middleware

## Installation

### Frontend Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Dishashetty546/Health-Track.git
   cd Health-Track/frontend
2. **install dependencies:**
    ```sh
   npm create vite@latest ./
   npm install
   npm i axios react-icons react-multi-carousel react-router-dom react-toastify

3. **Run the development server:**
    ```sh
   npm run dev

## Backend Setup

1. **Navigate to the backend folder:**
   ```sh
   cd ../backend

2. **Install:**
   ```sh
   npm init -y
   npm install bcrypt cloudinary cookie-parser cors dotenv express mongoose express-fileupload jsonwebtoken validator

3. **Set up environment variables(.env):**
   ```sh
   PORT=4000
   MONGODB_URL=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   JWT_SECRET=your_jwt_secret

4. **Run the development server:**
   ```sh
   npm run dev
   
## Usage

### Frontend
- The frontend application runs on [http://localhost:5173](http://localhost:5173).
- Navigate to different pages like Home, About Us, Appointments, Login, and Register using the navigation bar.
- Use the contact form on the Home page to send messages.

### Backend
- The backend server runs on [http://localhost:4000](http://localhost:4000).
- Use Postman or any API client to test API endpoints.
- Ensure MongoDB is running and connected.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

   




