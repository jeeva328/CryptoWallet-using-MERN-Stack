import React from 'react'
import './About.css'
import Typed from 'react-typed'

export default function About() {
    const para = ["We are building the cryptoeconomy – a more fair, accessible, efficient, and transparent financial system enabled by crypto.We started in 2019 with the radical idea that anyone, anywhere, should be able to easily and securely send and receive Bitcoin. Today, we offer a trusted and easy-to-use platform for accessing the broader cryptoeconomy.    "];
    return (
    <body className='abt'>
    <h2 ID='ah1'>ABOUT</h2>
        <div className='typed'>
           <Typed
             
               strings={para}
               typeSpeed={60}
           >
               </Typed>
        </div>


    </body>
       
    )
}
