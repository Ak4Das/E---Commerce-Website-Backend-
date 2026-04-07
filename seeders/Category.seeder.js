import fs from "fs"
const categoriesDataString = fs.readFileSync("./data/categories.json").toString()
export const categoriesData = JSON.parse(categoriesDataString)

import CategoryModel from "../models/Category.model.js"

async function SeedCategories() {
  try {
    for (const category of categoriesData) {
      const newCategory = new CategoryModel(category)
      await newCategory.save()
    }
  } catch (error) {
    console.log("Failed to add data in Database", error)
  }
}

export default SeedCategories