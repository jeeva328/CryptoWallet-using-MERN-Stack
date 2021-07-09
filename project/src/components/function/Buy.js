import React ,{useState , useEffect} from 'react'
import axios from 'axios'
import './Buy.css'
import {Link} from 'react-router-dom'
import Bill from './Bill.js';

function Buy() {

const [itemgetArray, setitemgetArray] = useState([])

    useEffect( async () =>   {
        var items = await axios
           .get(
             'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
           );
           console.log(items)
         setitemgetArray(items.data);
       
       }, []);

       var itemArray = [];
       itemgetArray.map((items) => itemArray.push(items.name) )
       console.log(itemArray);

    const [Btc, setBtc] = useState(0);
    const [Eth, setEth] = useState(0);
    const [Usdt, setUsdt] = useState(0);
    const [Bnb, setBnb] = useState(0);
    const [Ada, setAda] = useState(0);
    const [Doge, setDoge] = useState(0);
    const [Xrp, setXrp] = useState(0);
    const [Dot, setDot] = useState(0);
    const [Usdc, setUsdc] = useState(0);
    const[Icp, setIcp] = useState(0);


    return (
    <div className='pro-container'> 
          
       
       <div className='head-buy'>
            <h2 id='cname'>COIN NAME</h2>
            <h2 id='cquant'>QUANTITY</h2>
        </div>

        <div  className='list'>
{itemArray[0]}
            <br></br>
            <br></br>
            {itemArray[1]}
            <br></br>
            <br></br>
            {itemArray[2]}
            <br></br>
            <br></br>
            {itemArray[3]}
            <br></br>
            <br></br>
            {itemArray[4]}
            <br></br>
            <br></br>
            {itemArray[5]}
            <br></br>
            <br></br>
            {itemArray[6]}
            <br></br>
            <br></br>
            {itemArray[7]}
            <br></br>
            <br></br>
            {itemArray[8]}
            <br></br>
            <br></br>
            {itemArray[9]}
        </div>

<div className='quantity-list'>
        <div  className='btc-buy'>
            <button onClick={ ()=> setBtc(Btc+1)}> + </button> &nbsp;&nbsp;&nbsp;
            {Btc}
            &nbsp;&nbsp;&nbsp;<button onClick={ ()=> setBtc(Btc-1)}> - </button>
        </div>
        &nbsp;
        
        <div className='eth-buy'>
            <button onClick={ ()=> setEth(Eth+1)}> + </button> &nbsp;&nbsp;&nbsp;
            {Eth}
            &nbsp;&nbsp;&nbsp;<button onClick={ ()=> setEth(Eth-1)}> - </button>
        </div>
        &nbsp;
       
        <div className='usdt-buy'>
            <button onClick={ ()=> setUsdt(Usdt+1)}> + </button> &nbsp;&nbsp;&nbsp;
            {Usdt}
            &nbsp;&nbsp;&nbsp;<button onClick={ ()=> setUsdt(Usdt-1)}> - </button>
        </div>

        &nbsp;
        <div className='bnb-buy'>
            <button onClick={ ()=> setBnb(Bnb+1)}> + </button> &nbsp;&nbsp;&nbsp;
            {Bnb}
            &nbsp;&nbsp;&nbsp;<button onClick={ ()=> setBnb(Bnb-1)}> - </button>
        </div>

        &nbsp;
        <div className='ada-buy'>
            <button onClick={ ()=> setAda(Ada+1)}> + </button> &nbsp;&nbsp;&nbsp;
            {Ada}
            &nbsp;&nbsp;&nbsp;<button onClick={ ()=> setAda(Ada-1)}> - </button>
        </div>

        &nbsp;
        <div className='doge-buy'>
            <button onClick={ ()=> setDoge(Doge+1)}> + </button> &nbsp;&nbsp;&nbsp;
            {Doge}
            &nbsp;&nbsp;&nbsp;<button onClick={ ()=> setDoge(Doge-1)}> - </button>
        </div>
        &nbsp;
        
        <div className='xrp-buy'>
            <button onClick={ ()=> setXrp(Xrp+1)}> + </button> &nbsp;&nbsp;&nbsp;
            {Xrp}
            &nbsp;&nbsp;&nbsp;<button onClick={ ()=> setXrp(Xrp-1)}> - </button>
        </div>
        &nbsp;
        
        <div className='dot-buy'>
            <button onClick={ ()=> setDot(Dot+1)}> + </button> &nbsp;&nbsp;&nbsp;
            {Dot}
            &nbsp;&nbsp;&nbsp;<button onClick={ ()=> setDot(Dot-1)}> - </button>
        </div>

        &nbsp;
        <div className='usdc-buy'>
            <button onClick={ ()=> setUsdc(Usdc+1)}> + </button> &nbsp;&nbsp;&nbsp;
            {Usdc}
            &nbsp;&nbsp;&nbsp;<button onClick={ ()=> setUsdc(Usdc-1)}> - </button>
        </div>

        &nbsp;
        <div className='icp-buy'>
            <button onClick={ ()=> setIcp(Icp+1)}> + </button> &nbsp;&nbsp;&nbsp;
            {Icp}
            &nbsp;&nbsp;&nbsp;<button onClick={ ()=> setIcp(Icp-1)}> - </button>
        </div>
        &nbsp;
</div>


<div>
    <Bill bal={1000} btcP={Btc} ethP={Eth} 
    usdtP={Usdt} bnbP={Bnb} adaP={Ada}
    dogeP={Doge} xrpP={Xrp} dotP={Dot} usdcP={Usdc} icpP={Icp}/>
</div>


    </div>
    )

    }
export default Buy;

    