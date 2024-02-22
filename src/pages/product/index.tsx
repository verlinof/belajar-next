import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  return (
    <>
      <div>Prodiuct Page</div>
    </>
  );
};

export default ProductPage;
