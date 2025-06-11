import React from 'react'
import Hero from '../../Components/Hero/Hero'
import MoviesSeries from '../../Components/MoviesSeries/MoviesSeries'
import FilteredMovies from '../../Components/FilteredMovies/FilteredMovies'
import Gemini from '../../Components/Gemini/Gemini'

const Home = () => {

  return (
    <div>
        <Hero />
        <MoviesSeries />
        <FilteredMovies />
        <Gemini />
    </div>
  )
}

export default Home