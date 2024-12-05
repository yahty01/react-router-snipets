import s from "../Site.module.css";
import {Navigate, Route, Routes} from "react-router-dom";
import {Adidas} from "../pages/adidas/Adidas";
import {Puma} from "../pages/puma/Puma";
import {Nike} from "../pages/nike/Nike";
import {Error404} from "../pages/Error404";
import React from "react";
import {PATH} from "../../../app/App";
import WelcomeScreen from "../pages/WelcomeScreen";
import {Product} from "../Product/Product";
import {AllProducts} from "../../../app/data/Data";

type Props = {
  allProducts: AllProducts;
}

export function Content(props: Props) {
  return (
    <div className={s.content}>
      {/*Группа роутов*/}
      <Routes>
        <Route path={PATH.WELCOME} element={<WelcomeScreen/>} />
        <Route path={PATH.ADIDAS} element={<Adidas allSneakers={props.allProducts}/>}/>
        <Route path={PATH.PUMA} element={<Puma allSneakers={props.allProducts}/>}/>
        <Route path={PATH.NIKE} element={<Nike allSneakers={props.allProducts}/>}/>
        <Route path={`/:brand/:id`} element={<Product products={props.allProducts}/>}/>
        <Route path={PATH.ERROR} element={<Error404/>}/>
        <Route path={PATH.OTHER} element={<Navigate to={PATH.ERROR}/>}/>
      </Routes>
    </div>
  )
}