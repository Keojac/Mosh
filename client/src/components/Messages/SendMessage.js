import React, { useState } from 'react';
import {db} from '../../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'


// const style = {
//   form: `h-14 w-full max-w-[780px]  flex text-xl absolute bottom-0`,
//   input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
//   button: `w-[20%] bg-orange-500`,
// };

const SendMessage = ({scroll, currentUser}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    const {id, username} = currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: username,
        id,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form onSubmit={sendMessage} className="form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input"
        type='text'
        placeholder='Message'
      />
      <button className="button" type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;