Certainly! If you have used Knex migrations to define the database schema, you can mention that in the README.md. Here's an updated version reflecting that:

```markdown
## 📚 Library Management System API

Welcome to the Library Management System API! This Node.js project allows you to manage your library's book collection with ease. Whether you're adding new books, editing details, or searching for specific titles, we've got you covered. Additionally, user authentication and registration are included for added security.

## 🚀 Features

## Authentication and Registration

- **User Login:**
  - Endpoint: `POST /login`
  - Allows users to log in with their credentials.
- **User Registration:**
  - Endpoint: `POST /register`
  - Enables users to register by providing necessary information.

## Basic CRUD Operations

1. **Add a New Book**
   - Endpoint: `POST /addbook`
   - Request body includes title, author, genre, and ISBN.

2. **Edit Existing Book**
   - Endpoint: `PUT /updatebook/:isbn`

3. **Delete a Book**
   - Endpoint: `DELETE /deletebook/:isbn`

4. **Search for Books**
   - Retrieve all books: `GET /allbook`
   - Retrieve a specific book by ISBN: `GET /book/:isbn`

## 🛠️ Dependencies

- `bcrypt`: Password hashing for enhanced security.
- `body-parser`: Middleware for parsing request bodies.
- `dotenv`: Load environment variables from a `.env` file.
- `express`: Web application framework for Node.js.
- `jsonwebtoken`: JSON Web Token generation and verification.
- `knex`: SQL query builder for Node.js.
- `mysql`: MySQL database driver.
- `swagger-ui-express`: Swagger UI integration for API documentation.

## ⚙️ Database Schema

The database schema is defined using Knex migrations. You can find the migration files in the `migrations` directory.

## 🚦 Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/library-management-api.git](https://github.com/devsathwara/rest-api-library.git
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run Migrations:**
   ```bash
   npm run migrate
   ```

4. **Set up the Database:**
   - Configure the MySQL connection in the `.env` file.

5. **Run the Project:**
   ```bash
   npm start
   ```

## 📖 API Documentation

Explore and test the API endpoints using Swagger UI at `http://localhost:your-port/api-docs` after running the project.

## 🧪 Testing

Use tools like Postman or testing libraries like Mocha and Chai to test the API endpoints.

## 🤝 Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
