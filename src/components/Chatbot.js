import React, {
  useState,
  useEffect
} from "react";

import './App.css';

import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import API from "./ChatbotAPI.js";
import Mic from "./Mic";
import Header from './Header';
import Messages from './Messages';
import Input from "./Input";
import {
  ChatGPTAPI
} from 'chatgpt';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  // const api = new ChatGPTAPI({ sessionToken: process.env.RECAT_APP_SESSION_TOKEN });
  // await api.ensureAuth();
  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([ <
        BotMessage
        key = "0"
        fetchMessage = {
          async () => await API.GetChatbotResponse("hi")
        }
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  async function a(text) {
    console.log(text);
    const data= await fetch('http://localhost:5000/chat', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        text
      }) // body data type must match "Content-Type" header
    });

    const response = await data.json();
    console.log(response.data);
    return response.data;
  }
  const send = async text => {
    const newMessages = messages.concat( <
      UserMessage key = { messages.length + 1 }
      text = {text}
      />, <BotMessage key = {messages.length + 2}
      fetchMessage = {async () => a(text)}
      />);
    setMessages(newMessages);
  };

  return ( <div className="chatbox">
       <Mic onSend={send}/>
       <div className="App">
      <Header/>
      <Messages messages={messages}/>
      <Input onSend={send}/>  
    </div>
    </div>
  );
}