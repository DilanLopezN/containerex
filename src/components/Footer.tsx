import Image from 'next/image'
import logo from '../assets/clogo.jpg'
export function Footer() {
  return (

<div className="h-auto w-full bg-white text-zinc-900 flex flex-col items-center
p-4
">
   
   <div className="flex flex-col items-center"><h3>HORÁRIOS</h3>
   <ul className="flex flex-col items-center text-base gap-4">
    <li className="text-zinc-800">
    Segunda 11h-15h 
    </li>
    <li className="text-zinc-800">
    Terça à Sexta 11h-23h
    </li>
    <li className="text-zinc-800">
    Sábado e Domingo 12h-23h
    </li>
   </ul>
   </div>
   <div className="flex flex-col w-full items-center mt-4">
    <h2 className="text-lg font-semibold">Container ☆ D.C </h2>
    <p>Container - Espaço multicutural <br />
      Todos os direitos reservados.</p>

      <Image src={logo} alt="logo container" className='h-[120px] w-[160px]'/>
   </div>
  
   
    <span
    className='mt-2 text-sm
    text-zinc-500
    '
    >Made By Dilan Lopez
    </span>
    
</div>

  )
}