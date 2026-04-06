// Connect to Database
import ConnectToDatabase from "./db/db.connect.js"
ConnectToDatabase()

// EXPRESS SETUP
import express from "express"
const app = express()

// CORS CODE
import cors from "cors"
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())

// UPDATE CLOTHS DATA IN DATABASE
import ClothModel from "./models/Cloth.model.js"
import SeedCloths, { clothsData } from "./seeders/Cloth.seeder.js"
app.put("/seedCloths", async (req, res) => {
  try {
    const newData = clothsData
    await ClothModel.deleteMany({})
    const result = await ClothModel.insertMany(newData)
    // await SeedCloths()
    res.status(200)
    res.json(result)
  } catch (error) {
    throw error
  }
})

// UPDATE CATEGORIES DATA IN DATABASE
import CategoryModel from "./models/Category.model.js"
import SeedCategories, { categoriesData } from "./seeders/Category.seeder.js"
app.put("/seedCategories", async (req, res) => {
  try {
    const newData = categoriesData
    await CategoryModel.deleteMany({})
    const result = await CategoryModel.insertMany(newData)
    // await SeedCategories()
    res.status(200)
    res.json(result)
  } catch (error) {
    throw error
  }
})

// ROUTES
import ClothRoutes from "./routes/Cloth.routes.js"
app.use("/cloth", ClothRoutes)

import CreateOrderRoutes from "./routes/CreateOrder.routes.js"
app.use("/createOrder", CreateOrderRoutes)

import OrderRoutes from "./routes/Order.routes.js"
app.use("/order", OrderRoutes)

import UsersRoutes from "./routes/User.routes.js"
app.use("/user", UsersRoutes)

// START SERVER
app.listen(3000, () => {
  console.log("Server started at port : ", 3000)
})
