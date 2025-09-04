import React from "react";
import { Link } from "react-router-dom";
import AsideMainContent from "./AsideMainDashboard";
import PagesWebsite from "./PageWebsite";
import UiUxDesain from "./uiuxPages";

export default function AsideNabar({ onSelect }) {
  return (
    <>
      <aside className="fixed w-45 h-150 bg-white z-2">
        <nav>
          <ul className="flex flex-col gap-10 ml-9 mt-10 font-semibold ">
            <span
              className="cursor-pointer"
              onClick={() => onSelect(<AsideMainContent />)}
            >
              Dashboard
            </span>
            <span
              className="cursor-pointer"
              onClick={() => onSelect(<PagesWebsite />)}
            >
              Website Status
            </span>
            <span
              className="cursor-pointer"
              onClick={() => onSelect(<UiUxDesain />)}
            >
              UI / UX Desain
            </span>
            <Link to={"/vps"}>Vps Status</Link>
            <Link to={"/Billing"}>Billing</Link>
            <Link to={"/Setting"}>Setting</Link>
          </ul>
        </nav>
      </aside>
    </>
  );
}
