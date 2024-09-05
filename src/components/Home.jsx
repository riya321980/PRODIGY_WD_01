import React from 'react';
import Img from '../assets/3d.png';
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Home = () => {
    const [text] = useTypewriter({
        words: ["Hi, Welcome to the Responsive Landing Page.", "I'm a intern at Prodigy InfoTech."],
        loop:{}
    }) 

  return (
    <div className='px-10 md:px-40 grid py-20 md:py-0 grid-row-2 justify-between h-screen bg-gradient-to-br from-purple-100 to-purple-300 md:grid-cols-2'>
        <div className=' m-auto text-4xl px-5 text-purple-500'>
            {text}
            <Cursor />
        </div>
        <div className=' flex justify-center items-center place-content-center'>
            <img className='h-auto' 
            src={Img} alt="img" />
        </div>
    </div>
  )
}

export default Home
