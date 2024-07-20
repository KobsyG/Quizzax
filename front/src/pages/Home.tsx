import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='relative h-full bg-blue-400 flex flex-col justify-center items-center'>
            {/* <div className='h-[30px] my-auto bg-gray-400'>QUIZZAX ! Le site de Repiax pour faire des Quizzax</div> */}
            <button className='h-[30px] w-[200px] bg-red-600 my-auto'>Lancer une game</button>
            <button className='h-[30px] w-[200px] bg-red-600 my-auto'><Link to={'/questions'}>Questions</Link></button>
        </div>
    )
}

export default Home