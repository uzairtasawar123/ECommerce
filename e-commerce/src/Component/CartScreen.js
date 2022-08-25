import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addQuantity,
  deleteItem,
  minusQuantity,
} from "../Redux/Reducer/OrderSlice";
import { Rotate, Slide } from "react-reveal";
import Tada from "react-reveal/Tada";
import baseURL from "../BaseUrl";
import Fade from 'react-reveal/Fade'
import { toast } from "react-toastify";

const CartScreen = () => {
  ///////////////////////////////////////////////////////////
  const CartProducts = useSelector((state) => state.order);
  const User = useSelector((state)=> state.user)
  /////////////////////////////////////////////////////////
  const Navigate = useNavigate()
  //   console.warn("CART HISTORY", CartProducts);
  const dispatch = useDispatch();
  /////////////////////////////////////
  const MinusQuantity = (item) => {
    const finalObj = { ...item, quantity: item.quantity - 1 };
    dispatch(minusQuantity(finalObj));
  };
  ///////////////////////////////////////
  const AddQuantity = (item) => {
    const finalObj = { ...item, quantity: item.quantity + 1 };
    console.log("finalObj", finalObj);
    dispatch(addQuantity(finalObj));
  };
  //////////////////////////////////////
  const DeleteItem = (item) => {
    dispatch(deleteItem(item));
  };

  
  ///////////////////
  const HandleOrder = async () => {
    const userId = User.map((m)=>{
      return m._id
    })
    const helloId = userId[0]
    
    const newOrder = CartProducts.map((item)=>{
      return {_id:item._id, Name:item.Name, slug:item.slug, img:item.img, price:item.price, quantity:item.quantity}
    })
    try{

      const send = await baseURL.post('/ecommerce/saveOrder',{
        OrderItems:newOrder,
        user_id:helloId
      })
      Navigate(`/Orderhistory/${helloId}`)
      toast.success("Here is your Order History")
    }catch(error){
      console.log("sgdfsdfdhdfgdhg",error)
    }

    
  };

  
  

  return (
    <>
      <Rotate bottom left duration={2000}>
        
          <h1 className="text-center">Shopping cart</h1>
        
      </Rotate>
      <div className="row my-5">
        <Slide cascade left duration={2000}>
          <div className="col-8">
            {CartProducts.map((item) => {
              return (
                <div
                  className="row mx-5 my-2"
                  key={item._id}
                  style={{ boxShadow: "0px 0px 5px  grey" }}
                >
                  <div className="col-4 my-1">
                    <img
                      className="my-1"
                      src={item.img}
                      style={{ height: "50px" }}
                    ></img>
                    <span className="mx-1">{item.Name}</span>
                  </div>
                  <div className="col-4 my-3">
                    <button
                      className="btn btn-dark btn-sm"
                      disabled={item.quantity === 1}
                      onClick={() => MinusQuantity(item)}
                    >
                      <i className="fas fa-minus-circle"></i>
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-dark btn-sm"
                      disabled={item.quantity === item.available_total}
                      onClick={() => AddQuantity(item)}
                    >
                      <i className="fas fa-plus-circle"></i>
                    </button>
                  </div>
                  <div className="col-2 my-3">
                    <span>{item.price} Rs</span>
                  </div>
                  <div className="col-2 my-3">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => DeleteItem(item)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Slide>

        <div className="col-4  ">
          <Slide cascade bottom duration={2000}>
            <table className="table table-hover ">
              <tbody>
                <tr>
                  <td>Total Products</td>
                  {CartProducts.map((item) => {
                    return (
                      <td>
                        {item.quantity}
                        {/* {
                      CartProducts.reduce((a , b)=>{
                          return (a+b.quantity , 0)
                      })
                  } */}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td>Total Price</td>

                  {CartProducts.map((item) => {
                    return (
                      <td>
                        {item.quantity * item.price}
                        {/* {
                      CartProducts.reduce((a , b)=>{
                          return (a+b.quantity , 0)
                      })
                  } */}{" "}
                        Rs
                      </td>
                    );
                  })}
                  {/* {
                    CartProducts.reduce((a ,b )=>{
                        return (a+b.quantity , 0)
                    })
                  } */}
                </tr>
              </tbody>
            </table>
            <button className="btn btn-dark" onClick={HandleOrder}>
              Add Product
            </button>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
