import React from "react";
import PhotoList from "./components/PhotoList";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

// Note: Rendering a single component to build components in isolation

const App = () => {
  // const photos = [...Array(3)];
  
  return (
    <div className="App">
     <PhotoList />
    </div>
  );
};

export default App;
