import React ,{useState}from "react";
import { Formik, useFormik } from "formik";
import './Sell.css'

function Sell(props) {

const [dum, setdum] = useState(0)
  const dummy_sell = {
  name: 'Bitcoin',
  quantity : 10 , 
  current_val : 1000,
} 

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

          <div className='all-sell'>
           <h4>{dummy_sell.name}</h4>  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
           <h4>{dummy_sell.quantity}</h4>  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <h4>{dummy_sell.current_val}</h4>
          </div>

          <div className='but-id'>
        <button onClick={() => setdum(dum+1)} >
        +
        </button>
        <button>
        {dum}
      </button>
      <button onClick={()=> setdum(dum-1)}> - </button>
      </div>

        </div>



      </div>

     
  );
}

export default Sell;
