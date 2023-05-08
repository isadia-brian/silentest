import Layout from "@/components/Layout";
import Link from "next/link";

const Houses = () => {
  return (
    <Layout>
      <Link
        href="/admin/houses/new"
        className="bg-green-600 px-3 py-3 text-white font-bold"
      >
        Add New House
      </Link>
    </Layout>
  );
};

export default Houses;
