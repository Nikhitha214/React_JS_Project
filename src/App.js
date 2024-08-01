import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Men from "./Components/Men";
import Women from "./Components/Women";
import KitchenItems from "./Components/KitchenItems";
import Beauty from "./Components/Beauty";
import HomeDecor from "./Components/HomeDecor";
import ElectronicGadgets from "./Components/ElectronicGadgets";
import Login from "./Components/Login";
import Kids from "./Components/Kids";
import Wishlist from "./Components/Wishlist";
import Bag from "./Components/Bag";
import Furnitures from "./Components/Furnitures";
import Profile from "./Components/Profile";

const App = () => {

  return (
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/Men" element={<Men />} /> 
        <Route path="/Women" element={<Women />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Beauty" element={<Beauty />} />
        <Route path="/HomeDecor" element={<HomeDecor />} />
        <Route path="/KitchenItems" element={<KitchenItems />} />
        <Route path="/Electronic" element={<ElectronicGadgets />} />
        <Route path="/Furnitures"  element={<Furnitures/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Bag" element={<Bag/>} />
        <Route path="/Wishlist" element={<Wishlist/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      

      </Routes>
    </BrowserRouter>
  )
}

export default App;
