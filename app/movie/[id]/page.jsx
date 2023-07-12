"use client"
import React, { useEffect, useState } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import ErrorComp from '@/components/error';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import dotenv from 'dotenv';
dotenv.config();


const Page = ({ params }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
        }
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}`, options);
        const data = await response.json();
        setMovie(data);
        setIsLoading(false);
      } catch (err) {
        <ErrorComp />;
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div className='w-full h-[800px] flex items-center justify-center'>
      <div className='w-full h-[800px] absolute bg-black opacity-50'></div>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='w-full h-[800px] absolute bg-gradient-to-t from-black to-transparent'></div>
        {isLoading ? (
          <Skeleton containerClassName="w-full z-30" height={800} />
        ) : (
          movie.poster_path ? <img className='w-full h-full object-cover blur-sm' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /> : <img className='w-full h-full object-cover blur-sm' src='
          https://images.unsplash.com/photo-1527467779599-34448b3fa6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
          ' />
        )}
      </div>
      <div className='w-full p-8 md:w-4/5 xl:w-1/2 text-center gap-5 h-[500px] absolute flex flex-col items-center justify-center z-20'>
        <h1 className='text-5xl md:text-8xl font-bold text-white w-full h-auto text-center'>{movie.title}</h1>
        <p className='text-white text-center my-8 w-full h-auto'>{movie.overview}</p>
        <div className='w-full h-auto grid grid-rows-3 grid-cols-1 justify-center items-center  md:grid-cols-3 md:grid-rows-1 mx-auto'>
          <div className='w-full h-full flex flex-col items-center justify-center self-center justify-self-end'>
            <div className='w-full'>
              <h1 className='text-4xl font-bold text-primary mb-4'>Rating</h1>
              <p className='text-white text-lg font-bold'>{movie.vote_average}</p>
            </div>
          </div>
          <div className='w-full h-full flex flex-col items-center justify-center self-center justify-self-end'>
            <div>
              <AiOutlinePlayCircle className='text-9xl text-primary transition-all ease-linear hover:text-white cursor-pointer' />
            </div>
          </div>
          <div className='w-full h-full flex flex-col items-center justify-center self-center justify-self-end'>
            <div className='w-full'>
              <h1 className='text-4xl font-bold text-primary mb-4'>Süre</h1>
              <p className='text-white text-lg font-bold'>{movie.runtime} Dakika</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;