import * as React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="flex items-center justify-between p-5 pl-10 pr-10 bg-white sticky top-0">
        <div>
          <h1 className="text-4xl font-bold ">Store Dev</h1>
        </div>
        <div className="flex gap-20 items-center">
          <div>
            <ul className="flex gap-5 font-semibold">
              <Link to={"/Home"}>Home</Link>
              <Link to={"/About"}>About</Link>
              <Link to={"/Produk"}>Store</Link>
              <Link to={"/Contact"}>Contact</Link>
            </ul>
          </div>
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
        </div>
      </header>
    </>
  );
}
