// const alertStyles = {
//     margin: 8,
//     padding: "12px 16px",
//     borderRadius: 4,
//     backgroundColor: "gray",
//     color: "white"
// };

// export const Alert = ({children}) => {
//     return <p style={alertStyles}>{children}</p>
// }

// style are described at seperate file and imported here 

// import "./Alert.css";

// const Alert = ({ children }) => {
//     return <p className="alert">{children}</p>
// }

// export default Alert

// import "./Alert.css"

// const Alert = ({ variant, children }) => {
//     const className = ["alert", variant];
// // we declare arrow function Alert that takes two parameters
// // variant and children then inside we declare const for 
// // class to be dinamic and adjusting to type of 
// // alert we are using 

//     // here we make sure that classes would join 
//     return <p className={className.join(" ")}>{children}</p>
// }

// export default Alert

// import "./Alert.css";



// const Alert = ({ variant, outline, elevated, children }) => 
// { const classNames = ["alert", variant];
//     if (outline) {
//         classNames.push("is-outlined");
//     }
//     if (elevated) {
//         classNames.push("is-elevated");
//     }

//     return <p className={classNames.join(" ")}>{children}</p>
// }

// export default Alert

// we can u clsx library

// import clsx from "clsx";
// import "./Alert.css";

// const Alert = ({ variant, outlined, elevated, children }) => {
//     return (
//         <p 
//             className={clsx(
//                 "alert",
//                 variant,
//                 outlined && "is-outlined",
//                 elevated && "is-elevated"
//             )}
//         >
//             {children}
//         </p>
//     );
// };

// export default Alert

// import clsx from "clsx";
// import "./Alert.css";

// const Alert = ({ variant, outlined, elevated, children }) =>
// {
//     return(
//         <p 
//             className={clsx("alert", variant, {
//                 "in-outlined": outlined,
//                 "is-elevated": elevated
//             })}
//         >
//             {children}
//         </p>    
//     );
// };

// export default Alert

//======================================================

// #4 Example of utilizing module.css
// import clsx from "clsx"
// import css from "./Alert.module.css";

// console.log(css)

// const Alert = ({ variant ,children }) =>
// {
//     return <p className={clsx(css.alert, css[variant])}>{children}</p>
// };

// export default Alert

// ==========================================

// #5
// import css from "./Alert.module.css"

// const Alert = ({ variant, children }) => {
//     return <p className={css[variant]}>{children}</p>;
// };

// export default Alert

// ==========================================

// #6 

import clsx from "clsx";
import css from "./Alert.module.css";

const Alert = ({ variant, outlined, elevated, children }) => {
    return (
        <p
            className={clsx(css[variant], {
                [css.isOutlined]: outlined,
                [css.isElevated]: elevated,
            })}
        >
            {children}
        </p>    
    );
};

export default Alert