const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/swagger');
const app = express();
require("dotenv").config();

const connectDB = require('./src/config/db.config');
const categoryRoutes = require("./src/routes/category.routes");
const userRoutes = require("./src/routes/user.routes");

app.use(express.json());
app.use("/uploads", express.static("uploads"));

connectDB();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1',userRoutes);

app.get('/api/v1/hehe', (req, res) => {
  res.send("woowoowooo hommeeee");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
