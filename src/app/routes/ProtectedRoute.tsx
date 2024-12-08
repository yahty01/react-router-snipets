import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  auth: boolean;
};

export const ProtectedRoute = ({ children, auth }: Props) => {
  return (
    <>
      {auth ? children : <div>You are not authorized to view this page.</div>}
    </>
  );
};
