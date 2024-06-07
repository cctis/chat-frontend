import { useEffect, useState } from "react";
import { io } from 'socket.io-client'

// 1. inicia la conexion
const socket = io('http://localhost:9001/chat');

const ChatWebsocket = () => {

  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [nuevoUser, setNuevoUser] = useState('');
  const [mensajes, setMensajes] = useState([])
  const [listUsers, setListUsers] = useState([])

  useEffect(() => {

    // 2. registra el listener para el evento de newUSer
    socket.on('newUser', (data) => {
      console.log('usuario', data);
      setListUsers(users => [...users, data])
    })

    // 2. registra el listener para el evento de newUSer
    socket.on('newMessage', (data) => {
      console.log('mensaje', data);
      setMensajes(mssgs => [...mssgs, data])
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
  }, [])

  const crearUsuario = () => {
    socket.emit('newUser', {
      userId: socket.id,
      nick: nuevoUser
    })
  }

  const crearMensaje = () => {
    socket.emit('newMessage', {
      userId: socket.id,
      message: nuevoMensaje
    })
  }

  return (
    <div></div>
  );
};

export default ChatWebsocket;
