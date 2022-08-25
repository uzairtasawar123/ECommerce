import React, { useState , useEffect } from 'react'
import BaseUrl from '../BaseUrl'

const SpecificProduct = ({id}) => {

    console.log("PROP IDDDD" , id)

    const [ClickedProduct , setProduct] = useState({})

   console.log("Heeloooooo CLICK ",ClickedProduct)
 ////////////////////////   useEffect   /////////////////////


 useEffect(()=>{
    const fetchProduct = async ()=>{
        const res  = await BaseUrl.get(`/ecommerce/getproduct/${id}`)
        console.log("Res" , res.data)
       setProduct(res.data)
    }
    fetchProduct()
 } ,[])


    return (
        <>
            <div>
                <div className='row'>
                <div className='col-4'>
                   <h4>
                   Name:
                   </h4>
                   {ClickedProduct.Name}
                   <br></br>
                   <h4>
                   Rating:
                   </h4>
                   {ClickedProduct.rating}
                   <br></br>
                   <h4>
                   Price:
                   </h4>
                   {ClickedProduct.price}
                   <br></br>



                </div>
                <div className='col-8'>
                  <img src={ClickedProduct.img}></img>
                </div>

                </div>
            </div>
        </>
    )
}

export default SpecificProduct
