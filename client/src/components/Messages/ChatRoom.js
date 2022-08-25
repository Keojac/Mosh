import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Messages from './Messages';
import SendMessage from './SendMessage';
import { db } from '../../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import "./Chat.css"



const ChatRoom = (props) => {
    const { users, currentUser } = props
    const { userID } = useParams()
    const param = parseInt(userID)
    const user = users.find((user) => param === user.id)
    // console.log(user);
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                messages.push({ ...doc.data()});
            });
            setMessages(messages);
        });
        return () => unsubscribe();
    }, []);

    return (
        <section style={{backgroundColor: "#eee"}}>
            <div className="container py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <div className="card" id="chat1" style={{borderRadius: "15px"}}>
                            <div className="card-body">
                                {messages &&
                                    messages.map((message) => (
                                        <Messages key={message.id} message={message} currentUser={currentUser} />
                                    ))}


                                <SendMessage scroll={scroll} currentUser={currentUser} />
                                <span ref={scroll}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatRoom;