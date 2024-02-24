import React from "react";
import PhotoList from "./components/PhotoList";
import TopicList from "components/TopicList";
import TopNavigation from "components/TopNavigationBar";

import "./App.scss";

// Note: Rendering a single component to build components in isolation

const App = () => {
  // const photos = [...Array(3)];
  
  return (
    <div className="App">
      <TopNavigation />
     <PhotoList />
    </div>
  );
};

export default App;
