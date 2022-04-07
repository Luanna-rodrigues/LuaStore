import React from "react";
import Home from "./pages/Home/Home";
import Jewelery from "./pages/Jewelery/Jewelery";
import MensClothing from "./pages/MensClothing/MensClothing";
import WomensClothing from "./pages/WomensClothing/WomensClothing";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import { StyledGridBack } from "./styledComponents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clothes from "./pages/Clothes/Clothes";
import Electronics from "./pages/Electronics/Electronics";
import ShopCart from "./pages/ShopCart";
import { SettingsProvider, defaultSettings } from "./context/Settings";
import ShopFavorite from "./pages/ShopFavorite/ShopFavorite";
import Finish from "./pages/Finish/Finish";

const App = () => {
  return (
    <SettingsProvider settings={defaultSettings}>
      <ThemeProvider theme={theme}>
        <StyledGridBack>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/allclothes" element={<Clothes />} />
              <Route path="/womenclothing" element={<WomensClothing />} />
              <Route path="/menclothing" element={<MensClothing />} />
              <Route path="/jewelry" element={<Jewelery />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/shopcart" element={<ShopCart />} />
              <Route path="/shopfavorite" element={<ShopFavorite />} />
              <Route path="/finish" element={<Finish />} />
            </Routes>
          </BrowserRouter>
        </StyledGridBack>
      </ThemeProvider>
    </SettingsProvider>
  );
};

export default App;
