import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db-config.js";
import productRoutes  from "./src/routes/product.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/docs/swagger.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;
app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
