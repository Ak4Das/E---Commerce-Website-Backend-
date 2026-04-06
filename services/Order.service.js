import OrderModel from "../models/Order.model.js"

export const getAllOrders = async () => {
  try {
    const allOrders = await OrderModel.find()
    return allOrders
  } catch (error) {
    throw error
  }
}

export const saveNewOrder = async (newOrder) => {
  try {
    const NewOrder = new OrderModel(newOrder)
    await NewOrder.save()
    return NewOrder
  } catch (error) {
    throw error
  }
}

export const findOrderByIdAndUpdate = async (id, dataToUpdate) => {
  try {
    const order = await OrderModel.findOneAndUpdate({ id: id }, dataToUpdate, {
      new: true,
    })
    return order
  } catch (error) {
    throw error
  }
}

export const findOrderByIdAndPushProductInItem = async (id, dataToUpdate) => {
  try {
    const order = await OrderModel.findOneAndUpdate(
      { id: id },
      {
        $push: { item: dataToUpdate },
      },
      {
        new: true,
      },
    )
    return order
  } catch (error) {
    throw error
  }
}

export const findOrderByIdAndRemoveProductFromItem = async (id, itemId) => {
  try {
    const order = await OrderModel.findOneAndUpdate(
      { id: id },
      {
        $pull: {
          item: { id: itemId },
        },
      },
      {
        new: true,
      },
    )
    return order
  } catch (error) {
    throw error
  }
}

export const findOrderByIdAndDelete = async (id) => {
  try {
    const order = await OrderModel.findOneAndDelete({ id: id })
    return order
  } catch (error) {
    throw error
  }
}
