import SearchBar from "./components/SearchBar";
import {Container} from '@material-ui/core';
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Skeleton from "./components/SkeletonContent";
import YoutubeFetch from "./components/YoutubeFetch";
import Content from "./components/Content";


// API ENDPOINT
// https://api.lyrics.ovh/v1/TWICE/Dance the night away

function App() {

  const [inputQuery, setInputQuery] = useState('');
  const [ytData, setYtData] = useState(null);
  const [ytVid, setYtVid] = useState('');
  const [ytVidId,setYtVidId] = useState('');
  const ytVidLink = 'https://www.youtube.com/embed/';
  const api_key = `${process.env.REACT_APP_YT_KEY}`;
  console.log(api_key);
  const handleChange = event => {
    setInputQuery(event.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputQuery !== ''){
      const url = `https://www.googleapis.com/youtube/v3/search?q=${inputQuery}&maxResults=1&part=snippet&type=video&key=${api_key}`;
      YoutubeFetch(url).then((e)=> setYtData(e));
    }
  }; 

  useEffect(() => {
    if(ytData !== null){
      setYtVid(ytVidLink.concat(ytData.items[0].id.videoId));
      setYtVidId(ytData.items[0].id.videoId);
    }
  }, [ytData]);

  return (
    <div className="App">
      <Container maxWidth="sm" style={{backgroundColor:'#F3F3F3'}}>
        <Header />
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
        {inputQuery === '' ? 
          <Skeleton /> : 
          ytVid === '' ?
          <Skeleton /> :
          <Content source={ytVid} vidId={ytVidId}/>
        } 
      </Container>
    </div>
  );
}

export default App;
