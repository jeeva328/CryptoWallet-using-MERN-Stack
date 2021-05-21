import React from 'react'
import './menu.css'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (

        <body>
             <div className='menu'>
            <h5 className='a' >Home</h5>
            <h5 className='a' > <Link to='/About'>About</Link> </h5>
            <h5 className='a' ><Link to='/Contact'>Contact Us</Link></h5>
            <h5 className='a'><Link to='/Register'>Register</Link></h5>

            <div>
<h5 className='feed'>Feedback</h5>
        </div>
        </div>

       
        </body>
       

         )
}

