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

app.patch("/update/:id", fetchItemByIdAndUpdate)

app.put("/updateItems", updateItems)

app.delete("/deleteMany", deleteMany)

app.delete("/delete/:id", fetchItemByIdAndDelete)

export default app
