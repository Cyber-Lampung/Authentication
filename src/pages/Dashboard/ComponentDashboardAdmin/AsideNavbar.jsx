import React from "react";
// import { Link } from "react-router-dom";
import AsideMainContent from "./AsideMainDashboard";
import PagesWebsite from "./PageWebsite";
import UiUxDesain from "./uiuxPages";
import VpsStatus from "./VpsStatus";
import * as Icon from "react-bootstrap-icons";
// import Billing from "./Billing";
import Setting from "./Setting";

export default function AsideNabar({ onSelect }) {
  return (
    <>
      <aside className="fixed w-45 h-150 bg-white z-2">
        <nav>
          <ul className="flex flex-col gap-10 ml-5 mt-10 font-semibold ">
            <span
              className="cursor-pointer"
              onClick={() => onSelect(<AsideMainContent />)}
            >
              <div className="flex items-center gap-4">
                <Icon.House className="text-2xl" />
                <p>Dashboard</p>
              </div>
            </span>
            <span
              className="cursor-pointer"
              onClick={() => onSelect(<PagesWebsite />)}
            >
              <div className="flex items-center gap-4">
                <Icon.Activity className="text-2xl" />
                <p>Website Status</p>
              </div>
            </span>
            <span
              className="cursor-pointer"
              onClick={() => onSelect(<UiUxDesain />)}
            >
              <div className="flex items-center gap-4">
                <Icon.Image className="text-2xl" />
                <p>UI / UX Desain</p>
              </div>
            </span>
            <span
              className="cursor-pointer"
              onClick={() => onSelect(<VpsStatus />)}
            >
              <div className="flex items-center gap-4">
                <Icon.Activity className="text-2xl" />
                <p>Vps Status</p>
              </div>
            </span>
            {/* <span
              className="cursor-pointer"
              onClick={() => onSelect(<Billing />)}
            >
              <div className="flex items-center gap-4">
                <Icon.Cash className="text-2xl" />
                <p>Billing</p>
              </div>
            </span> */}
            <span
              className="cursor-pointer"
              onClick={() => onSelect(<Setting />)}
            >
              <div className="flex items-center gap-4">
                <Icon.Gear className="text-2xl" />
                <p>Setting</p>
              </div>
            </span>
          </ul>
        </nav>
      </aside>
    </>
  );
}
