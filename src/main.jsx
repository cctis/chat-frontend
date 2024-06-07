import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/Context.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login/Login";
import Chat from './components/chat/Chat';
import ChatRoom from './components/chatroom/ChatRoom.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/chat" element={<ChatRoom />} />
        </Routes>
      </Router>
    </ContextProvider>
  </React.StrictMode>,


)
