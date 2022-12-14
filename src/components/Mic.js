import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./Mic.css";
import microPhoneIcon from "./microphone.svg";


function Mic({onSend}) {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  // const [input,setinput] = useState();
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
    onSend(transcript);
  };
  const handleReset = () => {
     setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
    resetTranscript();
  };
  return (
    <>
    <div className="microphone-wrapper">
      <div className="mircophone-container">
        <div
          className="microphone-icon-container"
          ref={microphoneRef}
          onClick={handleListing}
        >
          <img src={microPhoneIcon} className="microphone-icon" />
        </div>
        <div className="microphone-status">
          {isListening ? "Listening........." : "Click to start Listening"}
        </div>
        {isListening && (
          <div>
          <button className="microphone-stop btn" onClick={stopHandle}>
            Stop
          </button>
          </div>
        )}
        {transcript && (
        <button className="microphone-reset btn" onClick={handleReset}>
            Reset
          </button>
      )} 
      </div>
      <div className="microphone-result-container">
      {transcript && (
        
        <div className="microphone-result-text">{transcript}</div>
       
      )} 
      </div>
    </div>
    </>
  );
}
export default Mic;