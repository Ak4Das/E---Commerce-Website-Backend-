import {
  fetchAllUsers,
  fetchUserById,
  fetchUserByPassword,
  fetchUserByEmail,
  postNewUser,
  fetchByIdAndUpdate,
  fetchByIdAndUpdateAddress,
  fetchByIdAndUpdateCartItems,
  fetchByIdAndUpdateWishlistItems,
  fetchByIdAndDelete,
} from "../controllers/User.controller.js"

import express from "express"
const app = express()
app.use(express.json())

app.get("/", fetchAllUsers)

app.get("/:id", fetchUserById)

app.get("/password/:password", fetchUserByPassword)

app.get("/email/:email", fetchUserByEmail)

app.post("/saveUser", postNewUser)

app.post("/updateUser/:id", fetchByIdAndUpdate)

app.post("/updateUserAddress/:id", fetchByIdAndUpdateAddress)

app.post("/updateCartItems/:id", fetchByIdAndUpdateCartItems)

app.post("/updateWishlistItems/:id", fetchByIdAndUpdateWishlistItems)

app.delete("/deleteUser/:id", fetchByIdAndDelete)

export default app
