import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./banner/page";
import Package from './package/page'

export default function Home() {
  return (
    <div className="">
      <Package/>
      {/* <Banner/> */}
    </div>
  );
}
