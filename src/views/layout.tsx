import type { ReactNode } from "react";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};
