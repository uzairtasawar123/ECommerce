import React, { useEffect } from 'react'
import { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import BaseUrl from '../BaseUrl';
import Rating from './Rating';
import './ClickedProduct.css'
import Slide from 'react-reveal/Slide'
import Tada from 'react-reveal/Tada'
import Roll from 'react-reveal/Roll'
import { useDispatch} from'react-redux'
import {addOrder} from '../Redux/Reducer/OrderSlice'
import {toast} from 'react-toastify'
 

const ClickedProduct = () => {
  /////////////////////////////////////////
  
    //////////////////////////////////////
    const {Slug_id} = useParams();
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    /////////////////////////////////////
    const [product , setProduct] = useState({})

 ////////////////////////   useEffect   /////////////////////
 useEffect(()=>{
    const fetchProduct = async ()=>{
        const res  = await BaseUrl.get(`/ecommerce/getproduct/${Slug_id}`)
       // console.warn("SLUG RELATED PRODUCT" , res.data)
       setProduct(res.data)
    }
    fetchProduct()
    toast.success("Welcome 😙")
 } ,[])

 ////////////////////   Add to Cart Func   /////////////////////////
 const AddtoCart = ()=>{
    const data = {...product , quantity:1}
    dispatch(addOrder(data))
    Navigate('/cart')
    toast.success("Product is added successfully 🤑")

 }

  return (
    <>
       <div className="row">
        <Slide cascade right>
        <div className="col-3"> 
        <h1 className="">{product.Name}</h1> 
          <Rating
            Rating={product.Rating}
            Reviews={product.number_reviews}
          />
          <p><b>Price</b>: {product.price}Rs</p>
          <p><b>Brand</b>: {product.brand}</p>
          <p>
            <b>Description</b>: <br />
            {product.description}
          </p>
        </div>
        </Slide>
       <Roll cascade top>
       <div className="col-3 my-5 ">
          <table className ="table table-hover ">
            <tbody>
              <tr>
                <td>Price</td>
                <td>{product.price}Rs</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>
                  {product.available_total > 0 ? (
                    <button className="btn btn-success btn-sm disabled">
                      Available
                    </button>
                  ) : (
                    <button className="btn btn-danger btn-sm">
                      Unavailable
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          {product.available_total>0? <button className="btn btn-dark btn-lg btn-block" onClick={AddtoCart}>Add to Cart</button>:<button className="btn btn-primary btn-lg btn-block" disabled>Add to Cart</button>}
        </div>
       </Roll>
      

        <div className="col-6">
            <Slide left>
            <img src={product.img} className="product-img mx-5 " style={{height:'500px' , width:'500px'}}></img>
            </Slide>
        </div>
      </div>
    </>
  )
}

export default ClickedProduct
