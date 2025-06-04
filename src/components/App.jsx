// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import './App.css'
// import {Product} from './Product.jsx';

// import { Mailbox } from './Mailbox.jsx';

// import BookList from './BooksList';
// import { favouriteBooks } from '../data/books';
// import Card from './Card';

// export default function App() {
//   return (
//     <div>
//       {/* <h2>Products</h2> */}
//       {/* <Product 
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       /> 
//       <Product  
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//         />
//       <Product /> */}
//       {/* <Mailbox 
//       username = "Adam"
//       messages = {["pies", "cat" ]}/> */}
//       {/* <h1>Books of the week</h1>
//       <BookList books={favouriteBooks} /> */}
// {/* //=================================================== */}
//       {/* for now we been passing components with single tags 
//       if we would try to use double tags like this 
//       // Deklaracja
//         const Card = ({ text }) => {
//         return <div>{text}</div>;
//           };

//         // Użycie
//         <Card text="Message as a text prop" />

//       <Card>Text between opening and closing tag</Card>

//       text wont apear because browser dont have place for text 
      
//       to use normal double tags we need to use prop.children
      
//       in Card component*/}

//       <Card>
//         <h2>Card title</h2>
//         <p>Text content</p>
//       </Card>
//     </div>
//   );
// }
//===================================================

// style CSS 
// there a few ways to implement css styles 
// the Eseast and an the most limited is in line styles adding 
// style ={{}} as object in tags 

// export default function App() {
//   return ( 
//     <p 
//       style={{
//         margin: 8,
//         padding: "12px 16px",
//         borderRadius: 4,// two word property are
//         backgroundColor: "gray",// written in cameCase
//         color: "white",
//       }}
//       >
//         Please update your email!
//       </p>
//   );
// };

// if we have many places that we wnat use inline styles styles 
// we can declera styles in const and add name to tags


// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white"
// }
// export const App = () => {
//   return ( 
//     <>
//     <p style={alertStyles}>
//         Please update your email!
//       </p>
//       <p style={alertStyles}>
//         There was an error during transaction!
//       </p>
//      <p style={alertStyles}>
//        Payment received, thank you for your purchase!
//       </p>
//       </>
//   );
// };

// export default App

//===================================================

// now all css style are in seperate css that are imported to seperate 

// import Alert from "./Alert";
// // then imported to Alert.jsx and then exported form Alert.jsx
// const App = () => {
//   return (
//     <>
//       <Alert variant="info">Would you like to browse our recommended products?</Alert>
//       <Alert variant="error" outlined>Would you like to browse our recommended products?</Alert>
//       <Alert variant="success" elevated>Would you like to browse our recommended products?</Alert>
//       <Alert variant="warning" outline elevated>Would you like to browse our recommended products?</Alert>
//     </>
//   )
// }

// export default App
//===================================================

// #3. using again styles we can use clear css but its not efective need to 
// to be unifidein whole project and be cerfule to not to overright existing
// rather then writing one basic class we an determine a wariants for them 

// check Button.jsx, LoginButton.jsx and FollowButton.jsx 

//===================================================

// #4 css modul

// If we want to not to care about class names we can use class modules 
// moduls are compiled in bundler befor passed browser so 
// when compiled classes are assigned with new uniqe names 
// and thats why we can name our class what ever we want 

// to use module we need to creat file with .module.css and import it to 
// element file 

// to see go to Alert and Alert.module.css

// Code 

// import Alert from './Alert'

// export const App = () => {
//   return (
//   <>
//     <Alert variant="info"> Would you like to browse our recommended products?</Alert>
//     <Alert variant="error"> There was an error during your last transaction</Alert>
//     <Alert variant="success">Payment received, thank you for your purchase</Alert>
//     <Alert variant="warning">Please update your profile contact information</Alert>
//   </>)
// }

//======================================================

// #5 Composes

// one of a key utility of .module.css is to use 
// compose css style to makes them inherit styles form 
// passed style but not multiplaying code

// .main-class{
//    some: styles;
// }
// .css-style{
// composes: main-class;
//  some-addidtional: style;  
// }


// import Alert from './Alert'

// export const App = () => {
//   return (
//   <>
//     <Alert variant="info"> Would you like to browse our recommended products?</Alert>
//     <Alert variant="error" outlined>There was an error during your last transaction</Alert>
//     <Alert variant="success" elevated>Payment received, thank you for your purchase</Alert>
//     <Alert variant="warning" outlined elevated>Please update your profile contact information</Alert>
//   </>)
// }

//======================================================

// #6 incons library 

// you can install library of icons that are 
// set to use 

//npm install react-icons

// icons can be easly ad as tag and can be easly 
// adjusted to the requairemnts

// <p><HiUser className="my-icon" size="24" /> {name}</p>

 import UserMenu from './UserMenu';

export const App = () => {
  return (
  <>
    <UserMenu name="Adam"/>
  </>
 );
};

 