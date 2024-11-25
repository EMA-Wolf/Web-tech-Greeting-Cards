import React from 'react'

const GreetingCards = ({title, message}) => {
  return (
    <div className='border p-8 h-72 flex items-center justify-center flex-col gap-2 rounded-xl bg-gray-500'>
      <h1 className='text-3xl'>{title}</h1>
      <p>{message}</p>
    </div>
  )
}

export default GreetingCards
