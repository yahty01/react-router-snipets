import { createHashRouter } from "react-router-dom";
import React from "react";
import {Adidas} from "../../common/components/pages/adidas/Adidas";
import {Error404} from "../../common/components/pages/Error404";
import WelcomeScreen from "../../common/components/pages/WelcomeScreen";
import {allProducts} from "../data/Data";
import {Puma} from "../../common/components/pages/puma/Puma";
import {Nike} from "../../common/components/pages/nike/Nike";
import {Product} from "../../common/components/Product/Product";
import {Prices} from "../../common/components/pages/Prices/Prices";
import App from "../App";
import {PATH} from "./path";


//Создаем роуты и тут же контралируем вложенность роутов
export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: PATH.WELCOME,
        element: <WelcomeScreen />,
      },
      {
        path: PATH.ADIDAS,
        element: <Adidas allSneakers={allProducts}/>
      },
      {
        path: PATH.PUMA,
        element: <Puma allSneakers={allProducts}/>
      },
      {
        path: PATH.NIKE,
        element: <Nike allSneakers={allProducts}/>
      },
      {
        path: PATH.PRODUCT,
        element: <Product products={allProducts}/>
      },
      {
        path: PATH.PRICES,
        element: <Prices />
      }
    ],
  },
]);

