import {
  putAllCloths,
  fetchAllCloths,
  fetchClothsById,
  fetchClothsByCategory,
  fetchClothsByRating,
  fetchClothsByCategoryAndRating,
  fetchClothsByGender,
  fetchClothsByMainCategory,
  fetchClothsByMaterial,
  fetchClothsByFreeDelivery,
  fetchClothsByNewArrival,
  postNewCloth,
  postMultipleCloths,
  fetchByIdAndUpdate,
  fetchByIdAndDelete,
} from "../controllers/Cloth.controller.js"

import express from "express"
const app = express()
app.use(express.json())

app.get("/", fetchAllCloths)

app.get("/:id", fetchClothsById)

app.get("/category/:category", fetchClothsByCategory)

app.get("/rating/:rating", fetchClothsByRating)

app.get("/category&rating/:category/:rating", fetchClothsByCategoryAndRating)

app.get("/gender/:gender", fetchClothsByGender)

app.get("/mainCategory/:mainCategory", fetchClothsByMainCategory)

app.get("/material/:material", fetchClothsByMaterial)

app.get("/freeDelivery/:freeDelivery", fetchClothsByFreeDelivery)

app.get("/newArrival/:newArrival", fetchClothsByNewArrival)

app.put("/seedCloths", putAllCloths)

app.post("/saveCloth", postNewCloth)

app.post("/saveMultipleCloths", postMultipleCloths)

app.patch("/update/:id", fetchByIdAndUpdate)

app.delete("/delete/:id", fetchByIdAndDelete)

export default app
