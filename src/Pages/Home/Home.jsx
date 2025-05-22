import React from 'react'
import Hero from '../../Components/Hero/Hero'
import MoviesSeries from '../../Components/MoviesSeries/MoviesSeries'
import FilteredMovies from '../../Components/FilteredMovies/FilteredMovies'

const Home = () => {

  return (
    <div>
        <Hero />
        <MoviesSeries />
        <FilteredMovies />
    </div>
  )
}

export default Home