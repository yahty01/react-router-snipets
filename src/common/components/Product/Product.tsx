import {PhotoViewer} from "../PhotoViewer/PhotoViewer";
import s from "./product.module.css"
import {useParams} from "react-router-dom";
import {AllProducts, ProductSneaker} from "../../../app/data/Data";

type Props = {
  products: AllProducts
}
//todo: Доделать обработку неправильных маршрутов
export function Product({products}: Props) {
  const {brand, id} = useParams()
  if (brand && id) {
    const product: ProductSneaker = products[brand].filter(el => el.id === id)[0]
    return (
      <div className={s.container}>
        {product ?
          <>
            <h2>model: {brand}</h2>
            <PhotoViewer product={product}/>
            <div className={s.textContainer}>
              <span className={s.collection}>collection: {product.collection}</span>
              <span className={s.price}>price: {product.price}</span>
            </div>
          </>
          : <span>This model is not available, sorry for the inconvenience</span>
        }
      </div>
    )
  } else return <span>This! model is not available, sorry for the inconvenience</span>


}
