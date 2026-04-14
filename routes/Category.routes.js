import { putAllCategories } from "../controllers/Category.controller.js";

import express from "express"
const app = express()
app.use(express.json())

app.put("/seedCategories", putAllCategories)

export default app