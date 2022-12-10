const API = {
  GetChatbotResponse: async text => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (text == "hi") resolve("Welcome to AI Bot!");
        else resolve("Hello : " + text);
      }, 100);
    });
  }
};

export default API;