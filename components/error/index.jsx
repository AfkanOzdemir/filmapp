import React from 'react'

const ErrorComponent = () => {
    return (
        <div className='w-full h-full flex items-center justify-center flex-col'>
            <h1 className='text-4xl mb-4'>An error has occurred. Sorry for that!</h1>
            <Link
                href="/" className="bg-primary text-white transition-all ease-linear hover:text-black mt-4 font-bold py-4 px-10 rounded">
                Go home
            </Link>
        </div>
    )
}

export default ErrorComponent