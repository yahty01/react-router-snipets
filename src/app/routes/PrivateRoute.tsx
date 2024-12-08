import {Navigate, Outlet} from "react-router";
import {PATH} from "./path";

type Props = {
  auth: boolean;
};

export const PrivetRoute = ( { auth }: Props) => {
  return auth ? <Outlet/> : <Navigate to={PATH.LOGIN}/>
};

