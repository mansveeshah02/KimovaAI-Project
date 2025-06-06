import Image from "next/image";
// import Header from "@/components/header/Header"
import HeroSection from "@/components/home/herosection/HeroSection"
import Auditing from "@/components/home/auditing/Auditing"
import TurboAudit from "@/components/home/turboaudit/TurboAudit"
import Complements from "@/components/home/complements/Complements"
import AIAgent from "@/components/home/ai-agent/AIAgent"
import Pricing from "@/components/pricing/Pricing"  
import Count from "@/components/home/count/Count"
import Footer from "@/components/footer/Footer"
export default function Home() {
  return (
    <div>
    {/* <Header/> */}
    <HeroSection/>
    <Auditing/>
    <TurboAudit/>
    <Complements/>
    <AIAgent/>
    <Pricing/>
    <Count/>
    {/* <Footer/> */}
    </div>
  );
}
