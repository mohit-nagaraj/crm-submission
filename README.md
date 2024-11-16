# CRM Submission

Video Demo https://www.loom.com/share/ccb1b75656a641a3b251a790c53860a7?sid=0ed5d318-7636-4c1c-8088-d3342516dbf5

## Project Description

CRM Submission is a web application designed to manage customer relationships. It allows users to create, read, update, and delete contact information. The project is built using a React frontend, Node.js/Express backend, and MongoDB for the database.

## Major Technical Decisions

- **Frontend**: React with Material-UI (MUI) for a modern and responsive user interface.
- **Backend**: Node.js with Express for a robust and scalable server.
- **Database**: MongoDB for its flexibility and scalability in handling unstructured data.

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- MongoDB instance running

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/mohit-nagaraj/crm-submission.git
    cd crm-submission
    ```

2. **Backend Setup**:
    - Navigate to the backend directory:
        ```sh
        cd backend
        ```
    - Install dependencies:
        ```sh
        npm install
        ```
    - Create a `.env` file in the `backend` directory and add your MongoDB URI and port number:
        ```env
        MONGODB_URI=mongodb://localhost:27017/crm-submission
        PORT=3000
        ```
    - Start the backend server:
        ```sh
        npm run dev
        ```

3. **Frontend Setup**:
    - Navigate to the frontend directory:
        ```sh
        cd ../frontend
        ```
    - Install dependencies:
        ```sh
        npm install
        ```
    - Start the frontend application:
        ```sh
        npm run dev
        ```

### Database Schema Script

The database schema is defined in the `Contact` model located at backend\model\Contact.js . Here is a description of the schema:

- **firstName**: A required string field representing the contact's first name.
- **lastName**: A required string field representing the contact's last name.
- **email**: A required string field representing the contact's email address. It must be unique and match a valid email format.
- **phoneNumber**: A required string field representing the contact's phone number. It must be unique.
- **company**: A required string field representing the contact's company.
- **jobTitle**: A required string field representing the contact's job title.

## Database Choice
I chose MongoDB for this project because it is a NoSQL database that provides flexibility in handling unstructured data. MongoDB's schema-less nature allows for easy modifications to the data model as the project evolves. Additionally, its scalability and performance make it a suitable choice for applications that require handling large volumes of data.

### Challenge: Customizing Material-UI Components
Solution: I spent time understanding MUI's theming system and used its utilities to customize components to match the design requirements. Honestly, its a huge load on the dev side compared to other libraries.

### Challenge: Handling Duplicate Entries and Validation
Solution: I added validation checks in the Mongoose schema for email format and uniqueness. In the backend, I handled validation errors and duplicate key errors to provide meaningful error messages to the user.


## How Each Part of the App Works
- Frontend: The React application uses Material-UI for the user interface. It includes components like ContactTable for displaying contacts and forms for adding/editing contacts.
- Backend: The Node.js/Express server handles API requests for CRUD operations on contacts. It connects to a MongoDB database to store and retrieve contact information.
- Database: MongoDB stores contact information with fields for first name, last name, email, phone number, company, and job title. Unique constraints are applied to email and phone number to prevent duplicates.
