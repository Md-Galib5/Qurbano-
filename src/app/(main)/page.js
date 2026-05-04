import Banner from "@/components/shared/Banner";
import Card from "@/components/shared/Card";
import QurbaniTips from "@/components/shared/QurbaniTips";
import Top from "@/components/shared/Top";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Top />
      <Card />
      <QurbaniTips />
    </div>
  );
}
