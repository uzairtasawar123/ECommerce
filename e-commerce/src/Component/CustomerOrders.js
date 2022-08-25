import React from 'react'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import {emptyState} from '../Redux/Reducer/OrderSlice'
import {useDispatch} from 'react-redux'
import { Slide } from 'react-toastify';

const CustomerOrders = ({history , customerDetail}) => {

    const Navigate = useNavigate()
    const dispatch = useDispatch()



      ////////////////////////////////////
    const Quantity = history.map((m)=>{
        return (
            m.data.reduce((a , b)=>{
                return (a+b.quantity , 0)
            })
        )
    })

console.log("QUANASADS" , Quantity)

const Data = Quantity.map((m)=>{
return m.quantity
})


const FinalQuantity = Data.reduce((previousValue, currentValue) => previousValue + currentValue, 0)


/////////////////////////////////
const Price = Quantity.map((m)=>{
return m.price*m.quantity
})

const FinalPrice = Price.reduce((previousValue, currentValue) => previousValue + currentValue, 0)



////////////////////////////
const HandleShop = ()=>{
    dispatch(emptyState())
    Navigate('/home')
 }


 const HandleNav = ()=>{
     Navigate('/navigate')
 }






    return (
        <>
        <div className="mx-1 row">
        <div className="col-8">
          <div className="my-2 shadow">
            <h1 className="text-center">Customer Detail</h1>
            <span>
              <b>Name :</b>
              {customerDetail && customerDetail?.name}
            </span>
            <br></br>
            <br></br>

            <span>
              <b>Email :</b>
              {customerDetail && customerDetail?.email}
            </span>
            <br></br>
            <br></br>

            <span>
              <b>Phone No :</b>
              {customerDetail && customerDetail?.phone}
            </span>
          </div>

          <div className='my-5 shadow row'>
          <h1 className='text-center'>Products Detail</h1>

          {history.length && history.map((item) => {
            return item.data.map((m) => {
              return (
                <>
                    <div className=" col-6">
                      <span>
                        <b>Product Name : </b>
                        {m.Name}
                      </span>
                      <br></br>
                      <br></br>

                      <span>
                        <b>Product Quantity : </b>
                        {m.quantity}
                      </span>
                      <br></br>
                      <br></br>

                      <span>
                        <b>Product Price : </b>
                        {m.quantity * m.price}
                      </span>
                      <br></br>
                      <br></br>
                    </div>
                    <div className=" my-2 col-4">
                      <img src={m.img} style={{height:'200px'}}></img>
                    </div>
                </>
              );
            });
          })}
          </div>

        </div>
        <div className="my-5 col-4">
          <table className="shadow table table-hover table-bordered ">
            <tbody>
              <tr>
                <td>Total Products</td>
                <td>
                 {FinalQuantity}
                </td>
              </tr>
              <tr>
                <td>Total Price</td>
                <td>{FinalPrice} Rs</td>
              </tr>
            </tbody>
          </table>
          <Link to="/home" className="btn btn-dark">
            Pay Now
          </Link>
          <button className='btn btn-dark mx-2' onClick={HandleShop}>Shop More</button>
          {/* <button onClick={HandleNav} className='btn btn-dark'>Navigate Challenge</button> */}
        </div>
      </div>
            
        </>
    )
}

export default CustomerOrders
