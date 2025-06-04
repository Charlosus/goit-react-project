// const Product = () => {
//   return (
//     // atleast two elements need to have common parrent
//     // some thing like this 
//     // <h2>Tacos</h2>
//     //     <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt="Tacos With Lime" width="640" />
//     //     <p>Price: 999 Credits</p> 
//     // wouldnt work 
//     <div>
//       <h2>Tacos</h2>
//         <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt="Tacos With Lime" width="640" />
//         <p>Price: 999 Credits</p>
//     </div>
//   );
// };

// export default Product

//===================================================
// if we dont need div we would have to do something like thi
// using <> </> this creats fragment 
// export const Product = () => {
//   return (
//     <>
//       <h2>Tacos</h2>
// 			<img src="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>" alt="Tacos With Lime" width="640" />
//       <p>Price: 999 credits</p>
//     </>
//   );
// };
//===================================================
// every componet declare one parameter - props
// witch always will be object that will hold 
// all passed values

// export const Product = props => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//         <img src={props.imgUrl} alt={props.name} width="480" />
//         <p> Price: {props.price} Credits</p>
//     </div>
//   )
// }
//===================================================

// so if its a object we can destructurize it 
// export const Product = ({ name, imgUrl, price }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//         <img src={imgUrl} alt={name} width="480" />
//         <p> Price: {price} Credits</p>
//     </div>
//   )
// }

//===================================================

// if one objects propety would not bet passed 
// this would result as undefined
// we can add a default value = 

// export const Product = ({ 
//   name, 
//   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder", 
//   price }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//         <img src={imgUrl} alt={name} width="480" />
//         <p> Price: {price} Credits</p>
//     </div>
//   )
// }

//===================================================
// proptype usefull tool to defined

import PropTypes from "prop-types";
export default Product
const Product =({
    name,
    imgUrl='<https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
    price,
}) => (
    <div>
        <img src={imgUrl} alt={name} width="480" />
        <h2>{name}</h2>
        <p>Price: {price} credits</p>
    </div>
);

Product.PropTypes = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    price: PropTypes.number.isRequired,
}