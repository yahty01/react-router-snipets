import puma from '../../common/assets/sneakers/puma/puma.webp'
import pumaTwo from '../../common/assets/sneakers/puma/pumaTwo.webp'
import pumaDown from '../../common/assets/sneakers/puma/pumaDown.webp'
import nike from '../../common/assets/sneakers/nike/nike.webp'
import nikeTwo from '../../common/assets/sneakers/nike/nikeTwo.webp'
import nikeDown from '../../common/assets/sneakers/nike/nikeDown.webp'
import adidas from '../../common/assets/sneakers/adidas/adidas.webp'
import adidasTwo from '../../common/assets/sneakers/adidas/adidasTwo.webp'
import adidasDown from '../../common/assets/sneakers/adidas/adidasDown.webp'
import {v1} from "uuid";

//todo: Сделать разные фотографии красовок для одного бренда

export const adidasSneakers: ProductSneaker[] = [
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
]

export const pumaSneakers: ProductSneaker[] = [
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
]

export const nikeSneakers: ProductSneaker[] = [
  {
    brand: 'nike',
    model: 'NIKE ONE',
    collection: 'new collection',
    price: '360$',
    picture: [nikeTwo, nike, nikeDown],
    id: v1()
  },
  {
    brand: 'nike',
    model: 'NIKE ONE',
    collection: 'new collection',
    price: '360$',
    picture: [nikeTwo, nike, nikeDown],
    id: v1()
  },
  {
    brand: 'nike',
    model: 'NIKE ONE',
    collection: 'new collection',
    price: '360$',
    picture: [nikeTwo, nike, nikeDown],
    id: v1()
  }
]

export const allProducts: AllProducts = {
  'adidas': [...adidasSneakers],
  'puma': [...pumaSneakers],
  'nike': [...nikeSneakers],
}

export type ProductSneaker = {
  brand: string
  model: string;
  collection: string;
  price: string;
  picture: string[];
  id: string;
}

export type AllProducts = {
  [key: string]: ProductSneaker[];
}



