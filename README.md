# Portfolio Project

This project is a personal portfolio website built with a React frontend (Tailwind CSS v4) and a Node.js/Express backend.

## Project Structure

The project is divided into two main directories:

- **client**: Contains the React frontend application.
- **server**: Contains the Node.js backend application.

### Backend (`/server`)

The backend follows the MVC pattern (Model, View, Controller), but uses mock data instead of a database.

- `server.js`: The entry point for the backend server.
- `src/config`: Configuration files.
- `src/controllers`: Logic for handling API requests (e.g., `projectController.js`).
- `src/models`: Mock data models (e.g., `Project.js`).
- `src/routes`: API route definitions.
- `src/utils`: Utility functions.

### Frontend (`/client`)

The frontend is a React application styled with Tailwind CSS v4.

- `vite.config.js`: Configuration for the Vite build tool.
- `src/assets`: Static assets like images and icons.
- `src/components`: Reusable UI components.
  - `common`: Generic components (buttons, inputs).
  - `layout`: Layout components (navbar, footer).
  - `sections`: Page sections (hero, about, projects).
- `src/pages`: Top-level page components.
- `src/services`: API service functions.
- `src/styles`: Global styles and Tailwind configuration.

## Getting Started

(Instructions to be added after implementation)
