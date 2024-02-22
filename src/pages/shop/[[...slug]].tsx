import AppShell from "@/components/layouts/AppShell";
import { useRouter } from "next/router";

const ShopPage = () => {
  //Buat ngambil data dari url
  const { query } = useRouter();
  console.log(query);

  return (
    <AppShell>
      <div>
        <h1 className="text-3xl font-bold">Detail Product</h1>
      </div>
      <p className="font-semibold text-2xl">
        Shop : {query.slug ? query.slug[0] : "No Query"}
      </p>
      <p className="font-semibold text-2xl">
        Type : {query.slug ? query.slug[1] : ""}
      </p>
      <p className="font-semibold text-2xl">
        Gender : {query.slug ? query.slug[2] : ""}
      </p>
    </AppShell>
  );
};

export default ShopPage;
