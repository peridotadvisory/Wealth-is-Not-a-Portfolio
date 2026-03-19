import { Cover } from "./components/Cover";
import { TableOfContents } from "./components/TableOfContents";
import { ExecutiveSummary } from "./components/ExecutiveSummary";
import { PortfolioIllusion } from "./components/PortfolioIllusion";
import { MarketFragility } from "./components/MarketFragility";
import { SectionDivider } from "./components/SectionDivider";
import { GolfSwingAnalogy } from "./components/GolfSwingAnalogy";
import { FamilyOfficeCapitalSystems } from "./components/FamilyOfficeCapitalSystems";
import { EnduringValueFramework } from "./components/EnduringValueFramework";
import { PrinciplesOfCapitalArchitecture } from "./components/PrinciplesOfCapitalArchitecture";
import { CapitalArchitecture } from "./components/CapitalArchitecture";
import { ReturnEngineDiversification } from "./components/ReturnEngineDiversification";
import { CompetitiveReturns } from "./components/CompetitiveReturns";
import { ImplicationsForEntrepreneurs } from "./components/ImplicationsForEntrepreneurs";
import { KeyInsights } from "./components/KeyInsights";
import { AboutTheFramework } from "./components/AboutTheFramework";
import { Conclusion } from "./components/Conclusion";

export default function App() {
  return (
    <main className="bg-[#f4efe6] text-[#1a1a1a]">
      <Cover />
      <TableOfContents />
      <ExecutiveSummary />
      <PortfolioIllusion />
      <MarketFragility />
      <SectionDivider />
      <GolfSwingAnalogy />
      <FamilyOfficeCapitalSystems />
      <EnduringValueFramework />
      <PrinciplesOfCapitalArchitecture />
      <CapitalArchitecture />
      <ReturnEngineDiversification />
      <CompetitiveReturns />
      <ImplicationsForEntrepreneurs />
      <KeyInsights />
      <AboutTheFramework />
      <Conclusion />
    </main>
  );
}