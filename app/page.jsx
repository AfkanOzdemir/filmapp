"use client"
import ErrorComponent from '@/components/error'
import Movies from '@/components/movies'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import dotenv from 'dotenv';
dotenv.config();

const Home = ({ searchParams }) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        }
      };
      setIsLoading(true);
      if (searchParams.genre == null) {
        const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US`, options)
        const data = await res.json()
        setMovies(data.results)
        setIsLoading(false);
        console.log(searchParams.genre)
      }
      else if (searchParams.genre == "popular" || searchParams.genre == "now_playing" || searchParams.genre == "upcoming" || searchParams.genre == "top_rated") {
        const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?language=en-US`, options)
        const data = await res.json()
        setMovies(data.results)
        setIsLoading(false);
        console.log(searchParams.genre)
      }
      else if (searchParams.genre == "movie" || searchParams.genre == "tv") {
        const res = await fetch(`https://api.themoviedb.org/3/discover/${searchParams.genre}?language=en-US`, options);
        const data = await res.json()
        setMovies(data.results)
        setIsLoading(false);
        console.log(searchParams.genre)
      }
      else {
        <ErrorComponent />
      }

    }


    fetchData();
  }, [searchParams.genre])



  return (
    <div className='p-5 w-full h-auto grid items-start justify-center container mx-auto gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      {isLoading ? (
        Array(20).fill(null).map((_, i) => (
          <Skeleton key={i} className='w-[50px] h-[250px] sm:w-[150px] sm:h-[350px] md:w-[250px] md:h-[155px] 2xl:w-[350px] 2xl:h-[255px]' />
        ))
      ) : (
        movies.map((movie, index) => (
          <Movies key={index} movie={movie} />
        ))
      )}
    </div>
  )
}

export default Home