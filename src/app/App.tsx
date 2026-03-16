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
    <div className="w-full">
      {/* Cover Page */}
      <Cover />
      
      {/* Table of Contents */}
      <TableOfContents />
      
      {/* Main Content Pages */}
      <ExecutiveSummary />
      <PortfolioIllusion />
      <MarketFragility />
      
      {/* Section Divider before Golf Swing */}
      <SectionDivider />
      
      <GolfSwingAnalogy />
      <FamilyOfficeCapitalSystems />
      <EnduringValueFramework />
      
      {/* NEW: Principles of Capital Architecture */}
      <PrinciplesOfCapitalArchitecture />
      
      <CapitalArchitecture />
      <ReturnEngineDiversification />
      <CompetitiveReturns />
      <ImplicationsForEntrepreneurs />
      <KeyInsights />
      
      {/* NEW: About the Framework section */}
      <AboutTheFramework />
      
      {/* Closing Page */}
      <Conclusion />
    </div>
  );
}
