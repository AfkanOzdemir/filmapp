"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useSearchParams } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')

  const menu = [
    {
      name: 'Films',
      link: 'movie'
    },
    {
      name: 'Series',
      link: 'tv'
    }
  ]

  const searchFunction = (e) => {
    if (e.key === 'Enter' && keyword.length > 3) {
      router.push(`/search/${keyword}`)
      setKeyword('')
    }
  }

  const handleSearch = () => {
    if (keyword.length > 3) {
      router.push(`/search/${keyword}`)
      setKeyword('')
    }
  }

  return (
    <div className='w-full h-auto bg-primary'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-between items-center container mx-auto p-4">
        <div className="flex items-center justify-self-center">
          <div className="flex items-center">
            <Link href="/">
              <h1 className='font-extrabold text-3xl text-black'>FilmApp</h1>
            </Link>
          </div>
        </div>
        <div className='space-x-5 w-auto justify-self-center'>
          {menu.map((item, index) => (
            <Link
              key={index}
              className='text-white hover:text-black font-bold text-xl transition-all ease-linear duration-300 p-5'
              href={`/?genre=${item.link}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-self-center">
          <div className="flex items-center space-x-2">
            <input
              onKeyDown={searchFunction}
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              type="text"
              className='bg-transparent border-2 w-40 h-9 transition-all ease-linear focus:w-64 border-white rounded-full p-4 outline-none'
            />
            <BiSearch
              className='text-white text-3xl cursor-pointer'
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header