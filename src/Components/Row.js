import React, { useEffect, useState } from 'react';
import axios from '../Configuration/axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl="https://image.tmdb.org/t/p/original/"

export default function Row({title,fetchUrl,isLarger}) {

    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState('')

    useEffect(()=>{

        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;

        }
        fetchData();
    },[fetchUrl]);

    const opts={
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        }
    }

    // const handleClick=(movie)=>{
    //     if(trailerUrl){
    //         setTrailerUrl("");
    //     }else{
    //         movieTrailer(movie?.name||"")
    //         .then((url)=>{
    //             const urlParams=new URLSearchParams(new URL(url).search);
    //             setTrailerUrl(urlParams.get('v'));
    //         })
    //         .catch((error)=>console.log(error))
    //     }
    // }
    const handleClick = (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          movieTrailer(movie?.name || "")
            .then((url) => {
              if (url) {
                try {
                  const urlParams = new URLSearchParams(new URL(url).search);
                  const videoId = urlParams.get('v');
                  if (videoId) {
                    setTrailerUrl(videoId);
                  } else {
                    console.error("Invalid URL: Video ID not found");
                  }
                } catch (error) {
                  console.error("Error parsing URL:", error);
                }
              } else {
                console.error("No trailer URL found");
              }
            })
            .catch((error) => {
              console.error("Error finding trailer:", error);
            });
        }
      };
      

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row__posters">

            { movies.map((movie)=>(
                <img
                key={movie.id} onClick={()=>handleClick(movie)}
                className={`row__poster ${isLarger && 'row__posterLarger'}`}
                 src={`${baseUrl}${isLarger?movie.poster_path:movie.backdrop_path}`} alt="{movie.title}" />
            ))}
        </div>
        {trailerUrl &&<Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}
