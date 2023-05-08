import Image from "next/image";
import { Poppins } from "next/font/google";

import Layout from "@/components/Layout";
// import { useSession } from "next-auth/react";

const poppins = Poppins({
  weight: ["100", "300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  // const { data: session } = useSession();
  return (
    <Layout>
      <div className={`${poppins.className} flex items-center justify-between`}>
        <h5>
          Hello,
          <span className="font-bold text-xl">Brian</span>
        </h5>
      </div>
    </Layout>
  );
}
