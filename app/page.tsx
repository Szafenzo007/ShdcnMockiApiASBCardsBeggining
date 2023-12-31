"use client"
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from '../types';
import { fetchProducts } from '../utils/fetchData';
import ProductList from "@/components/ProductList";
import Image from "next/image";
import Tcard from "@/components/TCard";
import TcardList from "@/components/TcardList";


const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts();
      
      setProducts(data);
     
    }

    fetchData();
  }, []);

  return (
    <Container>
      <div className="
    absolute 
    top-0
    left-0
    h-screen
    w-full
    
    bg-gradient-to-br
    from-[#FEF200]
    to-[#FE2100]
    rounded-md
    filter
    blur-3xl
    opacity-50
    -z-50
    ">

</div>

    <div className="space-y-10 pb-10">
      <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
        <div
          style={{ backgroundImage: `url(/img/hero-bg.png)` }}
          className="rounded-lg relative aspect-square md:aspect-[2.1/1] overflow-hidden
          bg-cover"
          >
          <div className="h-full w-full flex flex-col justify-center 
                          items-center text-center gap-y-8 ">
                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl
                                max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                CPO's secret Database
                <Button size='lg' className="w-full py-6 text-xl">
                  <ShoppingBag className="mr-2" />
                  confidential
                </Button>
                </div>
                
          </div>   
              
        </div>
      </div>  
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        {/* <ProductList items={products} /> */}
    <TcardList items={products}/>
     <ProductList items={products}/>  
     </div>

    </div>
    {/* <div className='space-y-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                lg:grid-cols-4 gap-4">
          {products.map((products) => (
                  <div key={products.id} className="m-4">
                    <Tcard data={products} />
                  </div>))}
          </div>
      </div> */}
    </Container>
  )
}
export default HomePage;