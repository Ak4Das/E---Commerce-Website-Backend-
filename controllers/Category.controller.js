import SeedCategories from "../seeders/Category.seeder.js"

export const putAllCategories = async (req, res) => {
  try {
    const result = await SeedCategories()
    res.status(200)
    res.json(result)
  } catch (error) {
    throw error
  }
}
