import React, { Component } from 'react';

class Reciept extends Component {
    //we can sccess our data from App.js through props.
     
    
    
    render() {
        console.log("we are inside Reciept component and this is our props", this.props)
        return (
            <div>
                {/* <h1>Name:{this.props.receipt.person}</h1>
                <h2>Drink:{this.props.receipt.order.drink}</h2> */}
                
                
                
                <h1>Name: {this.props.receipt.person}</h1>
                <h1>Drink: {this.props.receipt.order.drink}</h1>
                {/* <h2>chicken goes {this.props.chicken}</h2> */}
                
                


                
            </div>
        );
    }
}

export default Reciept;