import React ,{useEffect, useState}from "react";
import { Formik, useFormik } from "formik";
import './Sell.css'
import axios from "axios";
import Sellitem from './sellitem'
 function Sell(props) {

const [dum, setdum] = useState(0)
const [datas,setdatas] = useState([])
useEffect(async() => {
  var Data =await  axios.get("http://localhost:2000/buy")
 console.log("Data",Data.data)
 let aa = Data.data
 setdatas(Data.data)
})
console.log("setDatas",datas);
  const dummy_sell = {
  name: 'Bitcoin',
  quantity : 10 , 
  current_val : 1000,
} 
  
var itt = datas.filter((data)=>data.coin_quan !== 0);

var items = itt.map((data)=> <Sellitem datasss={data}/>)
 
  return (
      <div>    

        <div className='sell-avai'>
          <div>
            SELL
          </div>
         
          <div className='sell-head'>
            <h3> Coin name</h3> &nbsp;&nbsp;&nbsp;&nbsp;
            <h3> Quantity </h3> &nbsp;&nbsp;&nbsp;&nbsp;
            <h3> Current Val</h3> &nbsp;&nbsp;&nbsp;&nbsp;
            <h3>Sell quantity</h3>
          </div>
       
    {items}

        </div>

 <div className="vid">
            <video autoPlay loop  width="370" height="340" controls
             src="./Imagess/v.mp4" alt=""/>  
        </div>

        <div className='news'>
  <h2>Some useful links</h2>
  <div><a href="https://www.investopedia.com/terms/c/cryptocurrency.asp">What is Cryptocurrency?</a></div>
<div><a href="https://cryptonews.com/">Latest Cryptocurrency News</a></div> 
          <div><a href="https://marketmilk.babypips.com/crypto/currency-strength">Crypto Strength Meter</a></div>
          <div><a href="https://countryask.com/cryptocurrency/top-facts-about-cryptocurrencies-you-should-know-in-2021-and-beyond/">Crypto Facts 2021</a></div>
</div>
      </div>

     
  );
}

export default Sell;
