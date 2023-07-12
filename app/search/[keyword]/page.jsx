"use client"
import React, { useEffect, useState } from 'react';
import Movies from '@/components/movies';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Link from 'next/link';
import dotenv from 'dotenv';
dotenv.config();

const Page = ({ params }) => {
    const [isLoading, setIsLoading] = useState(true);
    const keyword = params.keyword;
    const [movies, setMovies] = useState([]);

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
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}`, options);
                const data = await response.json();
                setMovies(data.results);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, [keyword]);

    return (
        <div className='w-full h-full flex items-center justify-center'>
            {isLoading ? (
                <div className='p-5 w-full h-auto grid items-start justify-center container mx-auto gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                    {Array(15).fill(null).map((_, i) => (
                        <Skeleton key={i} className='w-[50px] h-[250px] sm:w-[150px] sm:h-[350px] md:w-[250px] md:h-[155px] 2xl:w-[350px] 2xl:h-[255px]' />
                    ))}
                </div>
            ) : (
                movies && movies.length > 0 ? (
                    <div className='p-5 w-full h-auto grid items-start justify-center container mx-auto gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                        {movies.map((movie, index) => (
                            <Movies key={index} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='w-full h-full flex items-center justify-center flex-col '>
                        <h1 className='text-4xl mb-4'>We couldn&apos;t find the movie you looking for!</h1>
                        <Link
                            href="/" className="bg-primary text-white transition-all ease-linear hover:text-black mt-4 font-bold py-4 px-10 rounded">
                            Go home
                        </Link>
                    </div>
                )
            )}
        </div>
    );
};

export default Page;