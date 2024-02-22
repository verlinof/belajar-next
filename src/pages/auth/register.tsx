import Link from "next/link";
import { useRouter } from "next/router";

const RegisterPage = () => {
  //Untuk jalanin redirect menggunakan sebuah function
  const router = useRouter();
  const handlerRegister = () => {
    router.push("/product");
  };

  return (
    <>
      <div className="text-3xl font-bold">Register Page</div>
      <button onClick={handlerRegister}>Product</button>
      <Link href={"/auth/login"} className="text-blue-500">
        Login
      </Link>
    </>
  );
};

export default RegisterPage;
