import Link from "next/link";
import { useRouter } from "next/router";

const RegisterViews = () => {
  //Untuk jalanin redirect menggunakan sebuah function
  const { push } = useRouter();
  const handleRegister = () => {
    push("/product");
  };

  return (
    <>
      <div className="text-3xl font-bold">Register Page</div>
      <button onClick={handleRegister}>Product</button>
      <Link href={"/auth/login"} className="text-blue-500">
        Login
      </Link>
    </>
  );
};

export default RegisterViews;
