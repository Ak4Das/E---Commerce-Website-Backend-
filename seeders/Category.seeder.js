import fs from "fs"
import path from "path";

const filePath = path.join(process.cwd(), "data", "categories.json");
export const categoriesData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

import CategoryModel from "../models/Category.model.js"

async function SeedCategories() {
  try {
    await CategoryModel.deleteMany({})
    const result = await CategoryModel.insertMany(categoriesData)
    return result
  } catch (error) {
    console.log("Failed to add data in Database", error)
  }
}

export default SeedCategories