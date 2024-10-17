# Inventory and Order Management System

This project is a backend system for managing user authentication, inventory management, and order processing. It is built using Node.js, Express, MongoDB, and JWT for authentication. It includes role-based access control for Admin and Customer roles.

## Features

- **User Authentication**: Register and login users using JWT tokens.
- **Role-Based Access Control**: Separate permissions for Admin and Customers.
- **Inventory Management**: Admins can create, update, delete, and view products.
- **Order Management**: Customers can place orders, and Admins can update order statuses.
- **Order Tracking**: Customers can view their order history, and Admins can view all orders.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing users, products, and orders.
- **Mongoose**: MongoDB ORM for defining schema and querying the database.
- **JWT**: JSON Web Token for user authentication.
- **bcrypt**: Password hashing library for secure storage of user passwords.
- **dotenv**: For managing environment variables.

## Setup Instructions

### Prerequisites

- Node.js (v16+)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vrajpatel0007/inventory-order-management.git
   cd inventory-order-management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following environment variables:

   ```env
   MONGODB_URL=<your-mongodb-connection-string>
   SECRET_key=your_jwt_secret
   PORT=8000
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will start running at `http://localhost:8000`.

### API Endpoints

#### User Routes

- **POST** `/user/register`: Register a new user.
- **POST** `/user/login`: Login a user.

#### Product Routes (Admin Only)

- **GET** `/product/getAllProducts`: Get all products.
- **POST** `/product/createProduct`: Create a new product.
- **PUT** `/product/updateProduct/:id`: Update an existing product.
- **DELETE** `/product/deleteProduct/:id`: Delete a product.

#### Order Routes

- **POST** `/order/placeOrder`: Place a new order (Customer).
- **GET** `/order/getOrder/:id`: Get details of a specific order (Customer/Admin).
- **PUT** `/order/:id/status`: Update the status of an order (Admin).
- **GET** `/order/getAllOrders`: Get all orders (Admin).

### Middleware

- **authUser**: Ensures that a valid JWT token is provided.
- **authorizeAdmin**: Ensures that the user has Admin privileges.
