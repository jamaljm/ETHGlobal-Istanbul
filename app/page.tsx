import Hero from "@/components/Hero";
import Image from "next/image";
import { ThirdwebProvider } from "./components/ThirdwebProvider";

export default function Home() {
  return (
    <ThirdwebProvider>
      <Hero />
    </ThirdwebProvider>
  );
}
