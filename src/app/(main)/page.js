import Banner from "@/components/shared/Banner";
import Card from "@/components/shared/Card";
import Top from "@/components/shared/Top";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Top />
      <Card />
    </div>
  );
}
