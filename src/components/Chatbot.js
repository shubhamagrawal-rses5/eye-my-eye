import React, { useState, useEffect } from "react";

import './App.css';

import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import API from "./ChatbotAPI";
import Mic from "./Mic";
import Header from './Header';
import Messages from './Messages';
import Input from "./Input";


export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("hi")}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);
   
  const send = async text => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)}
      />
    );
    setMessages(newMessages);
  };
  return (
    <div className="chatbox">
       <Mic onSend={send}/>
       <div className="App">
      <Header/>
      <Messages messages={messages}/>
      <Input onSend={send}/>  
    </div>
    </div>
  );
}

