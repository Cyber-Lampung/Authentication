//  useState digunakan untuk memberikan atau supaya tidak double untuk Render karena React gak bisa double Render

import React, { useEffect, useState } from "react";

/*


  Penjelasan : 

    Navigate => Buat Redirect ke halaman tertentu

    Outlate => untuk menaruh Child Route pada induk Route 


*/

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Authentication/Register/Register";
import LoginPage from "./pages/Authentication/Login/Login";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

// memberikan jeda login supaya Halaman tidak langsung ke pengecekan Route dan memberikan protected login path
const PrivatePath = ({ IsLogin, Loading }) => {
  if (Loading) {
    return <p>Loading...</p>;
  }

  // arahkan ke <Dashboard /> jika balikan dari IsLogin true jika false dibalikan ke /Login
  return IsLogin ? <Outlet /> : <Navigate to="/Login" replace />;
};

function App() {
  // set Nilai awal
  const [IsLogin, setIsLogin] = useState(false);
  const [Loading, setLoading] = useState(true);

  // gunakan useEffect untuk supaya tidak ke Render 2 kali dan akan dikeluarkan atau di cetak dalam 1 kali
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
    setLoading(false);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route element={<PrivatePath IsLogin={IsLogin} Loading={Loading} />}>
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
