import * as React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="flex items-center justify-between p-5 pl-10 pr-10 bg-white sticky top-0 z-9999">
        <div>
          <h1 className="text-4xl font-bold ">WebDev Indo Store</h1>
        </div>

        <ul className="flex gap-5 font-semibold">
          <Link to={"/Home"}>Home</Link>
          <Link to={"/About"}>Tentang Kami</Link>
          <Link to={"/Produk"}>Layanan Kami</Link>
          <Link to={"/Contact"}>Testimony Produk</Link>
        </ul>

        <div className="Auth flex gap-5">
          <Link
            to={"/Reister"}
            className="p-1.5 w-25 text-center border-1 text-sm border-black rounded-lg font-semibold"
          >
            Register
          </Link>
          <Link
            to={"/Login"}
            className="p-1.5 w-25 text-center border-1 text-sm border-white rounded-lg font-semibold text-white bg-blue-500"
          >
            Log In
          </Link>
        </div>
      </header>
    </>
  );
}
