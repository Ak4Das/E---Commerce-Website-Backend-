import {
  fetchAllItems,
  postNewItem,
  fetchItemByIdAndUpdate,
  updateItems,
  deleteMany,
  fetchItemByIdAndDelete,
} from "../controllers/CreateOrder.controller.js"

import express from "express"
const app = express()
app.use(express.json())

app.get("/", fetchAllItems)

app.post("/saveItem", postNewItem)

app.post("/update/:id", fetchItemByIdAndUpdate)

app.post("/updateItems", updateItems)

app.delete("/deleteMany", deleteMany)

app.delete("/delete/:id", fetchItemByIdAndDelete)

export default app
