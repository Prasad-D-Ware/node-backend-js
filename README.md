# Node.js Backend Template

A robust Node.js backend template with Express.js, MongoDB, and JWT authentication.

## Features

- Express.js server setup
- MongoDB integration with Mongoose
- JWT-based authentication
- User registration and login
- Protected routes
- Environment variables configuration
- CORS enabled
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd node-backend-js
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in the required environment variables:
     ```
     PORT=3000
     MONGODB_URL=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication Routes
- **POST /auth/signup**
  - Register a new user
  - Body: `{ "name": "string", "email": "string", "password": "string" }`

- **POST /auth/login**
  - Login user
  - Body: `{ "email": "string", "password": "string" }`

### User Routes (Protected)
- **POST /user/getuser**
  - Get authenticated user details
  - Requires Authorization header with JWT token

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid JWT token in the Authorization header:

```
Authorization: <your_jwt_token>
```

## Project Structure

```
src/
├── controllers/
│   └── user/
│       └── user.controller.js
├── db/
│   ├── connect.js
│   └── models/
│       └── user.model.js
├── middlewares/
│   └── auth.middleware.js
├── routers/
│   ├── auth.router.js
│   └── user.router.js
└── index.js
```

## Error Handling

The API returns consistent error responses in the following format:
```json
{
  "success": false,
  "message": "Error message description"
}
```

## Success Responses

Successful responses follow this format:
```json
{
  "success": true,
  "message": "Success message",
  "data": {} // Optional data object
}
```

## Dependencies

- express - Web framework
- mongoose - MongoDB ODM
- jsonwebtoken - JWT implementation
- bcryptjs - Password hashing
- cors - CORS middleware
- dotenv - Environment variables
- uuid - Unique ID generation

## Development Dependencies

- nodemon - Development server with hot reload

## License

ISC
