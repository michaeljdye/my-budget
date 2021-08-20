import { FC } from "react";
import { Header } from "@/components/layout";

export const Layout: FC = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
