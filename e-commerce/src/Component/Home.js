import React  ,{useState} from "react";
import Products from "./Products";
import { useEffect } from "react";
import baseUrl from "../BaseUrl";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../Redux/Reducer/ProductSlice";
import "./Home.css";
import Bounce from "react-reveal/Bounce";
import Tada from "react-reveal/Tada";
import Zoom from "react-reveal/Zoom";
import { Rotate } from "react-reveal";
import {addUser} from '../Redux/Reducer/UserSlice'



const Home = () => {
  ///////////////////////////////////////

  const dispatch = useDispatch();

  ///////////////////////  useEffect   ////////////////////
  useEffect(() => {

    const fetchProduct = async () => {
      const res = await baseUrl.get("/ecommerce/getproducts");
      dispatch(addProducts(res.data));
    };
    ////////////////////////////////////
   
    fetchProduct();
  }, [dispatch]);



  /////////////////////////////////////////////
  useEffect(()=>{
    const fetchUser = async ()=>{
      const save = JSON.parse(localStorage.getItem('userToken'))
      console.log("TOKEN" , save)
      try {
        const res = await baseUrl.get('/user/getuser', {
          headers:{
            auth:save.token
          }
        })
        dispatch(addUser(res.data))

      } catch (error) {
        console.log("errr"  ,error)
      }
     
  }
  fetchUser()

  } ,[dispatch])


  

  return (
    <>
      <div className="row text-center align-content-center">
        <div className="col first_div text-light">
          <Rotate bottom left duration={2000}>
            <h5 className="display-3 text-light font-weight-lighter">
              Introducing
            </h5>
          </Rotate>
          <Bounce cascade left duration={2000}>
            <h1 className="iam_h1 display-4 mt-5 text-danger">
              Discover the World of Best Collection
            </h1>
          </Bounce>
        </div>
      </div>
      <Tada  forever duration={1500}>
      <h1 className="text-center available">Available Collections</h1> 
      </Tada>
     <Products />
    </>
  );
};

export default Home;
