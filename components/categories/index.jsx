"use client"

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'


const Categories = () => {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
    const Tabs = [{
        name: 'Trends',
        link: 'popular'
    },
    {
        name: 'Now Playing',
        link: 'now_playing'
    },
    {
        name: 'Upcoming',
        link: 'upcoming'
    }]
    return (
        <div className='w-full h-auto container mx-auto px-4 flex items-center justify-center my-14 mb-64 md:mb-14'>
            <div className="h-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
                {Tabs.map((category) => (
                    <Link
                        key={category.name}
                        className={`flex items-center justify-center bg-primary rounded-lg w-56 h-20 
                    text-white text-center text-xl font-bold  transition-all 
                    ease-linear duration-300 cursor-pointer ${category.link === genre ? '!text-black' : ''} hover:text-black`}
                        href={`/?genre=${category.link}`}
                    >
                        <p className='font-extrabold'>{category.name}</p>
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default Categories