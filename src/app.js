import express from "express";
import db from "./database/sqlite.js";
const app = express();


app.use(express.json());


import userController from "./controllers/usuarioC.js";
userController(app, db);

import productController from "./controllers/produtoC.js";
productController(app, db);

export default app;
