'use client'
import { ShoppingCart } from 'lucide-react'
import { Footer } from "@/components/Footer";
import { productsData } from "@/constants";
import { useCart } from '@/hooks/useCart';

export default function Menu() {
  const {addProduct} = useCart()
  return (
 
    <main className="flex flex-col">
      <div className="h-[800px] mt-[82px] mr-5 ml-5 flex flex-col items-center">
      <div>
        <ul className="flex gap-2">
          <li className="border m-2 p-2 rounded-md border-gray-400" >Lanches</li>
          <li className="border m-2 p-2 rounded-md border-gray-400" >Bebidas</li>
          <li className="border m-2 p-2 rounded-md border-gray-400" >Sobremesas</li>
        </ul>
      </div>

      <div className="flex flex-wrap w-[320px] h-[600px] overflow-y-auto m-2  gap-4 items-center justify-center">

      {
        productsData.lanches.map((product) => (
          <div className="flex flex-col w-full h-48 mb-20 relative items-center">
            <img className="opacity-[0.7] rounded-md h-[220px] w-[260px]"  src={product.imageUrl} alt="" />
            
            <div className="absolute inset-0 ">
              <div className="
              flex
              flex-col
              items-center justify-center border border-gray-200 w-1/2  h-auto rounded-full bg-zinc-800">
              <h3 className="text-sm font-bold text-white opacity-[1.1] ">{product.title}</h3>
            <div className="flex gap-1 "><span
            className="font-md
            opacity-[1.1]
            text-white
            " 
            >{new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency'
            }).format(product.price ?? 0)}</span>
            </div>

              </div>
            
            
            </div>
           
            <button 
            onClick={() => addProduct(Number(product.id))}
            className="w-4/5 flex items-center justify-center gap-4 border m-2 border-white rounded-md">
            <ShoppingCart />
              Adicionar ao carrinho</button>
          </div>
        ))
      }


      </div>
     
      </div>
        <Footer/>
    </main>
   
  )
}
