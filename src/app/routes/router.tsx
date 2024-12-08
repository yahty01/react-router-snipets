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
import {PrivetRoute} from "./PrivateRoute";
import {Navigate, RouteObject} from "react-router";
import LoginForm from "../../common/components/LoginForm/LoginForm";

//todo: Выписать типизацию\найти в документации
export const publicRoutes: RouteObject[] = [
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
    path: PATH.ERROR,
    element: <Error404/>
  },
  {
    path: PATH.LOGIN,
    element: <LoginForm />
  }
]
export const privateRoutes: RouteObject[] = [{
  path: PATH.PROTECTED,
  element: <ProtectedPage/>,
}]

export const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      ...publicRoutes,
      {
        element: <PrivetRoute auth={false}/>,
        children: [...privateRoutes]
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to={PATH.ERROR}/>, // Для любых несоответствующих путей
  }
]);

