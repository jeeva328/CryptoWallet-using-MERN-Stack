import React from 'react'
import './Profile.css'
import {Link, Redirect} from 'react-router-dom'
import Cookies from 'universal-cookie';

const cookies = new Cookies();


function Profile() {

const balance = 1000;
    var cookiess = cookies.get('login');
    console.log("login" , cookiess);
    
   if(cookiess !== "true"){
       return <Redirect to={"/Loginform"}/>
   }

    return (
        <body className='profile-body'>
<div>
            
<div className='vc'>
    <h2 className='user-profile'>USER-PROFILE</h2>
</div>

<div className='buy-sell'>
    <span>
    <button id='bb'> <Link to='/Buy'>
         BUY </Link> </button></span>

    <button id='bs'><Link to = '/Sell'> SELL </Link></button>
</div>

<div className='note'>
    <h5>* You can track the current crypto currency price by clicking <d id='hint'>Crypto Tracker</d> in the main window.</h5>
    <br></br>
   <h5> * You will be credited <d id='hint'>Rs.1000</d> in your wallet as a sign in bonus. </h5>
</div>

<div className= 'wallet'>
    <div>
       <h3 className='abc'>Available Balance :</h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
       <h3 className='abc'>{balance}</h3>
    </div>

   
</div>

{/* <div><Bill bal={balance} /></div> */}

            </div>
        </body>
    )
}

export default Profile
