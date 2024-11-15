# Backend for CRM Submission

This is the backend service for the CRM Submission project. It is built using Node.js, Express, and MongoDB.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed Node.js and npm.
- You have a MongoDB instance running and accessible.

## Installation
1. Navigate to the backend directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI and port number:
    ```env
    MONGODB_URI=mongodb://localhost:27017/your-database-name
    PORT=3000
    ```

## Running the Server

To start the server in development mode, run:
```sh
npm run dev
```

The server will start on the port specified in the .env file (default is 3000).

API Endpoints
The API endpoints are documented in Postman. You can find the collection here https://www.postman.com/spacecraft-astronomer-56970938/workspace/my-proj/collection/29989847-b0683cc5-1c3d-4ee5-932e-39c5f3f2afa2?action=share&creator=29989847.

## Project Structure
```
backend/
├── config/
│   └── dbConfig.js
├── controllers/
│   └── contact/
│       ├── contactModify.js
│       └── contactQuery.js
├── logs/
│   ├── combined.log
│   ├── error.log
│   └── info.md
├── model/
│   └── Contact.js
├── routes/
│   └── contactRoutes.js
├── utils/
│   └── logger.js
├── .env
├── .env.example
├── index.js
├── package.json
└── README.md
```

## License
This project is licensed under the Apache License 2.0. See the LICENSE file for details.