# Nerdspace Backend

Nerdspace Backend is the server-side component of the Nerdspace project, built with Node.js, Express, and MongoDB. It follows the MVC (Model-View-Controller) architecture and provides APIs for handling authentication, authorization, data storage, and other backend functionalities.

## Features

- **Database**: MongoDB is used as the database system for storing data.
- **Authentication**: JSON Web Tokens (JWT) are utilized for user authentication.
- **Authorization**: Protected routes middleware is implemented for restricting access to authorized users only.
- **MVC Architecture**: The codebase is organized into model, view, and controller folders for better separation of concerns.
- **File Uploads**: File uploads are supported using the Multer middleware.
- **Password Hashing**: User passwords are hashed and salted using bcrypt.
- **ORM**: Mongoose is used as the Object-Relational Mapping (ORM) tool for MongoDB.
- **Middleware**: Various middleware functions are implemented for handling CORS, body parsing, and other tasks.

## Dependencies

The Nerdspace Backend relies on the following dependencies:

- **bcrypt**: A library for hashing passwords.
- **body-parser**: Middleware for parsing incoming request bodies.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **dotenv**: Zero-dependency module that loads environment variables from a `.env` file.
- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **formidable**: A Node.js module for parsing form data, especially file uploads.
- **jsonwebtoken**: JSON Web Token implementation for Node.js.
- **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **multer**: Middleware for handling multipart/form-data, primarily used for file uploads.
- **passport**: Authentication middleware for Node.js.
