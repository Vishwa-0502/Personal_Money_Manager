# Personal Money Manager

The **Personal Money Manager** is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to register and log in using JWT-based authentication. Once authenticated, users can input detailed assets and liabilities via REST APIs to calculate their net worth. The application provides a rich interface for calculating financial information and includes comprehensive unit testing for the backend using Jest and Supertest. Also includes the use of Chart.js to show INCOME, EXPENSES, and NET WORTH.

## Technologies Used

### Frontend:
- **React**: For building the user interface.
- **Vite**: For fast build tooling and development.
- **Tailwind CSS**: For utility-first CSS styling.
- **Axios**: For making API requests to the backend.
- **React Router**: For routing and navigation between pages.
- **Headless UI & Heroicons**: For accessible and customizable UI components.

### Backend:
- **Node.js**: As the runtime environment.
- **Express.js**: For building the RESTful API.
- **MongoDB**: For storing user data, assets, liabilities, and net worth calculations.
- **Mongoose**: For object data modeling (ODM) with MongoDB.
- **JWT**: For secure user authentication and session management.
- **bcryptjs**: For password hashing and security.
- **Jest & Supertest**: For backend unit and integration testing.

## Features

- **User Authentication**:
  - Secure user registration and login using JWT (JSON Web Tokens).
  - Passwords are hashed using bcrypt for enhanced security.
  - JWT tokens are used for authentication and authorization.

- **Net Worth Calculation**:
  - Users can input detailed financial information, including various assets and liabilities.
  - Real-time calculation of net worth based on user inputs.
  - Supports a wide range of asset and liability types for comprehensive financial tracking.

- **RESTful APIs**:
  - **Authentication APIs**:
    - **POST /api/auth/register**: Register a new user.
    - **POST /api/auth/login**: Authenticate and obtain a JWT token.
  - **User APIs**:
    - **GET /api/user/profile**: Retrieve user profile information.
  - **Net Worth APIs**:
    - **POST /api/networth**: Submit assets and liabilities for net worth calculation.
    - **GET /api/networth**: Fetch calculated net worth data.

- **Responsive User Interface**:
  - Built with React and styled using Tailwind CSS for a modern and responsive design.
  - Intuitive UI/UX for ease of use across devices, including desktops, tablets, and mobile phones.

- **Protected Routes**:
  - Certain pages, such as the dashboard, are accessible only to authenticated users.
  - Uses React Router for client-side routing and navigation.

- **Unit Testing**:
  - Backend unit and integration tests are implemented using Jest and Supertest.
  - Ensures the reliability and correctness of API endpoints and application logic.

- **Error Handling**:
  - Graceful error handling for user input validation, API errors, and authentication issues.
  - Provides user-friendly error messages and feedback.

- **Data Security**:
  - Sensitive data is stored securely in MongoDB.
  - JWT tokens are used to protect user sessions and restrict access to authenticated users only.

- **Deployment Ready**:
  - The application is designed for easy deployment on cloud platforms such as Vercel (frontend) and Render.com (backend).

## Acknowledgements

I would like to extend my gratitude to the following projects and libraries that were instrumental in the development of this application:

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: A fast build tool that significantly improved development speed and efficiency.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework.
- **[Headless UI](https://headlessui.dev/)**: Accessible and customizable UI components.
- **[Heroicons](https://heroicons.com/)**: High-quality SVG icons.
- **[Axios](https://axios-http.com/)**: A promise-based HTTP client for API requests.
- **[Node.js](https://nodejs.org/)**: A JavaScript runtime for backend development.
- **[Express.js](https://expressjs.com/)**: A web framework for Node.js.
- **[MongoDB](https://www.mongodb.com/)**: A NoSQL database.
- **[Mongoose](https://mongoosejs.com/)**: ODM library for MongoDB.
- **[JWT](https://jwt.io/)**: JSON Web Tokens for authentication.
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)**: A library to hash passwords.
- **[Jest](https://jestjs.io/)**: A JavaScript testing framework.
- **[Supertest](https://github.com/visionmedia/supertest)**: HTTP assertions library for API testing.

## Installation

To get started with the **Net Worth Calculator** application, follow these steps to set up the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher) installed.
- [MongoDB](https://www.mongodb.com/) installed locally or accessible via a cloud provider like MongoDB Atlas.

### Setup Instructions

1. **Clone the Repository**

   Clone the repository from GitHub to your local machine:

   ```bash
   git clone https://github.com/Vishwa-0502/Personal_Money_Manager
   
2. **Install Backend Dependencies**
Navigate to the backend folder and install the necessary dependencies:
bash
Copy code
cd backend
npm install
Install Frontend Dependencies

Similarly, navigate to the frontend folder and install the frontend dependencies:

bash
Copy code
cd frontend
npm install
Configure Environment Variables

In the backend folder, create a .env file with the following content:

makefile
Copy code
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Replace your_mongodb_connection_string with your MongoDB URI (local or MongoDB Atlas) and your_jwt_secret with a secret key for JWT encoding and decoding.

Run the Application

To start the backend and frontend servers:

bash
Copy code
# Start backend server
cd backend
npm run dev

# Start frontend server
cd ../frontend
npm run dev
The backend will run at http://localhost:5000, and the frontend will run at http://localhost:3000.

API Reference
Authentication
POST /api/auth/register: Register a new user.

Request Body:

json
Copy code
{
  "name": "string",
  "email": "string",
  "password": "string"
}
POST /api/auth/login: Authenticate a user and obtain a JWT token.

Request Body:

json
Copy code
{
  "email": "string",
  "password": "string"
}
User Profile
GET /api/user/profile: Retrieve user profile data.
Net Worth Calculation
POST /api/networth: Submit assets and liabilities to calculate net worth.

Request Body:

json
Copy code
{
  "assets": {
    "savings": 10000,
    "investments": 5000
  },
  "liabilities": {
    "loan": 2000,
    "credit_card": 1000
  }
}
GET /api/networth: Retrieve the calculated net worth.

Response:

json
Copy code
{
  "netWorth": 12000
} 

**Usage**
Frontend
Once the app is up and running locally, you can use the following features:
User Registration: Go to /register and provide your details to create a new account.
User Login: Go to /login, enter your credentials, and authenticate.
Net Worth Calculation: After logging in, go to /networth, enter your financial data (assets and liabilities), and calculate your net worth.
Example API Requests
You can use tools like Postman or cURL to interact with the API endpoints.

**Register User**
bash
Copy code
curl -X POST http://localhost:5000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}'

**Login User**
bash
Copy code
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'

**Calculate Net Worth**
bash
Copy code
curl -X POST http://localhost:5000/api/networth \
-H "Authorization: Bearer <your_jwt_token>" \
-H "Content-Type: application/json" \
-d '{
  "assets": {
    "savings": 10000,
    "investments": 5000
  },
  "liabilities": {
    "loan": 2000,
    "credit_card": 1000
  }
}'

**Testing**
Backend Testing
Run backend tests using Jest and Supertest:
bash
Copy code
cd backend
npm run test
License
This project is licensed under the MIT License - see the LICENSE file for details.

**Acknowledgements**
React: A JavaScript library for building user interfaces.
Vite: A fast development build tool.
Tailwind CSS: A utility-first CSS framework.
Chart.js: A simple yet flexible JavaScript charting library.
MongoDB: A NoSQL database.
Node.js & Express.js: Backend technologies for creating APIs.
Jest & Supertest: For testing the backend APIs.
JWT & bcryptjs: For secure authentication and password handling.

