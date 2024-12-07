import s from "../Site.module.css";
import {NavWrapper} from "../pages/_styles";
import {NavLink} from "react-router-dom";
import React from "react";
import {PATH} from "../../../app/routes/path";

type Props = {}

export function Sidebar(props: Props) {

  return (
    <nav className={s.nav} id="sidebar">
      {/*Для перехода по роутам*/}
      <NavWrapper><NavLink to={PATH.ADIDAS}>adidas</NavLink></NavWrapper>
      <NavWrapper> <NavLink to={PATH.PUMA}>puma</NavLink></NavWrapper>
      <NavWrapper><NavLink to={PATH.NIKE}>nike</NavLink></NavWrapper>
      <NavWrapper><NavLink to={PATH.PRICES}>Цены для опта</NavLink></NavWrapper>
    </nav>
  )
}