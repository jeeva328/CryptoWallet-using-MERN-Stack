import axios from 'axios'
import React, { useState } from 'react'

function Sellitem(props) {
    const [dum, setdum] = useState(0)
    const dummy_sell = {
        name: 'Bitcoin',
        quantity: 10,
        current_val: 1000,
    }
    console.log("props", props.datasss)

    var downque = () => {
        if (dum > 0) {
            setdum(dum - 1)
        }
    }

    var upque = () => {
        if (dum < props.datasss.coin_quan) {
            setdum(dum + 1)
        }
    }

    let quuu = props.datasss.coin_quan - dum
    console.log("balance", quuu, props.datasss._id)

    var da = {
        id:props.datasss._id,
        coin_quan:quuu
    }
   var sell = async()=>{
     console.log(" i am in sell")
  var poda =  await axios.put("http://localhost:2000/buy",da)
      console.log("show",poda)
   }



    return (
        <div>
            <div className='all-sell'>
                <h4>{props.datasss.coin_name}</h4>  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <h4>{props.datasss.coin_quan}</h4>  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <h4>{dummy_sell.current_val}</h4>
            </div>

            <div className='but-id'>
                <button onClick={upque} >
                    +
                </button>
                <button>
                    {dum}
                </button>
                <button onClick={downque}> - </button>
            </div>

            <button className = "but-a" onClick={sell} >sell</button>
        </div>
    );
}

export default Sellitem