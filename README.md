User Management

Description:
This project is a React-based web application for managing user data. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a user database. The frontend is built using React, Redux, and Redux Saga for state management and asynchronous API calls.

Features:

- Display a list of users in a table format
- Add a new user using a form
- Edit an existing user's details using a form
- Delete a user by clicking a delete button in the table
- Search functionality to filter users based on criteria (e.g., name, username, email)
- Error handling and validation on the frontend
- Optional: Pagination, sorting of user records

Installation:

1. Clone the repository: git clone <repository_url>
2. Navigate to the project directory: cd user-management
3. Install dependencies: npm install

Usage:

1. Start the development server: npm start
2. Open your web browser and navigate to http://localhost:3000 to view the application.

API Endpoints:

- GET: https://jsonplaceholder.typicode.com/users (Retrieve all users)
- POST: https://jsonplaceholder.typicode.com/users (Create a new user)
- PATCH: https://jsonplaceholder.typicode.com/users/:id (Update an existing user)
- DELETE: https://jsonplaceholder.typicode.com/users/:id (Delete a user)

Note: The provided API endpoints are for testing purposes only and do not persist changes.

Folder Structure:

- /src: Contains the source code of the frontend application.
  - /actions: Redux action creators.
  - /components: React components.
  - /constants: Action type constants and API endpoints.
  - /reducers: Redux reducers.
  - /sagas: Redux Saga middleware.
  - /services: API service functions.
  - /styles: CSS stylesheets.
  - /utils: Utility functions.
  - App.js: Root component of the application.
  - index.js: Entry point of the application.

Author:
Omkar Khade
