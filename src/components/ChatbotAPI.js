
const API = {
  GetChatbotResponse: async (text) => {

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (text === "hi") resolve("Welcome to AI Bot!");
        else resolve("blbblll!");
      }, 1000);
    });

  },
};

export default API;
