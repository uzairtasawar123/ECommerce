import React, { useEffect, useState } from "react";
import baseUrl from "../BaseUrl";
import {Link} from 'react-router-dom'
import SpecificProduct from "./SpecificProduct";

const NavigateChallenge = () => {
  const [Data, setData] = useState([]);
  const [Id , setId] = useState('')

  console.log("Hello IDDDDDD" , Id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await baseUrl.get("/ecommerce/getproducts");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  } ,[]);


  const HandleSpecific  = (id)=>{
      setId(id)
         
  }



  return (
  <>
     <div className='row'>
     <div className='col-4'>
     {Data &&
          Data.map((p) => {
            return (
                <>
                <button onClick={()=> HandleSpecific(p.slug)}>
                <div>
                    <img src={p.img} style={{height:'20px'}}></img>
                </div>
             <div>{p.Name}</div>
                </button>
               
             </>
            );
          })}
          </div>
          <div>
              <SpecificProduct id={Id}/>
          </div>
     </div>
      
      
      </>
  )
};

export default NavigateChallenge;
