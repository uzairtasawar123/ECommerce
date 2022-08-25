import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom'
import Rating from "./Rating";
import './Product.css'
const Products = () => {
  //////////////////////////////////////////
  const ReduxProducts = useSelector((state) => state.product);
  //console.warn("PRODUCTS" , ReduxProducts )
  return (
    <>
      <Zoom cascade delay={1000} duration={3000}>
      <div className="row  justify-content-between">
      {ReduxProducts &&
          ReduxProducts.map((p) => {
            return (
             
              <div className="col-3 card mx-1 my-1 hello_col" key={p._id}>
                 <div className="">
                <Link to={`/product/${p.slug}`}>
                  <div className="card-img-top">
                    <img src={p.img} className='w-100' style={{height:'400px'}} />
                  </div>
                </Link>

                <div className="card-body">
                  <Link to={`/product/${p.slug}`}>
                    <div className="card-title">
                      <h4>{p.Name}</h4>
                    </div>
                  </Link>

                  <div>
                    <Rating Rating={p.Rating} Reviews={p.number_reviews}/>
                  </div>
                  <p><b>Brand:</b> {p.brand}</p>

                  <div>
                    <p><b>Price: {p.price} Rs</b></p>
                  </div>
                  <div>
                    <Link to={`/product/${p.slug}`} className="btn btn-dark">Shop Now</Link>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
      
      </div>
      </Zoom>
     
        
    </>
  );
};

export default Products;
