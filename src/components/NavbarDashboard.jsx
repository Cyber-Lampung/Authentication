import React from "react";
import { DoorClosed, Person, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function NavbarDashboard() {
  function asideBar() {
    const asideContent = document.getElementById("asideContent");
    asideContent.classList.remove("hidden");
    // asideContent.style.transition = "all 2s ease";
  }

  function close() {
    const asideContent = document.getElementById("asideContent");
    asideContent.classList.add("hidden");
    // asideContent.style.transition = "all 2s ease";
  }

  function Logout() {
    window.location.href = "/";
  }

  return (
    <>
      <nav
        className="relative p-5 flex top-0 items-center justify-between z-5 "
        style={{ background: "#1f098fff" }}
      >
        <div>
          <h1 className="text-4xl text-white font-bold">Dashboard Admin</h1>
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
                src="/logo192.png"
                alt=""
                className="bg-white w-10 h-10 rounded-[50px] border-2 border-black cursor-pointer"
                onClick={asideBar}
              />
            </div>
            <div className="absolute top-20 right-5">
              <div
                id="asideContent"
                className="w-45 h-35 bg-white rounded-xl hidden"
              >
                <X
                  className="text-3xl right-1 top-1 absolute cursor-pointer"
                  onClick={close}
                />

                <div className="pt-9">
                  <hr className="w-[80%] m-auto" />
                  <div className="pt-5 m-4 flex flex-col gap-3">
                    <div className="flex items-center gap-3 cursor-pointer">
                      <Person />
                      <p className="text-xs font-semibold">Profile</p>
                    </div>
                    <div
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={Logout}
                    >
                      <DoorClosed />
                      <p className="text-xs font-semibold">LogOut</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
