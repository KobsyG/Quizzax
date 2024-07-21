import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex h-[10vh] text-[30px] items-center text-white bg-[#282c34]'>
            <button className='ml-[15px]'><Link to={'/'}>maison</Link></button>
            <div className='mx-auto'>QUIZZAX ! L'outil de Repiax pour faire des Quizzax</div>
        </div>
    )
}

export default NavBar