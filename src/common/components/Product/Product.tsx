import {PhotoViewer} from "../PhotoViewer/PhotoViewer";
import s from "./product.module.css"
import {useParams} from "react-router-dom";
import {products} from "../../../app/data/Data";

export function Product() {
  const params = useParams()
  const product = products.find(el => el.id === params.id)

  return (
    <div className={s.container}>
      {
        product
          ? <>
              <h2>model: {product.model}</h2>
              <PhotoViewer product={product}/>
              <div className={s.textContainer}>
                <span className={s.collection}>collection: {product.collection}</span>
                <span className={s.price}>price: {product.price}</span>
              </div>
            </>
          : <span>This model is not available, sorry for the inconvenience</span>
      }

    </div>
  );
}
