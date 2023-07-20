
<h1 align="center">GraphQL SimpleExample</h1>

 <div align="center">
      <img width="200" alt="GraphQL Logo" src="https://github.com/MatheusWAlvarenga/graphQL-SimpleExample/assets/94935750/2f8c6fec-4167-49b2-8db4-e08fc9c79249">

</div>!




This is a simple example project demonstrating the use of GraphQL in a full-stack application with both frontend and backend components. The project showcases how to build a basic application using GraphQL to query and mutate data.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Backend](#backend)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Introduction

GraphQL SimpleExample is a sample application that demonstrates the power and flexibility of GraphQL. It consists of a frontend and a backend that communicate using GraphQL queries and mutations. The frontend is built with [React](https://reactjs.org/), and the backend is built using [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/).

## Features

- Fetch and display data from the backend using GraphQL queries.
- Perform data mutations with GraphQL mutations.
- Simple and intuitive user interface.

## Technologies

- Frontend:

  - React
  - Apollo Client (for GraphQL integration)
  - HTML
  - CSS

- Backend:
  - Node.js
  - Express
  - GraphQL
  - MongoDB (or any other database of your choice)

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/MatheusWAlvarenga/GraphQL-SimpleExample.git
cd GraphQL-SimpleExample
```

2. Install the dependencies for both the frontend and backend:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Setup the database:

   - For MongoDB, make sure you have it installed and running locally or provide a connection string to a MongoDB instance in the backend's configuration.

4. Configure the environment variables:

   - Create a `.env` file in the `backend` directory and set the necessary environment variables, such as the database connection string.

5. Build the frontend:

```bash
cd frontend
npm run build
```

## Usage

To start the application, follow these steps:

1. Run the backend server:

```bash
cd backend
npm start
```

2. Open a new terminal, navigate to the `frontend` directory, and start the frontend development server:

```bash
cd frontend
npm start
```

Visit `http://localhost:3000` in your web browser to see the application in action.

## Backend

The backend of this project uses GraphQL to serve data to the frontend. It defines a schema that describes the data types and operations that the frontend can query and mutate.

The backend follows the architecture pattern (e.g., MVC) and organizes the codebase into different folders for scalability.

## Frontend

The frontend of this project is built with React and utilizes Apollo Client to manage GraphQL queries and mutations. It is organized into components and containers to maintain a clean and maintainable codebase.

## Contributing

Contributions are welcome! If you find any issues or have ideas to improve the project, please feel free to open an issue or create a pull request.

When contributing, please follow the existing coding style, commit message conventions, and create a detailed pull request description.

## License

This project is licensed under the [MIT License](LICENSE).

---

We hope you enjoy using GraphQL SimpleExample! If you have any questions or feedback, please don't hesitate to reach out. Happy coding!
