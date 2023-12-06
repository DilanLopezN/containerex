'use client'
import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { Product } from '../types'
import { productsData } from '@/constants'

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  productId: number
  amount: number
}

interface CartContextData {
  cart: Product[]
  addProduct: (productId: number) => Promise<void>
  removeProduct: (productId: number) => void
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== 'undefined'){
      const storagedCart = localStorage.getItem('@products:cart')  

      if (storagedCart) {
        return JSON.parse(storagedCart)
      }
  
    }
  
  
    return []
  })

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart]
      const productExist = updatedCart.find(product => product.id === productId)
    
      const currentAmount = productExist ? productExist.amount : 0
      const amount = currentAmount + 1


      if (productExist) {
        productExist.amount = amount
      } else {
        const data =  productsData.lanches.find(product => product.id === productId)
        const newProduct = {
          ...data,
          amount: 1
        }
        updatedCart.push(newProduct)
      }
      setCart(updatedCart)
      localStorage.setItem('@products:cart', JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro ao adicionar produto no carrinho')
    }
  }

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart]
      const productIndex = updatedCart.findIndex(
        product => product.id === productId
      )
      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1)
        setCart(updatedCart)
        localStorage.setItem('@products:cart', JSON.stringify(updatedCart))
      } else {
        throw Error()
      }
    } catch {
      toast.error('Erro ao remove produto do carrinho')
    }
  }

  const updateProductAmount = async ({
    productId,
    amount
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return
      }

      const updatedCart = [...cart]
      const productExist = updatedCart.find(product => product.id === productId)
      if (productExist) {
        productExist.amount = amount
        setCart(updatedCart)
        localStorage.setItem('@products:cart', JSON.stringify(updatedCart))
      } else {
        throw Error()
      }
    } catch {
      toast.error('Erro na alteração de quantidade do produto')
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}