// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import {Product} from './Product.jsx';
import { Mailbox } from './Mailbox.jsx';

export default function App() {
  return (
    <div>
      <h2>Products</h2>
      {/* <Product 
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      /> 
      <Product  
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
        />
      <Product /> */}
      <Mailbox 
      username = "Adam"
      messages = {["pies", "cat" ]}/>
    </div>
  );
}