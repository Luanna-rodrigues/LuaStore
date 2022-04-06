import React, { useState } from "react";
import getShoppingCard from "../../utils/getShoppingCard";
import getFavorite from "../../utils/getShoppingFavorite";

const SettingsContext = React.createContext();

export const defaultSettings = {
  shopCart: getShoppingCard(),
  favorite: getFavorite(),
};

export const SettingsProvider = ({ children, settings }) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings
  );

  const saveSettings = (values) => {
    setCurrentSettings(values);
  };

  return (
    <SettingsContext.Provider
      value={{ settings: currentSettings, saveSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
