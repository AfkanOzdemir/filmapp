import Link from 'next/link';
import React from 'react';

const Movies = ({ movie }) => {
  if (movie.id && movie.title) {
    return (
      <Link
        href={`${movie.id ? '/movie/' + movie.id : ''}`}
        className='overflow-hidden rounded-lg relative box transition-transform ease-linear shadow-md hover:z-10 hover:transform hover:scale-110 before:w-full before:h-28 before:absolute before:bottom-0 before:bg-gradient-to-t before:from-slate-950 before:to-transparent group !text-white'
      >
        <img
          className="w-full h-full rounded-lg object-cover bg-gradient-to-t from-gray-900 to-transparent"
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : `https://mir-s3-cdn-cf.behance.net/project_modules/disp/4259ed110517397.5fefa413ec4a0.png`
          }
          alt=""
        />
        <div className='absolute bottom-0 w-full h-full flex flex-col justify-end p-2'>
          <h3 className='text-lg font-bold'>{movie.title}</h3>
          <p className='text-sm transition-all ease-linear opacity-0 group-hover:opacity-100'>{movie.release_date}</p>
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className='overflow-hidden rounded-lg relative box transition-transform ease-linear shadow-md
         hover:z-10 hover:transform hover:scale-110 before:w-full before:h-28 before:absolute before:-bottom-1
          before:bg-gradient-to-t before:from-slate-950 before:to-transparent group'
      >
        <img
          className="w-full h-full rounded-lg object-cover bg-gradient-to-t from-gray-900 to-transparent"
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : `https://mir-s3-cdn-cf.behance.net/project_modules/disp/4259ed110517397.5fefa413ec4a0.png`
          }
        />
        <div className='absolute bottom-0 w-full h-full flex flex-col justify-end p-2'>
          <h3 className='text-lg font-bold text-white'>{movie.title}</h3>
          <p className='text-sm transition-all text-white ease-linear opacity-0 group-hover:opacity-100'>{movie.release_date}</p>
        </div>
      </div>
    );
  }
};

export default Movies;