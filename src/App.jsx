import { useState } from 'react';
import MoodSelector from "./components/MoodSelector";
import MoodDisplay from './components/MoodDisplay';

const moodEmojiMap = {
  Happy: "😊",
  Sad: "😢",
  Excited: "🤩",
  Tired: "😴",
};

function App() {
  const [mood, setMood] = useState("");

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <h2 className="p-2 text-center text-secondary">Homework No.3 Ex.2</h2>
          <div className="p-4 text-center">
            <MoodSelector moods={Object.keys(moodEmojiMap)} setMood={setMood}/>
            <MoodDisplay mood={mood} emoji={moodEmojiMap[mood]}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
