import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema(
  {
    address: {
      area: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      fullName: {
        type: String,
        required: true,
      },
      id: {
        type: Number,
        required: true,
      },
      localInfo: {
        type: String,
        required: true,
      },
      mobNo: {
        type: String,
        required: true,
      },
      pinCode: {
        type: String,
        required: true,
      },
      selected: {
        type: Boolean,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
    },
    deliveryCharge: {
      type: Number,
      required: true,
    },
    deliveryDate: {
      type: String,
      required: true,
    },
    deliveryDay: {
      type: String,
      required: true,
    },
    freeDelivery: {
      type: String,
    },
    id: {
      type: Number,
      required: true,
    },
    item: [
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
        quantity: {
          type: Number,
        },
        size: {
          type: String,
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
    orderDate: {
      type: String,
      required: true,
    },
    orderTime: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    sale: {
      type: String,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const Order = mongoose.model("Order", OrderSchema)

export default Order
