import SearchBar from "./components/SearchBar";
import {Container} from '@material-ui/core';
import Header from "./components/Header";
import { useState } from "react";
import Skeleton from "./components/SkeletonContent";

// API ENDPOINT
// https://api.lyrics.ovh/v1/TWICE/Dance the night away


function App() {

  const [inputQuery, setInputQuery] = useState('');

  const handleChange = event => {
    setInputQuery(event.target.value);
  };

  return (
    <div className="App">
      <Container maxWidth="sm" style={{backgroundColor:'#F3F3F3'}}>
        <Header />
        <SearchBar handleChange={handleChange}/>
        {inputQuery === '' ? <Skeleton /> : <h1>{inputQuery}</h1>}
      </Container>
    </div>
  );
}

export default App;
