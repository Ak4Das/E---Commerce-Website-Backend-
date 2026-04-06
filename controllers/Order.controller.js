import {
  getAllOrders,
  saveNewOrder,
  findOrderByIdAndUpdate,
  findOrderByIdAndPushProductInItem,
  findOrderByIdAndRemoveProductFromItem,
  findOrderByIdAndDelete,
} from "../services/Order.service.js"

export const fetchAllOrders = async (req, res) => {
  try {
    const allOrders = await getAllOrders()
    res.status(200)
    res.json(allOrders)
  } catch (error) {
    throw error
  }
}

export const postNewOrder = async (req, res) => {
  try {
    const savedOrder = await saveNewOrder(req.body)
    res.status(200)
    res.json(savedOrder)
  } catch (error) {
    throw error
  }
}

export const fetchOrderByIdAndUpdate = async (req, res) => {
  try {
    const updatedOrder = await findOrderByIdAndUpdate(req.params.id, req.body)
    res.status(200)
    res.json(updatedOrder)
  } catch (error) {
    throw error
  }
}

export const fetchOrderByIdAndPushProductInItem = async (req, res) => {
  try {
    const updatedOrder = await findOrderByIdAndPushProductInItem(
      req.params.id,
      req.body,
    )
    res.status(200)
    res.json(updatedOrder)
  } catch (error) {
    throw error
  }
}

export const fetchOrderByIdAndRemoveProductFromItem = async (req, res) => {
  try {
    const updatedOrder = await findOrderByIdAndRemoveProductFromItem(
      req.params.id,
      req.body.id,
    )
    res.status(200)
    res.json(updatedOrder)
  } catch (error) {
    throw error
  }
}

export const fetchOrderByIdAndDelete = async (req, res) => {
  try {
    const deletedOrder = await findOrderByIdAndDelete(req.params.id)
    res.status(200)
    res.json(deletedOrder)
  } catch (error) {
    throw error
  }
}
