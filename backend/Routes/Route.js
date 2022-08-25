const express = require("express");
const products = require("../Data");
const Order = require("../Schema/OrderSchema");
const Product = require("../Schema/ProductSchema");
const Method = express.Router();
///////////////////////////////////

///////////////////////    Inserting Data to DB   /////////////////////////////
Method.post("/insert", async (req, res) => {
  const data = await Product.insertMany(products);
  res.status(200).send(data);
});
///////////////////////////////   Getting All Products from DB /////////////////////////
Method.get("/getproducts", async (req, res) => {
  const getproducts = await Product.find();
  res.status(200).send(getproducts);
});



///////////////////////   Getting a specific Slug Product   //////////////////////////
Method.get("/getproduct/:slug", async (req, res) => {
  const getproduct = await Product.findOne({ slug: req.params.slug });
  res.status(200).send(getproduct);
});







///////////////////////   Saving Orders to DB   ///////////////////////
Method.post("/saveOrder", async (req, res) => {
  try {
    
    ///////////////////////////////////
    const savedOrder = new Order({
      orderItems: req.body.OrderItems.map((m) => ({ ...m, product: m._id })),
      user: req.body.user_id,
    });
    const Done = await savedOrder.save();
    res.status(200).send(Done);
  } catch (error) {
    res.status(500).send(error);
  }
});

///////////////    Gettting order History   ////////////////////
Method.get("/totalOrder/:id", async (req, res) => {
  const data = await Order.find({ user: req.params.id });
  const lessData = data.map((m) => {
    return { data: m.orderItems, date: m.createdAt };
  });

  const moreData = lessData.map((m) => {
    return m;
  });

  res.status(200).send(moreData);
});

module.exports = Method;
