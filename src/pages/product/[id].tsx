import AppShell from "@/components/layouts/AppShell";
import { useRouter } from "next/router";

const DetailProductPage = () => {
  //Buat ngambil data dari url
  const { query } = useRouter();

  return (
    <AppShell>
      <div>
        <h1 className="text-3xl text-white font-bold">Detail Product</h1>
      </div>
      {/* Buat ngambil data ID contoh */}
      <p>Product : {query.id}</p>
    </AppShell>
  );
};

export default DetailProductPage;
