import React from 'react'
import { useState } from 'react';

function MovieCard({movie}) {
    console.log(movie);
    if(movie){ return (
        <div>
            <h1>{movie.Title}</h1>
            <img width="400px" src={movie.Images[0]} alt="" />
 
        </div>
      )}
 
}

export default MovieCard