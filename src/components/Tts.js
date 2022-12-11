// import Speech from "speak-tts";

// function _init(text_data) {
//   const speech = new Speech();
//   speech
//     .init({
//       volume: 0.5,
//       lang: "en-GB",
//       rate: 1,
//       pitch: 1,
//       listeners: {
//         onvoiceschanged: (voices) => {
//           console.log("Voices changed", voices);
//         }
//       }
//     })
//     .then((data) => {
//       _prepareSpeakButton(speech,text_data);
//     });
// }

// function _prepareSpeakButton(speech,text_data) {
//   const language = true;
//   const voice = true;
//   if (language) speech.setLanguage("en-US");
//   if (voice) speech.setVoice(speaker);
//   speech.speak({
//     text: text_data,
//     queue: false
//   });
// }
// const speaker = "Microsoft Zira - English (United States)";
// // const text_data = response.data;
// // _init(text_data);