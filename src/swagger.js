const swaggerJSDoc = require('swagger-jsdoc');
const { applyTimestamps } = require('./models/category.model');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Category API',
            version: '1.0.0',
            description: 'API documentation for Category management',
        },
        servers: [
            {
                url: 'http://localhost:5000',   
            }
        ]
    },
    apis: ["./src/routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;