import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const handlerLogin = () => {
    router.push("/auth/register");
  };

  return (
    <>
      <div className="text-3xl font-bold">Login Page</div>
      <button onClick={handlerLogin}>Register</button>
      <Link href={"/auth/register"} className="text-blue-500">
        Register
      </Link>
    </>
  );
};

export default LoginPage;
