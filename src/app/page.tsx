import { Carrousel } from "@/components/Carrousel";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
 
    <main className="flex flex-col">
      <div className="h-[800px] mt-[82px] mr-5 ml-5 flex flex-col items-center">
        <h1>
         Espaço multicultural e gastronômico
         <br />
          Se você é diferente, faça a diferença!🤘🏻🔥
        </h1>
        <div className="mt-4 w-full flex flex-col items-center">
          <p className="text-lg font-semibold">
            Conheça nosso espaço
          </p>
          <Carrousel/>


          <button className="bg-white  text-zinc-800 font-semibold px-3 py-2 rounded-lg
            mt-4
          backdrop-blur-md
          
          border border-solid border-white border-opacity-18
          ">Fazer Reserva</button>
         


        </div>
     
      </div>
        <Footer/>
    </main>
   
  )
}
