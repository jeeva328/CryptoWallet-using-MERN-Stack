import React,{useState} from 'react'

function Sellitem(props){
    const [dum, setdum] = useState(0)
    const dummy_sell = {
        name: 'Bitcoin',
        quantity: 10,
        current_val: 1000,
    }
    console.log("props",props.datasss)
    
    return(
        <div>
        <div className='all-sell'>
           <h4>{props.datasss.coin_name}</h4>  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
           <h4>{props.datasss.coin_quan}</h4>  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
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
    );
}

export default Sellitem