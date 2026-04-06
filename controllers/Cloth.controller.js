import {
  getAllCloths,
  getClothById,
  getClothsByCategory,
  getClothsByRating,
  getClothsByCategoryAndRating,
  getClothsByGender,
  getClothsByMainCategory,
  getClothsByMaterial,
  getClothsByFreeDelivery,
  getClothsByNewArrival,
  saveNewCloth,
  updateClothsData,
  findByIdAndUpdate,
  findByIdAndDelete
} from "../services/Cloth.service.js"

export const fetchAllCloths = async (req, res) => {
  try {
    const allCloths = await getAllCloths()
    res.status(200)
    res.json(allCloths)
  } catch (error) {
    throw error
  }
}

export const fetchClothsById = async (req, res) => {
  try {
    const id = req.params.id
    const cloth = await getClothById(id)
    res.status(200)
    res.json(cloth)
  } catch (error) {
    throw error
  }
}

export const fetchClothsByCategory = async (req, res) => {
  try {
    const category = req.params.category
    const cloths = await getClothsByCategory(category)
    res.status(200)
    res.json(cloths)
  } catch (error) {
    throw error
  }
}

export const fetchClothsByRating = async (req, res) => {
  try {
    const rating = req.params.rating
    const cloths = await getClothsByRating(rating)
    res.status(200)
    res.json(cloths)
  } catch (error) {
    throw error
  }
}

export const fetchClothsByCategoryAndRating = async (req, res) => {
  try {
    const { category, rating } = req.params
    const cloths = await getClothsByCategoryAndRating(category, rating)
    res.status(200)
    res.json(cloths)
  } catch (error) {
    throw error
  }
}

export const fetchClothsByGender = async (req, res) => {
  try {
    const gender = req.params.gender
    const cloths = await getClothsByGender(gender)
    res.status(200)
    res.json(cloths)
  } catch (error) {
    throw error
  }
}

export const fetchClothsByMainCategory = async (req, res) => {
  try {
    const mainCategory = req.params.mainCategory
    const cloths = await getClothsByMainCategory(mainCategory)
    res.status(200)
    res.json(cloths)
  } catch (error) {
    throw error
  }
}

export const fetchClothsByMaterial = async (req, res) => {
  try {
    const material = req.params.material
    const cloths = await getClothsByMaterial(material)
    res.status(200)
    res.json(cloths)
  } catch (error) {
    throw error
  }
}

export const fetchClothsByFreeDelivery = async (req, res) => {
  try {
    const freeDelivery = req.params.freeDelivery
    const cloths = await getClothsByFreeDelivery(freeDelivery)
    res.status(200)
    res.json(cloths)
  } catch (error) {
    throw error
  }
}

export const fetchClothsByNewArrival = async (req, res) => {
  try {
    const newArrival = req.params.newArrival
    const cloths = await getClothsByNewArrival(newArrival)
    res.status(200)
    res.json(cloths)
  } catch (error) {
    throw error
  }
}

export const postNewCloth = async (req, res) => {
  try {
    const savedCloth = await saveNewCloth(req.body)
    res.status(200)
    res.json(savedCloth)
  } catch (error) {
    throw error
  }
}

export const updateCloths = async (req, res) => {
  try {
    const savedCloths = await updateClothsData(req.body)
    res.status(200)
    res.json(savedCloths)
  } catch (error) {
    throw error
  }
}

export const fetchByIdAndUpdate = async (req, res) => {
  try {
    const updatedCloth = await findByIdAndUpdate(req.params.id, req.body)
    res.status(200)
    res.json(updatedCloth)
  } catch (error) {
    throw error
  }
}

export const fetchByIdAndDelete = async (req, res) => {
  try {
    const deletedCloth = await findByIdAndDelete(req.params.id)
    res.status(200)
    res.json(deletedCloth)
  } catch (error) {
    throw error
  }
}
