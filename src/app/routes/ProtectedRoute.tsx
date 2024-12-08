import React, {CSSProperties, ReactNode} from "react";
import LoginForm from "../../common/components/LoginForm/LoginForm";

type Props = {
  children: ReactNode;
  auth: boolean;
};

export const ProtectedRoute = ({ children, auth }: Props) => {
  return (
    <>
      {auth ? children : <div style={container}> <LoginForm/> </div>}
    </>
  );
};

const container: CSSProperties = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
};
