import React from 'react';
import s from '../Site.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../app/routes/path";

export const Error404 = () => {
  debugger
    return (
        <div  style={{fontSize: "1rem", display: "flex", flexDirection: "column"}}
          className={s.sneaker_error}>
          Oops, it looks like you’ve ended up somewhere unexpected. Shall we head back?
          <NavLink style={{color: "wheat"}} to={PATH.WELCOME} >Yes!</NavLink>
        </div>
    );
};

