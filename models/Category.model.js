import mongoose from "mongoose"

const CategorySchema = new mongoose.Schema(
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
    for: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const Category = mongoose.model("Category", CategorySchema)

export default Category
