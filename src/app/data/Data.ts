import pumaPhoto from '../../common/assets/sneakers/puma.webp'
import nikePhoto from '../../common/assets/sneakers/nike.webp'
import adidasPhoto from '../../common/assets/sneakers/adidas.webp'
import {ProductSneaker} from "../../common/components/product/Product";

export const products:ProductSneaker[] = [
  {
    model: 'ADIDAS MODEL',
    collection: 'new collection1',
    price: '100200$',
    picture: adidasPhoto,

  },
  {
    model: 'PUMA MODEL',
    collection: 'new collection22',
    price: '200300$',
    picture: pumaPhoto
  },
  {
    model: 'NIKE MODEL',
    collection: 'new collection333',
    price: '300400$',
    picture: nikePhoto
  }
]