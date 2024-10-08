  import React from "react";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Add from "./pages/Add";
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import Sidebar from "./components/Sidebar";
  import Orders from "./pages/Orders";
  import List from "./pages/List";
  import Login from "./components/Login";
  import {Toaster} from 'react-hot-toast'
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./Redux/auth/authSlice";


  const App = () => {
    const token = useSelector((state)=>state.auth.token)
    const dispatch = useDispatch();

    return (
      <BrowserRouter>
        <div className="bg-gray-50 min-h-screen flex flex-col">
        <Toaster position="top-center" />
          {token === "" ? (
            <Login setToken={(newToken)=>dispatch(setToken(newToken))} />
          ) : (
            <>
              <Navbar setToken={setToken} />
              <hr /> 
              <div className="flex flex-1 w-full">
                <Sidebar />
                <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
                  <Routes>
                    <Route path="/add" element={<Add token={token} />} />
                    <Route path="/list" element={<List token={token} />} />
                    <Route path="/order" element={<Orders token={token} />} />
                    <Route path="/login" element={<Login />} />
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
