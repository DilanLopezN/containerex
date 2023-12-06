import example1 from '../../assets/exampleimg.png'
import example2 from '../../assets/exampleimg1.png'
import example3 from '../../assets/exampleimg2.png'



interface DbDatProductsProps {
  lanches: Array<{
    id?: number;
    title?: string;
    price?: number;
    imageUrl?: string;
  }>
}
export const CarrouselImages = [
  example1, example2, example3
]

export const DbDataProducts: DbDatProductsProps = {
    "lanches": [
      {
        "id": 1,
        "title": "Barba melt",
        "price": 23.0,
        "imageUrl": "https://s2.glbimg.com/9zc9T-9LwXwKG_8XOq_9EF67bSQ=/620x455/e.glbimg.com/og/ed/f/original/2021/04/30/receita-hamburguer-smash-burguer-bacon-cheddaar.jpg"
      },
      {
        "id": 2,
        "title": "Barba Vegan",
        "price":  26.9,
        "imageUrl": "https://gowhere.com.br/wp-content/uploads/2021/04/Mania-de-Churrasco-PRIME-STEAK-BURGER-Crispy-Veggie-scaled.jpg"
      },
      {
        "id": 3,
        "title": "Barba Double Smash",
        "price": 28.99,
        "imageUrl": "https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/theplanetburger/178_6197a08770c01.jpg"
      },
  
    ]
  }