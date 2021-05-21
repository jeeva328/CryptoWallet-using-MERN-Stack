import React, { Component } from "react"

class PropsCom extends Component{
    constructor(props){
        super(props) 
    }
    
    render(){
        const{ n }=this.props
       
         return(
            <h1>this is props  {n}</h1>
        )
    }
}

export default PropsCom