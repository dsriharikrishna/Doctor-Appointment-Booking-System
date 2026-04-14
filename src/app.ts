import express from "express";
import cors from "cors";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import { swaggerDocs } from "./config/swagger";

const app = express();

app.use(cors());
app.use(express.json());

// Swagger Documentation
swaggerDocs(app);

// API Routes
app.use("/api", routes);

// Global Error Handler
app.use(errorHandler);

export default app;
