import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./HomePage";
import Games from "./Games";
import Leagues from "./Leagues";
import Contact from "./Contact";
import Search from "./Search";
import Trainer from "./Trainer";

const Layout = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/search" element={<Search />} />
      <Route path="/league" element={<Leagues />} />
      <Route path="/trainer" element={<Trainer />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Layout;
