'use client'
import { CalendarDays, Menu, ShoppingCart, UtensilsCrossed, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/clogo.jpg'
import Image from 'next/image'

export function Header() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="w-full fixed z-50 border-b-2 border-zinc-200  shadow-light  bg-white">
      <div className="flex items-center mr-2 ml-2  justify-evenly  text-zinc-900 ">
       
        <Image  src={logo} alt="Logo principal" className='object-contain w-16 h-16'/>

        <strong className="font-semibold">Container ☆ D.C</strong>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <X className="h-7 w-7 text-zinc-900" />
          ) : (
            <Menu className="h-7 w-7 text-zinc-900" />
          )}
        </button>
      </div>

      {toggle && (
        <nav className="flex items-center absolute right-0 opacity-7 rounded-md bg-zinc-800 m-4 px-2 py-3 gap-2 border shadow-light">
          <ul className="flex flex-col items-center gap-4 p-2">
            <li>Home</li>
            <li className='flex items-center gap-1'> <UtensilsCrossed />Cardápio</li>
            <li  className='flex items-center gap-1'><CalendarDays /> Eventos</li>
            <li className='flex items-center gap-1'> <ShoppingCart /> Carrinho</li>
          </ul>
        </nav>
      )}
    </div>
  )
}
