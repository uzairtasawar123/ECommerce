import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import ClickedProduct from "./Component/ClickedProduct";
import CartScreen from "./Component/CartScreen";
import OrderHistory from "./Component/OrderHistory";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import NavigateChallenge from "./Component/NavigateChallenge";



function App() {

  return (
    <>
      <Router>
      <ToastContainer position='top-center'  autoClose={3000} closeOnClick
 />
        <Navbar  />
      <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/product/:Slug_id" element={<ClickedProduct/>}/>
        <Route exact path='/cart' element={<CartScreen/>} />
        <Route exact path='/Orderhistory/:userId' element={<OrderHistory/>} />
        <Route exact path='/navigate' element={<NavigateChallenge/>} />
      </Routes>
      </Router>


    </>
  );
}

export default App;
