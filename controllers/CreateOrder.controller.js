import {
  getAllItems,
  saveNewItem,
  findItemByIdAndUpdate,
  updateItemsInCreateOrder,
  deleteManyItems,
  findItemByIdAndDelete,
} from "../services/CreateOrder.service.js"

export const fetchAllItems = async (req, res) => {
  try {
    const allItems = await getAllItems()
    res.status(200)
    res.json(allItems)
  } catch (error) {
    throw error
  }
}

export const postNewItem = async (req, res) => {
  try {
    const savedItem = await saveNewItem(req.body)
    res.status(200)
    res.json(savedItem)
  } catch (error) {
    throw error
  }
}

export const fetchItemByIdAndUpdate = async (req, res) => {
  try {
    const updatedItem = await findItemByIdAndUpdate(req.params.id, req.body)
    res.status(200)
    res.json(updatedItem)
  } catch (error) {
    throw error
  }
}

export const updateItems = async (req, res) => {
  try {
    const updatedItems = await updateItemsInCreateOrder(req.body)
    res.status(200)
    res.json(updatedItems)
  } catch (error) {
    throw error
  }
}

export const deleteMany = async (req, res) => {
  try {
    const data = await deleteManyItems()
    res.status(200)
    res.json(data)
  } catch (error) {
    throw error
  }
}

export const fetchItemByIdAndDelete = async (req, res) => {
  try {
    const deletedItem = await findItemByIdAndDelete(req.params.id)
    res.status(200)
    res.json(deletedItem)
  } catch (error) {
    throw error
  }
}
