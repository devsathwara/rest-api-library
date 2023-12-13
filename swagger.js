// Node.js v18.13.0
const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: "Rest-Api-Library",
        description: "This API enables users to efficiently manage books in a library. Users can perform operations such as adding, editing, deleting, and searching for books. It simulates a simplified version of a library management system, providing a real-world-like experience for building and working with APIs using Node.js, Express.js, Knex.js, and MySQL."
    },
    host: 'localhost:8080'
};
const outputFile = './swagger-output.json';
const router=['./routes/authRoutes.js','./routes/bookRoutes.js']

swaggerAutogen(outputFile,router, doc);
