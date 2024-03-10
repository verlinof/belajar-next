import { retrieveData } from "@/utils/firebase/service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
  //Define data type
  type productType = {
    id: number;
    name: string;
    price: number;
    size: string;
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

  //Fetch API sendiri
  useEffect(() => {
    fetch("api/product")
      .then((res) => res.json())
      .then((response) => setProducts(response.data));
  });

  return (
    <>
      <div>Product Page</div>
      {/* Define kalo product itu producttype */}
      {products.map((product: productType) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </>
  );
};

export default ProductPage;
