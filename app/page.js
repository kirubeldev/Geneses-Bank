import Hero from "@/app/componet/Hero";

import CapitalGrowth from "./componet/CapitalGrowth";
import Journey from "./componet/Journey";
import FeturedShares from "./componet/FeturedShares";
import SecureGraph from "./componet/SecureGraph";
import Discover from "./componet/Descover";

export default function Home() {
  return (
   <div>
    <Hero/>
    <CapitalGrowth/>
    <Journey/>
    <FeturedShares/>
    <SecureGraph/>
    <Discover/>
    <div className=" mt-12" style={{visibility:"hidden"}}>
<p>some brake</p>
    </div>
    <Discover reverse={true} />

   </div>
  );
}
