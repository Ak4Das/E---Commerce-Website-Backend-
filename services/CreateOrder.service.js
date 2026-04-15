import CreateOrderModel from "../models/CreateOrder.model.js"

export const getAllItems = async () => {
  try {
    const allItems = await CreateOrderModel.find()
    return allItems
  } catch (error) {
    throw error
  }
}

export const saveNewItem = async (newItem) => {
  try {
    const NewItem = new CreateOrderModel(newItem)
    await NewItem.save()
    return NewItem
  } catch (error) {
    throw error
  }
}

export const findItemByIdAndUpdate = async (id, dataToUpdate) => {
  try {
    const item = await CreateOrderModel.findOneAndUpdate(
      { id: id },
      dataToUpdate,
      {
        new: true,
      },
    )
    return item
  } catch (error) {
    throw error
  }
}

export const updateItemsInCreateOrder = async (itemsData) => {
  try {
    await CreateOrderModel.deleteMany({})
    const cleanedData = itemsData.map((item) => {
      const { _id, ...rest } = item
      return rest
    })
    const uniqueData = cleanedData.reduce((acc, item) => {
      if (!acc.length) {
        acc.push(item)
      } else {
        const searchInAcc = acc.find((obj) => obj.id === item.id) ? true : false
        if (!searchInAcc) {
          acc.push(item)
        }
      }
      return acc
    }, [])
    const result = await CreateOrderModel.insertMany(uniqueData)
    return result
  } catch (error) {
    throw error
  }
}

export const deleteManyItems = async () => {
  try {
    const deleteData = await CreateOrderModel.deleteMany({})
    return deleteData
  } catch (error) {
    throw error
  }
}

export const findItemByIdAndDelete = async (id) => {
  try {
    const item = await CreateOrderModel.findOneAndDelete({ id: id })
    return item
  } catch (error) {
    throw error
  }
}
