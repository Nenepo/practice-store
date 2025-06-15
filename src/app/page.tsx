import Image from "next/image";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="row-start-1 ">
      
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <ProductsPage/>
      </main>
      <footer className="row-start-3 ">
       
      </footer>
    </div>
  );
}
