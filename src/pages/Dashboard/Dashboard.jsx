import React, { useState } from "react";
import NavbarDashboard from "../../components/NavbarDashboard";
import AsideMainContent from "./ComponentDashboard/AsideMainDashboard";
import AsideNabar from "./ComponentDashboard/AsideNavbar";

export default function Dashboard() {
  const [Render, SetRender] = useState(<AsideMainContent />);

  return (
    <>
      <main className="overflow-X-hidden">
        <header className="sticky top-0 z-5">
          <NavbarDashboard />
        </header>

        <div className="flex">
          <AsideNabar onSelect={SetRender} />
          <>{Render}</>
        </div>
      </main>
    </>
  );
}
