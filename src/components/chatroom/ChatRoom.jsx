import { useEffect, useState, useContext } from "react";
import { Context } from "../../context/Context";
import List from "../../components/list/List"
import Chat from "../../components/chat/Chat"

import { io } from 'socket.io-client';

let emitted = false;

const ChatRoom = () => {
  // inicia el websocket
  // 1. inicia la conexion
  const { user } = useContext(Context);
  const socket = io('http://localhost:9001/chat');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const emitMessage = (message) => {
    console.log('mensage emitido', message);
    socket.emit('newMessage', { nick: user.nick, text: message });
  }

  if(!emitted){
    socket.emit('newUser', { nick: user.nick });
    emitted = true;
  }

  useEffect(() => {

    // 2. registra el listener para el evento de newUSer
    socket.on('newUser', (data) => {
      console.log('usuario', data);
      //setListUsers(users => [...users, data])
      setUsers(users => [...users, {id: data.nick, nick:data.nick}]);
      console.log('list users', users);
    })

    // 2. registra el listener para el evento de newUSer
    socket.on('newMessage', (data) => {
      console.log('mensaje', data);
      const isOwn = data.nick === user.nick;
      setMessages(messages => [...messages, {id: messages.length + 2, nick: data.nick, text: data.text, own: isOwn}])
    })

    // 2. registra el listener para el evento de newUSer
    socket.on('connect', (data) => {
      console.log('Connected to server:', socket.id);
    })

    // ultimo, cerrar las conexiones
    return () => {
      socket.off('connect')
      socket.off('newUser')
      socket.off('newMessage')
    }
  });

  return (
    <div className='container'>
      <List users={users} />
      <Chat messages={messages} emmiter={emitMessage} />
    </div>
  );
};

export default ChatRoom;
