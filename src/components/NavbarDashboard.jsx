import React from "react";
import { Link } from "react-router-dom";

export default function NavbarDashboard() {
  return (
    <>
      <nav
        className="relative p-5 flex top-0 items-center justify-between z-5 "
        style={{ background: "#1f098fff" }}
      >
        <div>
          <h1 className="text-4xl text-white font-bold">Dashboard</h1>
        </div>
        <div className="">
          <div className="link flex items-center gap-15 text-sans">
            <ul className="flex gap-3 text-white text-md">
              <Link to={"/Home"}>Home</Link>
              <Link to={"/Layanan"}>Layanan Kami</Link>
              <Link to={"/Profile"}>Profile</Link>
            </ul>
            <div>
              <img
                src=""
                alt=""
                className="bg-white w-10 h-10 rounded-[50px] border-2 border-black"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
