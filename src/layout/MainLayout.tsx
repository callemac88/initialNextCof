import { ReactNode } from "react";
import Header from "@components/Header";
import Nav from "@common/Nav";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
