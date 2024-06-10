import FooterPage from "@/components/footer";
import Header from "@/components/header";
import Landing from "@/components/landing";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Landing />
      <FooterPage />
    </main>
  );
}
