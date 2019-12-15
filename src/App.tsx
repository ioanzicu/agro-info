import React from "react";
import "./App.css";
import Landing from "./pages/Landing";

const App: React.FC = () => {
  return (
    <div className="App">
      <Landing />
      <header className="App-header">
        <p>Welcome to the Agro Info App!!!</p>
      </header>
    </div>
  );
};

export default App;
