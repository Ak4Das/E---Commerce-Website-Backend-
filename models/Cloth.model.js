import mongoose from "mongoose"

const ClothSchema = new mongoose.Schema(
  [
    {
      id: {
        type: Number,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true,
      },
      discount: {
        type: String,
        required: true,
      },
      offer: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        enum: ["male", "female", "unisex"],
        required: true,
      },
      description: [
        {
          type: String,
          required: true,
        },
      ],
      similarProducts: [
        {
          id: {
            type: Number,
            required: true,
          },
        },
      ],
      soldBy: {
        type: String,
        required: true,
      },
      shipsFrom: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      commonCategory: {
        type: String,
        required: true,
      },
      mainCategory: [
        {
          type: String,
          required: true,
        },
      ],
      material: {
        type: String,
        required: true,
      },
      deliveryCharge: {
        type: Number,
        required: true,
      },
      freeDelivery: {
        type: Boolean,
        required: true,
      },
      newArrival: {
        type: Boolean,
        required: true,
      },
      productDetails: {
        topHighlights: {
          type: mongoose.Schema.Types.Mixed,
          required: true,
        },
        additionalInformation: {
          type: mongoose.Schema.Types.Mixed,
          required: true,
        },
        itemDetails: {
          type: mongoose.Schema.Types.Mixed,
          required: true,
        },
        style: {
          type: mongoose.Schema.Types.Mixed,
          required: true,
        },
      },
    },
  ],
  {
    timestamps: true,
  },
)

const Cloth = mongoose.model("Cloth", ClothSchema)

export default Cloth
