
import React, { Component } from 'react';
import Reciept from './Receipt1';

// * RECEIPTS - pasting outside of our component, which is global
const receipt1 =
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  }
const receipt2 = {
  person: 'Jerrica',
  order: {
    main: 'Rice Bowl',
    protein: 'Ginger Soy Chix',
    rice: 'Sticky Rice',
    sauce: 'Korilla',
    toppings: [
      'Yuzu Pickled Sweet Pepper', 'Kale'
    ],
    drink: 'Korchata',
    cost: 19
  },
  paid: false
}
const receipt3 = {
  person: 'Matt',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: true
}



class App extends Component {
  // * we need to initialize our state inside our component above the render()
state = {
      receipt1:receipt1,
      receipt2:receipt2,
      receipt3:receipt3
    }

  render(){

    return(
      <div>
        {/* The way we pass props to our nested components is by assigning the value to the variable inside that componenet  */}
        {/* <h2><Reciept receipt={this.state.receipt1}/> </h2>
        <h2><Reciept receipt={this.state.receipt2} /></h2> */}

        <Reciept receipt ={this.state.receipt1} chicken="bok bok bok"/>
        <Reciept receipt ={this.state.receipt1} />
      </div>
    );
  }



}

export default App;