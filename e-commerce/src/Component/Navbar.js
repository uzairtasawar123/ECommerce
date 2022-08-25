import React from "react";
import ShoppingCartRounded from "@material-ui/icons/ShoppingCartRounded";
import { useDispatch ,useSelector } from "react-redux";
import Jump from "react-reveal/Jump";
import {useNavigate} from 'react-router-dom'
import {logOutUSer} from '../Redux/Reducer/UserSlice'
import {emptyState} from '../Redux/Reducer/OrderSlice'



const Navbar = () => {
  //////////////////////////////////
  const CartProducts = useSelector((state) => state.order);
  const HistoryCart = useSelector((state)=> state.history)
  const User = useSelector((state) => state.user);
  console.log("HELLO USWE" , User)
  const Navigate = useNavigate()
  const dispatch  = useDispatch()
  //////////////////////////////////
const HandleLogOut = ()=>{

  dispatch(logOutUSer())
  dispatch(emptyState())
  localStorage.removeItem('userToken')
  localStorage.removeItem('user')
  Navigate('/')
    
}
/////////////////////////////////////////////////////////
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/home" className="navbar-brand mx-5">
          Uzair.
        </a>
        {User.map((m) => {
          return (
            <>
            <div className='text-white ms-auto '>{m.name}
            <button className='btn btn-outline-danger mx-2' onClick={HandleLogOut}>Log Out</button>
            </div>
          
            </>
          );
        })}
        <div className="mx-4">
          <ShoppingCartRounded
            className=""
            style={{ color: "white" }}
          ></ShoppingCartRounded>
         {}

          {CartProducts.map((product) => {
            return (
              <Jump forever>
                <span
                  className="badge"
                  style={{ backgroundColor: "red", borderRadius: "100%" }}
                >
                  {product.quantity}
                </span>
              </Jump>
            );
          })}
          <Jump forever></Jump>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
