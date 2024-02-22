import Link from "next/link";
import { useRouter } from "next/router";

const LoginViews = () => {
  const router = useRouter();
  const handlerLogin = () => {
    router.push("/auth/register");
  };

  return (
    <>
      <div className="text-3xl font-bold">Login Page</div>
      <button onClick={handlerLogin}>Register</button>
      <Link href={"/product"} className="text-blue-500">
        Register
      </Link>
    </>
  );
};

export default LoginViews;
