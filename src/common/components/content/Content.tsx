import s from "../Site.module.css";
import {Navigate, Route, Routes} from "react-router-dom";
import {Adidas} from "../pages/Adidas";
import {Puma} from "../pages/Puma";
import {Nike} from "../pages/Nike";
import {Error404} from "../pages/Error404";
import React from "react";
import {PATH} from "../../../app/App";
import WelcomeScreen from "../pages/WelcomeScreen";

type Props = {}

export function Content(props: Props) {
  return (
    <div className={s.content}>
      {/*Группа роутов*/}
      <Routes>
        <Route path={PATH.WELCOME} element={<WelcomeScreen/>} />
        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
        <Route path={PATH.PUMA} element={<Puma/>}/>
        <Route path={PATH.NIKE} element={<Nike/>}/>
        <Route path={PATH.ERROR} element={<Error404/>}/>
        <Route path={PATH.OTHER} element={<Navigate to={PATH.ERROR}/>}/>
      </Routes>
    </div>
  )
}