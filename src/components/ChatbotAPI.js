// import { ChatGPTAPI } from 'chatgpt';

// const header = new Headers({ "Access-Control-Allow-Origin": "*" });

const API = {
  GetChatbotResponse: async (text) => {
    // const {ChatGPTAPI} = await import('chatgpt');
    // const api = new ChatGPTAPI({ sessionToken: process.env.REACT_APP_SESSION_TOKEN});
    // await api.ensureAuth();
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (text === "hi") resolve("Welcome to AI Bot!");
        else resolve("blbblll!");
      }, 1000);
    });

  //   const response = await oraPromise(api.sendMessage(prompt), {
  //   text: prompt
  // })
  },
};

export default API;
