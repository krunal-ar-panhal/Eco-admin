import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Orders from "./pages/Orders";
import List from "./pages/List";
import Login from "./components/Login";

const App = () => {
  const [token, setToken] = useState("420");

  return (
    <BrowserRouter>
      <div className="bg-gray-50 min-h-screen flex flex-col">
        {token === "" ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <hr /> 
            <div className="flex flex-1 w-full">
              <Sidebar />
              <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
                <Routes>
                  <Route path="/add" element={<Add />} />
                  <Route path="/list" element={<List />} />
                  <Route path="/order" element={<Orders />} />
                </Routes>
              </div>
            </div>
          </>
        )}

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
