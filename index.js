import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import productRoutes from "./src/routes/product.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;
app.use(cors());
app.use(express.json());

app.use("/api/v1/products", productRoutes);

sequelize.authenticate().then(() => {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
