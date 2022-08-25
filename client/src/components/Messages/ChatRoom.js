import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Messages from './Messages';
import SendMessage from './SendMessage';
import { db } from '../../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import "./Message.css"

const style = {
    main: `flex flex-col p-[10px]`,
};

const ChatRoom = (props) => {
    const { users, currentUser } = props
    const { userID } = useParams()
    const param = parseInt(userID)
    const user = users.find((user) => param === user.id)
    console.log(user);
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: user.id });
            });
            setMessages(messages);
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <main className={style.main}>
                {messages &&
                    messages.map((message) => (
                        <Messages key={message.id} message={message} currentUser={currentUser} />
                    ))}
            </main>

            <SendMessage scroll={scroll} currentUser={currentUser} />
            <span ref={scroll}></span>
        </>
    );
};

export default ChatRoom;