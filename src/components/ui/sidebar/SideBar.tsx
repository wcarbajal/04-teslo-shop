'use client'
import { useUIStore } from '@/store'
import clsx from 'clsx'
import Link from 'next/link'

import React from 'react'
import { IoCloseOutline, IoLogInOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'

export const SideBar = () => {

const isSideMenuOpen = useUIStore( state => state.IsSideMenuOpen )
const closeMenu = useUIStore( state => state.closeSideMenu )

    return (
        <div className='  '>
            {/*  Background black */}
            {
                isSideMenuOpen && (
                    <div
                    
                        className='fixed top-0 left-0 w-screen h-screen bg-black z-10 opacity-30 '
                    />
                )
            }


            
            {/* Blur  */}
            {
                isSideMenuOpen && (

                    <div onClick={ closeMenu } className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm' />
                )
            }

            

            {/* SideMenu */}

            <nav
                // todo: efecto de slise
                className={
                    clsx('fixed p-5 top-0 right-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
                    {
                        'translate-x-full': !isSideMenuOpen
                    }
                    )
                }>
                <IoCloseOutline
                    size={50}
                    className='absolute top-5 right-5'
                    onClick={() => closeMenu() }
                />

                {/* Imput de busqueda */}
                <div className='relative mt-14'>
                    <IoSearchOutline size={20} className='absolute top-2 left-2' />
                    <input
                        type="text"
                        placeholder='Buscar'
                        className='w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
                    />

                </div>

                {/* Menu */}

                <Link
                    href="/"
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoPersonOutline size={30}/>
                    <span className='ml-3 text-xl '>Perfil</span>
                </Link>

                <Link
                    href="/"
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoTicketOutline size={30}/>
                    <span className='ml-3 text-xl '>Ordenes</span>
                </Link>

                <Link
                    href="/"
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoLogInOutline size={30}/>
                    <span className='ml-3 text-xl '>Ingresar</span>
                </Link>

                <Link
                    href="/"
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoLogInOutline size={30}/>
                    <span className='ml-3 text-xl '>Salir</span>
                </Link>

                {/* Linea de separacion  */}
                <div className='w-full h-px bg-gray-200 my-10' />
                {/* Linea de separacion  */}

                <Link
                    href="/"
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoShirtOutline size={30}/>
                    <span className='ml-3 text-xl '>Productos</span>
                </Link>

                <Link
                    href="/"
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoTicketOutline size={30}/>
                    <span className='ml-3 text-xl '>Ordenes</span>
                </Link>
                <Link
                    href="/"
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoPeopleOutline size={30}/>
                    <span className='ml-3 text-xl '>Usuarios</span>
                </Link>

            </nav>

        </div>

    )
}
