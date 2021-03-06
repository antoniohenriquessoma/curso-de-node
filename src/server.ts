import "reflect-metadata"
import express = require("express");
import swaggerUri from "swagger-ui-express";
import "./database";

import { router } from "./routes";
import swaggerFile from "./swagger.json"



const app = express();
app.use(express.json())

app.use("/api-docs", swaggerUri.serve, swaggerUri.setup(swaggerFile))

app.use(router)
app.listen(3333, () => console.log("Server is running!"))