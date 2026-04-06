import mongoose from "mongoose"

const CreateOrderSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    url: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    discount: {
      type: String,
    },
    offer: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "unisex"],
    },
    description: [
      {
        type: String,
      },
    ],
    similarProducts: [
      {
        id: {
          type: Number,
        },
      },
    ],
    soldBy: {
      type: String,
    },
    shipsFrom: {
      type: String,
    },
    category: {
      type: String,
    },
    commonCategory: {
      type: String,
    },
    mainCategory: [
      {
        type: String,
      },
    ],
    material: {
      type: String,
    },
    deliveryCharge: {
      type: Number,
    },
    freeDelivery: {
      type: Boolean,
    },
    newArrival: {
      type: Boolean,
    },
    addToCart: {
      type: Boolean,
      enum: [true, false],
    },
    addToWishList: {
      type: Boolean,
    },
    size: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    productDetails: {
      topHighlights: {
        type: mongoose.Schema.Types.Mixed,
      },
      additionalInformation: {
        type: mongoose.Schema.Types.Mixed,
      },
      itemDetails: {
        type: mongoose.Schema.Types.Mixed,
      },
      style: {
        type: mongoose.Schema.Types.Mixed,
      },
    },
  },
  {
    timestamps: true,
  },
)

const CreateOrder = mongoose.model("CreateOrder", CreateOrderSchema)

export default CreateOrder
