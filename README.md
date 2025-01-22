# Taskly

## Overview

The Taskly is a web application designed to help users efficiently organize and manage their tasks. It supports full CRUD operations (Create, Read, Update, Delete).

The application is built with a **MERN** stack.

- **Frontend:** React.js for a responsive and user-friendly UI.
- **Backend:** Node.js and Express.js for API and business logic.
- **Database:** MongoDB for scalable and flexible data storage.

### Key Features

- **Create Task:** Add new tasks with a title and description.
- **View Task:** Display a list of all tasks, with options to view individual task details.
- **Update Task:** Modify task information, including title, description, and status.
- **Delete Task:** Remove tasks from the system when no longer needed.

## Getting Started

To run the project locally, follow these steps:

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone git@github.com:SaliniSundaran2002/Taskly.git
    ```
2. Navigate to the project directory:
    ```bash
    cd frontend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the `frontend` root directory:
    ```bash

    PORT=3000
    ```
5. Update the `vite.config.js` file:
    ```javascript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import dotenv from 'dotenv'

    dotenv.config()

    export default defineConfig({
      plugins: [react()],
      server: {
       port:process.env.PORT || 3000, 
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,""),
          },
        },
      },
    })
    ```
6. Start the project:
    ```bash
    npm run dev
    ```

### MongoDB Setup

1. Install and open MongoDB Compass.
2. Create a new connection to your local MongoDB server or an Atlas cluster.

### Backend Setup

1. Navigate to the project directory:
    ```bash
    cd backend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the project:
    ```bash
    npm start

4. Create a `.env` file in the `backend` root directory:
    ```bash

    PORT=5000
    ```
5. Start the project:
    ```bash
    npm run dev
    ```
    
