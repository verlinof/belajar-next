import ProductCard from "@/components/fragments/productCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductPage = () => {
  //Define data type
  type productType = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
  };

  const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);
  // const { push } = useRouter();
  //Untuk ngredirect
  // useEffect(() => {
  //   if (!isLogin) {
  //     // push("/auth/login");
  //   }
  // }, [isLogin, push]);

  //Menggunakan library SWR
  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  //Fetch API sendiri
  // useEffect(() => {
  //   fetch("api/product")
  //     .then((res) => res.json())
  //     .then((response) => setProducts(response.data));
  // }, [isLogin]); //Isi dari dependency array, adalah untuk ngambil data ketika dependency tersebut berubah isinya

  return (
    <>
      <div>Product Page</div>
      {/* Define kalo product itu producttype */}
      <div className="flex">
        {isLoading
          ? []
          : data.data?.map((product: productType) => {
              return <ProductCard key={product.id} {...product} />;
            })}
        {products.map((product: productType) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </>
  );
};

export default ProductPage;
