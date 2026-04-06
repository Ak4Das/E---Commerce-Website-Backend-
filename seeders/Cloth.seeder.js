import fs from "fs"
const clothsDataString = fs.readFileSync("./data/cloths.json", "utf-8")
export const clothsData = JSON.parse(clothsDataString)

import ClothModel from "../models/Cloth.model.js"

async function SeedCloths() {
  try {
    for (const cloth of clothsData) {
      const newCloth = new ClothModel(cloth)
      await newCloth.save()
    }
  } catch (error) {
    console.log("Failed to add data in Database", error)
  }
}

export default SeedCloths
