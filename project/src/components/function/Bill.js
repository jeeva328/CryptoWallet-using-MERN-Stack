import React, {useEffect , useState} from 'react'
import './Bill.css'
import GooglePayButton from "@google-pay/button-react"
import axios from 'axios';
import Cookies from 'universal-cookie';
import { UseState } from 'react';
//import { toast } from 'react-toastify';
//import {Ippopay} from 'react-ippopay';




const cookies = new Cookies();
var __id = cookies.get('email')
console.log("jjjeeeeeeevvvvvvvvvv",__id)
 function  Bill(props)  {
var f = 150;
const [vall, setvall] = useState("")
// const [paystatus, setpaystatus] = useState(false)
//   API Import
var xyz; 
var dummy = {name:'guna' , rate : 200000000000};
// const [total, settotal] = useState(0)
const [paystatus, setpaystatus] = useState(false)
const [itemgetArray, setitemgetArray] = useState([])
const [loading, setloading] = useState(true)
const [jeeva, setjeeva] = useState({});
const [valll, setvalll] = useState(0)
    useEffect( async () =>   {
        var items = await axios
           .get(
             'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
           );
        
           console.log(items)
         setitemgetArray(items.data);
         setloading(false);
       
       }, []);
       //payment

       useEffect(async() => {
          var money = await axios.get('http://localhost:2000/money');
          console.log("ddddddddddddddddddddddddddddddddddd",money)
          var ss =await money.data;
          console.log(ss)
          console.log(__id)
          var aaa = ss.filter((d)=>__id == d.cus_id)
          console.log("aaaa",aaa)
          setvalll(aaa[0].cus_money)
          console.log("asvaverfvasvfarfsdvasvarev",vall)
       }, [valll])


     
       var itemArray = [];
       itemgetArray.map((items) => itemArray.push({
           name:items.name,
           rate:items.current_price,
       }) )
      
       var a1 =  Math.ceil(loading ? dummy.name : itemArray[0].rate * props.btcP * 75)
       var a2 = Math.ceil( loading ? dummy.name : itemArray[1].rate * props.ethP * 75)
       var a3 = Math.ceil(loading ? dummy.name : itemArray[2].rate  * props.usdtP * 75)
       var a4 = Math.ceil(loading ? dummy.name : itemArray[3].rate * props.bnbP * 75)
       var a5 = Math.ceil(loading ? dummy.name : itemArray[4].rate * props.adaP * 75)
       var a6 = Math.ceil(loading ? dummy.name : itemArray[5].rate * props.dogeP * 75)
       var a7 = Math.ceil(loading ? dummy.name : itemArray[6].rate * props.xrpP * 75)
       var a8 = Math.ceil(loading ? dummy.name : itemArray[7].rate * props.dotP * 75)
       var a9 = Math.ceil(loading ? dummy.name : itemArray[8].rate * props.usdcP * 75)
       var a10 = Math.ceil(loading ? dummy.name : itemArray[9].rate * props.icpP * 75)

       
var tot_inr = a1+a2+a3+a4+a5+a6+a7+a8+a9+a10;
    
// const [paystatus, setpaystatus] = useState();

    const validateBuy = () => {
    
        if (props.btcP===0 && props.ethP===0 && props.usdtP===0&& props.bnbP===0&& props.adaP===0
            && props.dogeP===0&& props.xrpP===0&& props.dotP===0&& props.usdcP===0&& props.icpP===0 ) {
         alert('Unable to process');
        }
      };

      const validateavai = () =>{
          xyz = (props.bal) - (tot_inr) ;
          if(xyz >= 0)
          {
        alert('Order Placed . Check Sell window for more info.')
          }
          else{
              alert('Insufficient Balance')
          }
      }


   
const initval = {
coin1:{c1 : '' , q1 : '', amt1 :'' },
coin2:{c2 : '' , q2 : '', amt2 :'' },
coin3:{c3 : '' , q3 : '', amt3 :'' },
coin4:{c4 : '' , q4 : '', amt4 :'' },
coin5:{c5 : '' , q5 : '', amt5 :'' },
coin6:{c6 : '' , q6 : '', amt6 :'' },
coin7:{c7 : '' , q7 : '', amt7 :'' },
coin8:{c8 : '' , q8 : '', amt8 :'' },
coin9:{c9 : '' , q9 : '', amt9 :'' },
coin10:{c10 : '' , q10 : '', amt10 :'' },
};


var sambavam = []

const getValueBuy = () =>{
initval.coin1.c1 = itemArray[0].name;
initval.coin1.q1 = props.btcP;
initval.coin1.amt1 = Math.ceil(itemArray[0].rate * 75) ;

initval.coin2.c2 = itemArray[1].name;
initval.coin2.q2 = props.ethP;
initval.coin2.amt2 = Math.ceil(itemArray[1].rate * 75);

initval.coin3.c3 = itemArray[2].name;
initval.coin3.q3 = props.usdtP;
initval.coin3.amt3 = Math.ceil(itemArray[2].rate * 75);

initval.coin4.c4 = itemArray[3].name;
initval.coin4.q4 = props.bnbP;
initval.coin4.amt4 = Math.ceil(itemArray[3].rate * 75);

initval.coin5.c5 = itemArray[4].name;
initval.coin5.q5 = props.adaP;
initval.coin5.amt5 = Math.ceil(itemArray[4].rate * 75);

initval.coin6.c6 = itemArray[5].name;
initval.coin6.q6 = props.dogeP;
initval.coin6.amt6 = Math.ceil(itemArray[5].rate * 75);

initval.coin7.c7 = itemArray[6].name;
initval.coin7.q7 = props.xrpP;
initval.coin7.amt7 = Math.ceil(itemArray[6].rate * 75);

initval.coin8.c8 = itemArray[7].name;
initval.coin8.q8 = props.dotP;
initval.coin8.amt8 = Math.ceil(itemArray[7].rate * 75);

initval.coin9.c9 = itemArray[8].name;
initval.coin9.q9 = props.usdcP;
initval.coin9.amt9 = Math.ceil(itemArray[8].rate * 75);

initval.coin10.c10 = itemArray[9].name;
initval.coin10.q10 = props.icpP;
initval.coin10.amt10 = Math.ceil(itemArray[9].rate * 75);
       }
       var cookiess = cookies.get('email');
       console.log("emaillllllllllllllllllll",cookiess);
      
    
      const Call = async () =>{
          await validateBuy();
          if(tot_inr>0){
          await validateavai();
          }
          if(tot_inr>0 && xyz>=0 ){
          await getValueBuy();
          }
          console.log(initval);
       
        if(initval.coin1.q1>0){
            let coin  = initval.coin1.c1
            let val = initval.coin1.q1
            let a ={
                coin: coin,
                val :val
            }
           sambavam.push(a)
        }
        if(initval.coin2.q2>0){
            let coin  = initval.coin2.c2
            let val = initval.coin2.q2
            let a ={

                coin: coin,
                val :val
            }
           sambavam.push(a)
         }
         if(initval.coin3.q3>0){
            let coin  = initval.coin3.c3
            let val = initval.coin3.q3
            let a ={
                coin: coin,
                val :val
            }
           sambavam.push(a)
         }
         if(initval.coin4.q4>0){
            let coin  = initval.coin4.c4
            let val = initval.coin4.q4
            let a ={
                coin: coin,
                val :val
            }
           sambavam.push(a)
         }
         if(initval.coin5.q5>0){
            let coin  = initval.coin5.c5
            let val = initval.coin5.q5
            let a ={
                coin: coin,
                val :val
            }
           sambavam.push(a)
         }
         if(initval.coin6.q6>0){
            let coin  = initval.coin6.c6
            let val = initval.coin6.q6
            let a ={
                coin: coin,
                val :val
            }
           sambavam.push(a)
         }
         if(initval.coin7.q7>0){
            let coin  = initval.coin7.c7
            let val = initval.coin7.q7
            let a ={
                coin: coin,
                val :val
            }
           sambavam.push(a)
         }
         if(initval.coin8.q8>0){
            let coin  = initval.coin8.c8
            let val = initval.coin8.q8
            let a ={
                coin: coin,
                val :val
            }
           sambavam.push(a)
         }
         if(initval.coin9.q9>0){
            let coin  = initval.coin9.c9
            let val = initval.coin9.q9
            let a ={
                coin: coin,
                val :val
            }
           sambavam.push(a)
         }
         if(initval.coin10.q10>0){
            let coin  = initval.coin10.c10
            let val = initval.coin10.q10
            let a ={
                coin: coin,
                val :val
            }
           sambavam.push(a)
         }
         console.log("sambavam",sambavam)
         if(sambavam.length !== 0)
      {
          sambavam.map(async(sam)=>{
              let email = cookiess;
              let coin_name =  sam.coin;
              let coin_quan = sam.val

              let ar = {
                  email,
                  coin_name,
                  coin_quan
              }

           await axios.post("http://localhost:2000/buy",ar)
           console.log(ar);
          })
      }
      if(tot_inr!=0)
      {
        console.log("jeeva is very good boy")
        let cus_money=parseInt(valll)- parseInt(tot_inr)
    let fff = {
      cus_id:__id,
      cus_money
    }
   var s=  axios
       .put(
        'http://localhost:2000/money',fff
       );
       console.log(s);
      }
      }

     console.log("paystatus!!!!!!!!!!!!!!!!!!!!!!!!!!!",paystatus);
  if(paystatus === true)
{

  console.log("jeva!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! f***off")
  // alert("jeeva f**k")
  
        console.log("jeeva is very good boy")
        let cus_money=parseInt(vall)+parseInt(valll)
    let fff = {
      cus_id:__id,
      cus_money
    }
   var s=  axios
       .put(
        'http://localhost:2000/money',fff
       );
    
 console.log(s);
 
}
    return (
        <div className='bill-container'>
            <div className='con-bill'>
                Confirmation Bill
            </div>

            <div id='line-row'></div>

            <div className='cba'>
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <h3 >Coin</h3> &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;    &nbsp;&nbsp;
                <h3>Quantity</h3>   &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                <h3>Amount(inr)</h3>
            </div>

            <div id='line-row2'></div>
            <div id ='verti'></div>
            <div id ='verti2'></div> <div id ='verti3'></div>

            {/* <div className='tot-amt'>
                abc
                <br></br>
            </div> */}

            
          <div id="inputsss">
            <label htmlFor="">Recharge wallet
            <br />
            </label>
          <input  placeholder="enter the place" type="number" onChange={(e)=>setvall(e.target.value)}></input>
          </div>

<GooglePayButton
                className="car"
                environment="TEST"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: "CARD",
                      parameters: {
                        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                        allowedCardNetworks: ["MASTERCARD", "VISA"],
                      },
                      tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: {
                          gateway: "example",
                          gatewayMerchantId: "exampleGatewayMerchantId",
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: "12345678901234567890",
                    merchantName: "JMCRYPTOWALLET",
                  },
                  transactionInfo: {
                    totalPriceStatus: "FINAL",
                    totalPriceLabel: "Total",
                    totalPrice: String(vall),
                    currencyCode: "INR",
                    countryCode: "IN",
                  },

                  shippingAddressRequired: true,
                  callbackIntents: [
                    "SHIPPING_ADDRESS",
                    "PAYMENT_AUTHORIZATION"
                  ],
                }
                }
                onLoadPaymentData={(paymentRequest) => {
                  console.log("Success", paymentRequest);
                  
                }}
                onPaymentAuthorized={(paymentData) => {
                  console.log("Payment Authorised Success", paymentData);
                  setpaystatus(true);
                  return { transactionState: "SUCCESS" };
                }}
                onPaymentDataChanged={(paymentData) => {
                  console.log("On Payment Data Changed", paymentData);
                 

                  return {};
                }}
                existingPaymentMethodRequired="false"
                buttonColor="black"
                buttonType="Credit"
                
              /> 
     

            <div className='avai-bal'>
                Availabe Balance :
                <br></br> {valll}
                <br></br>
                Total Amout to be Paid (inr):
                <br></br> {tot_inr}
            </div>
          
          <div className='list-list'>
         {loading ? dummy.name : itemArray[0].name}  
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[1].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[2].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[3].name}            
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[4].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[5].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[6].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[7].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[8].name}
            <br></br>
            <br></br>
            {loading ? dummy.name : itemArray[9].name}
          </div>

<div>
    <button className='con-buy' type='submit' onClick={Call}>
        BUY
        </button>
    </div>
  
          <div className='bill-quant' >
          {props.btcP}
          <br></br>
          <br></br>
          {props.ethP}
          <br></br>
          <br></br>
          {props.usdtP} <br></br>
          <br></br>
          {props.bnbP}
          <br></br>
          <br></br> 
          {props.adaP}
          <br></br>
          <br></br>
          {props.dogeP} <br></br>
          <br></br>
          {props.xrpP} <br></br>
          <br></br> 
          {props.dotP}
           <br></br>
          <br></br>  
          {props.usdcP} <br></br>
          <br></br> 
          {props.icpP}
          </div>

          <div className='amt-bill'>
            {a1}
            <br></br><br></br>
            {a2}
            <br></br><br></br>
            {a3}
            <br></br><br></br>
            {a4}
            <br></br><br></br>
            {a5}
            <br></br><br></br>
            {a6}
            <br></br><br></br>
            {a7}
            <br></br><br></br>
            {a8}
            <br></br><br></br>
            {a9}
            <br></br><br></br>
            {a10}
           
          </div>
       



</div>
    );
}

export default Bill
