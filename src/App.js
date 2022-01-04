import React from "react";
import "./App.css";

function Card() {
  const [text, setText] = React.useState("Front Side");
  
  function handleClick() {
    setText("Back Side")
  }

    return <div className="flashcard" onClick={handleClick}>{text}</div>;
}

function App() {
  return (
    <div className="App">
      <h1>Flashcards</h1>
      <h2>Click on a card to see the answer!</h2>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
