import React from 'react'
import './Tracker.css'
import {Link} from 'react-router-dom'
export default function Tracker() {
    return (
        <div  className='side'>
           <p  className='side1'><Link to='/CryptoTracker'>Crypto Tracker</Link></p> 
        </div>
    )
}
