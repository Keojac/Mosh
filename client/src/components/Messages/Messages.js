import React from "react";
import "./Chat.css"

// const style = {
//     message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
//     name: `fixed mt-[-4rem] text-gray-600 text-xs`,
//     sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
//     received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
// }

const Messages = ({ message, currentUser }) => {
    // console.log(message);
    // console.log(currentUser);

    const mesStyle = {
        borderRadius: "15px",
        backgroundColor: "#fbfbfb"
    }

    const divStyle = {
        borderRadius: "15px", 
        backgroundColor: "rgba(57, 192, 237,.2)"
    }

    const divStyle2 = {
        borderRadius: "15px",
        backgroundColor: "#fbfbfb"
    }

    if (message.id === currentUser.id) {
        // Current User sending message
        return (
            <div className="d-flex flex-row justify-content-end mb-4">
                <div className="p-3 me-3 border" style={divStyle2}>
                    <p>{message.text}</p>
                    <p className="name user_sent" >{message.name}</p>
                </div>
            </div>
        )
    } else if (message.id !== currentUser.id) {
        // Message being received
        return (
            <div className="d-flex flex-row justify-content-start mb-4">
                <div className="p-3 ms-3" style={divStyle}>
                    <p>{message.text}</p>
                    <p className="name user_received" >{message.name}</p>
                </div>
            </div>
        )
    }
}


export default Messages