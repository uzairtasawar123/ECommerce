import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import baseUrl from "../BaseUrl";
import {useDispatch} from 'react-redux'
import {updateState} from '../Redux/Reducer/HistorySlice'
import CustomerOrders from "./CustomerOrders";

const OrderHistory = () => {
  const Navigate = useNavigate()
  const { userId } = useParams();
  const customerDetail = JSON.parse(localStorage.getItem("user"));
  //const dispatch = useDispatch()
  //////////////////////////////////
  const [history, setHistory] = useState([]);
  console.log('history',history);


  /////////////////////////////////////////////////

  useEffect(() => {

    const fetchHistory = async () => {
      try {
        const res = await baseUrl.get(`/ecommerce/totalOrder/${userId}`);
        console.log('fetch history response is :',res);
        setHistory(res.data);
      } 
      catch (error) {
        console.log("Erorr ", error);
      }
    };
    fetchHistory();
  } ,[]);




  /////////////////////
  useEffect(() => {
    const userData = async () => {
      const res = await baseUrl.get(`/user/userget/${userId}`);
      localStorage.setItem("user", JSON.stringify(res.data));
    };
    userData();
  }, []);

  

  return (
    <>
      <CustomerOrders history={history} customerDetail={customerDetail}/>
    </>
  );
};

export default OrderHistory;
