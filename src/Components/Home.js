import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Row from './Row';
import requests from '../Configuration/request';

function Home() {

    useEffect(()=>{
        document.title='Netfilx'
    })
  return (
    <div>
        <Navbar/>

        <Banner/>

        <Row title='Netflix originals' fetchUrl={requests.originals} isLarger />
        <Row title='Trending Now'fetchUrl={requests.trending}/>
        <Row title='Comdey Movies' fetchUrl={requests.ComedyMovies} />
        <Row title='Horror Movies'fetchUrl={requests.HorrorMovies}/>
        <Row title='Action Movies' fetchUrl={requests.ActionMovies} />
        <Row title='Romance'fetchUrl={requests.RomanceMovies}/>
        <Row title='Documentaries' fetchUrl={requests.Documentaries} />
      
    </div>
  )
}

export default Home
