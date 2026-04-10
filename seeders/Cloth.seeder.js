import fs from "fs"
import path from "path";

const filePath = path.join(process.cwd(), "data", "cloths.json");
export const clothsData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

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
