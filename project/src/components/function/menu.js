import React from 'react'
import './menu.css'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
var loooo=cookies.get('login');
export default function Menu() {

    var log = loooo !== "false" ? "login" : "logout";
    return (

        <body>
             <div className='menu'>
            <h5 className='a' ><Link to ='/'>Home</Link></h5>
            <h5 className='a' > <Link to='/About'>About</Link> </h5>
            <h5 className='a' ><Link to='/Contact'>Contact Us</Link></h5>
            <h5 className='a'><Link to='/Register'>Register</Link></h5>

            <div>
<h5 className='feed'><Link to='/CryptoTracker'>Tracker</Link></h5>
<h5 className='lo'><Link to ='/Loginform'>{log}</Link></h5>
<h5 className='pro'><Link to='/Profile'>Profile</Link></h5>
        </div>
        </div>

       
        </body>
       

         )
}

