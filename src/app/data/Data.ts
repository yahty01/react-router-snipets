import puma from '../../common/assets/sneakers/puma/puma.webp'
import pumaTwo from '../../common/assets/sneakers/puma/pumaTwo.webp'
import pumaDown from '../../common/assets/sneakers/puma/pumaDown.webp'
import nike from '../../common/assets/sneakers/nike/nike.webp'
import nikeTwo from '../../common/assets/sneakers/nike/nikeTwo.webp'
import nikeDown from '../../common/assets/sneakers/nike/nikeDown.webp'
import adidas from '../../common/assets/sneakers/adidas/adidas.webp'
import adidasTwo from '../../common/assets/sneakers/adidas/adidasTwo.webp'
import adidasDown from '../../common/assets/sneakers/adidas/adidasDown.webp'

//todo: Сделать разные фотографии красовок для одного бренда

export const adidasSneakers: ProductSneaker[] = [
  {
    brand: 'adidas',
    model: 'ADIDAS ONE',
    collection: 'new collection',
    price: '290$',
    picture: [adidasTwo, adidas, adidasDown],
    id: 'adidas-one-new-collection'
  },
  {
    brand: 'adidas',
    model: 'ADIDAS TWO',
    collection: 'summer edition',
    price: '310$',
    picture: [adidasTwo, adidas, adidasDown],
    id: 'adidas-two-summer-edition'
  },
  {
    brand: 'adidas',
    model: 'ADIDAS THREE',
    collection: 'winter collection',
    price: '350$',
    picture: [adidasTwo, adidas, adidasDown],
    id: 'adidas-three-winter-collection'
  },
];

export const pumaSneakers: ProductSneaker[] = [
  {
    brand: 'puma',
    model: 'PUMA ONE',
    collection: 'new collection',
    price: '200$',
    picture: [pumaTwo, puma, pumaDown],
    id: 'puma-one-new-collection'
  },
  {
    brand: 'puma',
    model: 'PUMA TWO',
    collection: 'summer edition',
    price: '220$',
    picture: [pumaTwo, puma, pumaDown],
    id: 'puma-two-summer-edition'
  },
  {
    brand: 'puma',
    model: 'PUMA THREE',
    collection: 'exclusive series',
    price: '250$',
    picture: [pumaTwo, puma, pumaDown],
    id: 'puma-three-exclusive-series'
  },
];

export const nikeSneakers: ProductSneaker[] = [
  {
    brand: 'nike',
    model: 'NIKE ONE',
    collection: 'new collection',
    price: '360$',
    picture: [nikeTwo, nike, nikeDown],
    id: 'nike-one-new-collection'
  },
  {
    brand: 'nike',
    model: 'NIKE TWO',
    collection: 'limited edition',
    price: '400$',
    picture: [nikeTwo, nike, nikeDown],
    id: 'nike-two-limited-edition'
  },
  {
    brand: 'nike',
    model: 'NIKE AIR MAX 270',
    collection: 'classic',
    price: '360$',
    picture: [nikeTwo, nike, nikeDown],
    id: 'nike-air-max-270-classic'
  }
];

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



