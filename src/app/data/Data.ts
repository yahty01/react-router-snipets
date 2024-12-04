import puma from '../../common/assets/sneakers/puma/puma.webp'
import pumaTwo from '../../common/assets/sneakers/puma/pumaTwo.webp'
import pumaDown from '../../common/assets/sneakers/puma/pumaDown.webp'
import nike from '../../common/assets/sneakers/nike/nike.webp'
import nikeTwo from '../../common/assets/sneakers/nike/nikeTwo.webp'
import adidas from '../../common/assets/sneakers/adidas/adidas.webp'
import adidasTwo from '../../common/assets/sneakers/adidas/adidasTwo.webp'
import adidasDown from '../../common/assets/sneakers/adidas/adidasDown.webp'
import {ProductSneaker} from "../../common/types/types";
import {v1} from "uuid";

export const products:ProductSneaker[] = [
  {
    brand: 'adidas',
    model: 'ADIDAS ONE',
    collection: 'new collection',
    price: '290$',
    picture: [adidasTwo, adidas, adidasDown],
    id: v1()
  },
  {
    brand: 'adidas',
    model: 'ADIDAS ONE',
    collection: 'new collection',
    price: '290$',
    picture: [adidasTwo, adidas, adidasDown],
    id: v1()
  },
  {
    brand: 'adidas',
    model: 'ADIDAS ONE',
    collection: 'new collection',
    price: '290$',
    picture: [adidasTwo, adidas, adidasDown],
    id: v1()
  },

  {
    brand: 'puma',
    model: 'PUMA ONE',
    collection: 'new collection',
    price: '200$',
    picture: [pumaTwo, puma, pumaDown],
    id: v1()
  },
  {
    brand: 'puma',
    model: 'PUMA ONE',
    collection: 'new collection',
    price: '200$',
    picture: [pumaTwo, puma, pumaDown],
    id: v1()
  },
  {
    brand: 'puma',
    model: 'PUMA ONE',
    collection: 'new collection',
    price: '200$',
    picture: [pumaTwo, puma, pumaDown],
    id: v1()
  },
  {
    brand: 'nike',
    model: 'NIKE ONE',
    collection: 'new collection',
    price: '360$',
    picture: [nikeTwo, nike, pumaDown],
    id: v1()
  },
  {
    brand: 'nike',
    model: 'NIKE ONE',
    collection: 'new collection',
    price: '360$',
    picture: [nikeTwo, nike, pumaDown],
    id: v1()
  },
  {
    brand: 'nike',
    model: 'NIKE ONE',
    collection: 'new collection',
    price: '360$',
    picture: [nikeTwo, nike, pumaDown],
    id: v1()
  }
]