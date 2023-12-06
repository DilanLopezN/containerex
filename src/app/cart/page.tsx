'use client';
import { useCart } from "@/hooks/useCart"
import { formatPrice } from "@/utils/format";
import { MinusCircle, PlusCircle } from "lucide-react";

export default function Cart() {
type Product = {
  id: number;
  amount: number;
}
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormated: formatPrice(Number(product.price)),
    subTotal: formatPrice(Number(product.price) * product.amount)
  }))
  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + Number(product.price) * product.amount
    }, 0)
  )

  function handleProductIncrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 })
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 })
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }

  return (
    <main className="flex flex-col">
   <div className="h-[800px]  mt-[82px]  flex flex-col items-center">
      <h1>SEU CARRINHO</h1>
      <table className=" w-full" >
      <thead>
          <tr className= "flex w-full   pr-4 pl-4 justify-between ">
            <th className="text-sm">PRODUTO</th>
            <th className="text-sm">QTD</th>
            <th className="text-sm">SUBTOTAL</th>

          </tr>
        </thead>
        <tbody>
          {cartFormatted.map(product => (
            <tr className="flex w-full  justify-between   pr-4 pl-4  items-center" key={product.id} data-testid="product">
              <td className="max-w-[120px]" >
                <img width="120px" className="rounded-md" src={product.imageUrl} alt={product.title} />
                <div className="flex flex-col">
                <strong className="truncate">{product.title}</strong>
                <span>{product.priceFormated}</span>
                </div>
                
              </td>
          
              <td >
                <div className="flex items-center justify-between" >
                  <button
                    type="button"
                    data-testid="decrement-product"
                    disabled={product.amount <= 1}
                    onClick={() => handleProductDecrement({amount: product.amount, id:Number( product.id)})}
                  >
                   <MinusCircle className="w-5 h-5" />
                  </button>
                  <input
                  className="bg-black w-6 text-center"
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={product.amount}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                    onClick={() => handleProductIncrement({amount: product.amount, id:Number( product.id)})}
                  >
                    <PlusCircle className="w-5 h-5"  />
                  </button>
                </div>
              </td>
              <td>
                <div className="flex flex-col p-2 gap-4">
                <strong>{product.subTotal}</strong>
                <button
                className="bg-black border-red-700 border-2 rounded-md p-2"
                  type="button"
                  data-testid="remove-product"
                  onClick={() => handleRemoveProduct(Number(product.id))}
                >
                    remover
                </button>

                </div>
               
              </td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </main>
 
  )
}