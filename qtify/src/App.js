import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { StyledEngineProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from './API/API';


function App() {

  const [searchData, setSearchData] = useState();
  const [data, setData] = useState({});

  const generateData = (key, source) =>{
    source().then((data)=>{
    setData((prevData)=>{
      return {...prevData, [key]: data};
    })
  })
  }

  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, [])

  const {topAlbums=[], newAlbums=[], songs =[]} = data;

  return (
    <>
    <StyledEngineProvider injectFirst>
    <Navbar searchData={[...topAlbums, ...newAlbums]} />
    <Outlet context={{data:{topAlbums, newAlbums, songs}}} />
    </StyledEngineProvider>
    </>
  );
}

export default App;
