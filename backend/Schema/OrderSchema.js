const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        slug: { type: String, required: true },
        Name: { type: String, required: true },
        quantity: { type: Number, required: true },
        img: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'user',
      required:true,
    }
  },
  {
    timestamps: true,
  }
);

const Order = new mongoose.model('Order' , OrderSchema)
module.exports = Order;