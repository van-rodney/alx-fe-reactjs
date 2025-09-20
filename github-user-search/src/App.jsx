import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>GitHub User Search</h1>
      <p>Enter a GitHub username to search for their profile:</p>
      <SearchBar />
    </div>
  );
}

export default App;
