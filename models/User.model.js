import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    addToCartItems: [
      {
        id: {
          type: Number,
        },
        quantity: {
          type: Number,
        },
        size: {
          type: String,
        },
      },
    ],
    addToWishlistItems: [
      {
        id: {
          type: Number,
        },
      },
    ],
    address: [
      {
        area: {
          type: String,
        },
        city: {
          type: String,
        },
        country: {
          type: String,
        },
        fullName: {
          type: String,
        },
        id: {
          type: Number,
        },
        localInfo: {
          type: String,
        },
        mobNo: {
          type: String,
        },
        pinCode: {
          type: String,
        },
        selected: {
          type: Boolean,
        },
        state: {
          type: String,
        },
      },
    ],
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

const User = mongoose.model("User", UserSchema)

export default User
