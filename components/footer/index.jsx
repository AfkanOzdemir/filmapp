import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="flex items-center justify-center mt-9 py-10 text-white">
      Made with ❤️ by&nbsp;
      <Link href="https://afkanozdemir.dev" target="_blank" className="underline">
        Afkan Ozdemir
      </Link>
    </footer>
  )
}

export default Footer