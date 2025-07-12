import HeroSection from "@/components/Herosection";
import HowItWorks from "@/components/HowItWorks";
import { UserButton } from "@clerk/nextjs";
//import Image from "next/image";

export default function Home() {
  return (
    <div>
      <UserButton />
      <HeroSection />
      <HowItWorks />
    </div>
  );
}
