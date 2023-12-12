// Node.js v18.13.0
const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: "Rest-Api-Library",
        description: ""
    },
    host: 'localhost:8080'
};
const outputFile = './swagger-output.json';
const router=['./routes/authRoutes.js','./routes/bookRoutes.js']

swaggerAutogen(outputFile,router, doc);
