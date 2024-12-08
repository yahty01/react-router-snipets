import {createHashRouter} from "react-router-dom";
import React from "react";
import {Adidas} from "../../common/components/pages/adidas/Adidas";
import {Error404} from "../../common/components/pages/Error404";
import {allProducts} from "../data/Data";
import {Puma} from "../../common/components/pages/puma/Puma";
import {Nike} from "../../common/components/pages/nike/Nike";
import {Product} from "../../common/components/Product/Product";
import {Prices} from "../../common/components/pages/Prices/Prices";
import App from "../App";
import {PATH} from "./path";
import {ProtectedPage} from "../../common/components/pages/Protected/ProtectedPage";
import {WelcomeScreen} from "../../common/components/pages/WelcomeScreen";
import {ProtectedRoute} from "./ProtectedRoute";
import {Header} from "../../common/components/Header/Header";
import {Footer} from "../../common/components/Footer/Footer";
import s from "../../common/components/Site.module.css";
import {Sidebar} from "../../common/components/sidebar/Sidebar";

//Создаем роуты и тут же контралируем вложенность роутов
export const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:
      <>
        <Header/>
        <div className={s.container}>
          <Sidebar/>
          <div className={s.content}>
            <Error404/>
          </div>
        </div>
        <Footer/>
      </>,
    children: [
      {
        path: PATH.WELCOME,
        element: <WelcomeScreen/>,
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
        element: <Product products={allProducts}/>,
        errorElement: <Error404/>
      },
      {
        path: PATH.PRICES,
        element: <Prices/>,
      },
      {
        path: PATH.PROTECTED,
        element:
          <ProtectedRoute auth={false}>
            <ProtectedPage/>
          </ProtectedRoute>,
      }
    ],
  },
]);

