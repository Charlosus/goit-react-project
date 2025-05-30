// we can use conditions in our components

// Operator && 

// wen use syntax &&

// condition && tag

// if condition will be true tag will be render 
// if condition return null, undefined or false 
// tag wont be rendered 

// export const Mailbox = ({ username, messages }) => {
//     return (
//         <>
//             <p> Hello {username} </p>
//             {messages.length > 0 && (
//                 <p> You have {messages.length} unread messages</p>
//             )}
//         </>
//     )
// }
//===================================================

// Ternary operator 

// we can use ternery operator if needed 
// condition ? value if true : value if false 

// to use it in code we need to add {} just like in first operator 

// <>
//	{condition ? value if condition was fulfilled : value if condition was not fulfilled}
// </> 

// export const Mailbox = ({ name, unreadMessages }) => {
//     return (
//         <div>
//             <p>Hello {name}</p>
//             <p>
//                 {unreadMessages.length > 0 
//                     ? `You have ${unreadMessages.length} unread messages`
//                     : "No unread messages"}
//             </p>
//         </div>
//     )
// }
//===================================================

// we can also add tags in ternary operator like this 
// import { MessageList } from "./MessagesList";

// export const Mailbox = ({ username, messages }) => {
//     return (
//         <div>
//             <p>Hello {username}</p>
//             {
//                 messages.length > 0 
//                 ? (<div>
//                     <p>You have {messages.length} unread messages </p>
//                     <MessageList messages={messages}/>
//                 </div>)
//                 : (<p>No unread messages</p>)
//             }
//         </div>
//     )
// }

