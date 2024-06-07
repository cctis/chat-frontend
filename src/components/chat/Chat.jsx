import {  useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import Notification from"./Notification.jsx"
import { toast } from "react-toastify";

function ShowMessage(dataInfo) {
  
  return (
    <div className={`message ${dataInfo.own ? 'own' : ''}`}>
     <img src="./avatar.png" alt="" /> 
    <div className="texts">
    <p className="nombreNick">{dataInfo.nick}</p>
      <p>
        {dataInfo.text}
      </p>
      <span>{dataInfo.time}</span>
    </div>
    
  </div>
  );
}


const Chat = (props) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleSend = (e) => {
    props.emmiter(text);
    toast.success("¡Mensaje!"); 
  }


  return (
    <div className='container'>
      <div className="chat">
        <div className="center">

        {props.messages.map((message) => <ShowMessage key={message.id} text={message.text} own={message.own} nick={message.nick} time={message.time}/>)}

        </div>
        <div className="bottom">
          <div className="icons">
            <img src="./img.png" alt="" />
            <img src="./camera.png" alt="" />
            <img src="./mic.png" alt="" />
          </div>
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="emoji">
            <img
              src="./emoji.png"
              alt=""
              onClick={() => setOpen((prev) => !prev)}
            />
            <div className="picker">
              <EmojiPicker open={open} onEmojiClick={handleEmoji} />
            </div>
          </div>
          <button className="sendButton" onClick={handleSend} >Send</button>
        </div>
      </div>
      <Notification />
    </div>
  );
};

export default Chat;
