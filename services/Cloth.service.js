import ClothModel from "../models/Cloth.model.js"

export const getAllCloths = async () => {
  try {
    const allCloths = await ClothModel.find()
    return allCloths
  } catch (error) {
    throw error
  }
}

export const getClothById = async (id) => {
  try {
    const cloth = await ClothModel.findOne({ id: id })
    return cloth
  } catch (error) {
    throw error
  }
}

export const getClothsByCategory = async (category) => {
  try {
    const cloths = await ClothModel.find({ commonCategory: category })
    return cloths
  } catch (error) {
    throw error
  }
}

export const getClothsByRating = async (rating) => {
  try {
    const cloths = await ClothModel.find({ rating: { $gte: rating } })
    return cloths
  } catch (error) {
    throw error
  }
}

export const getClothsByCategoryAndRating = async (category, rating) => {
  try {
    const cloths = await ClothModel.find({
      category: category,
      rating: { $gte: rating },
    })
    return cloths
  } catch (error) {
    throw error
  }
}

export const getClothsByGender = async (gender) => {
  try {
    const cloths = await ClothModel.find({ gender: gender })
    return cloths
  } catch (error) {
    throw error
  }
}

export const getClothsByMainCategory = async (mainCategory) => {
  try {
    const cloths = await ClothModel.find({ mainCategory: mainCategory })
    return cloths
  } catch (error) {
    throw error
  }
}

export const getClothsByMaterial = async (material) => {
  try {
    const cloths = await ClothModel.find({ material: material })
    return cloths
  } catch (error) {
    throw error
  }
}

export const getClothsByFreeDelivery = async (freeDelivery) => {
  try {
    const cloths = await ClothModel.find({ freeDelivery: freeDelivery })
    return cloths
  } catch (error) {
    throw error
  }
}

export const getClothsByNewArrival = async (newArrival) => {
  try {
    const cloths = await ClothModel.find({ newArrival: newArrival })
    return cloths
  } catch (error) {
    throw error
  }
}

export const saveNewCloth = async (newCloth) => {
  try {
    const NewCloth = new ClothModel(newCloth)
    await NewCloth.save()
    return NewCloth
  } catch (error) {
    throw error
  }
}

export const updateClothsData = async (clothsData) => {
  try {
    await ClothModel.deleteMany({})
    const result = await ClothModel.insertMany(clothsData)
    return result
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdate = async (id, dataToUpdate) => {
  try {
    const cloth = await ClothModel.findOneAndUpdate({ id: id }, dataToUpdate, {
      new: true,
    })
    return cloth
  } catch (error) {
    throw error
  }
}

export const findByIdAndDelete = async (id) => {
  try {
    const cloth = await ClothModel.findOneAndDelete({ id: id })
    return cloth
  } catch (error) {
    throw error
  }
}
