import React from "react";
import { Route, Routes } from "react-router-dom";
import Userdetails from "../Pages/Userdetails";
import Edituser from "../Pages/Edituser";
import Users from "../Pages/Users";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Render Users component for home page */}
        <Route path="/" element={<Users />} />
         {/* Render Userdetails component for single user details */}
        <Route path="/details" element={<Userdetails />} />
    {/* Render Form component for edit the details */}
        <Route path="/edit" element={<Edituser />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
