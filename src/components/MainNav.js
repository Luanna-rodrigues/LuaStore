import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledGridMain, StyledButtonMain } from "../styledComponents";

const MainNav = () => {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (selected === 0) {
      navigate("/");
    } else if (selected === 1) {
      navigate("/allclothes");
    } else if (selected === 2) {
      navigate("/womenclothing");
    } else if (selected === 3) {
      navigate("/menclothing");
    } else if (selected === 4) {
      navigate("/jewelry");
    } else if (selected === 5) {
      navigate("/electronics");
    }
  }, [selected, navigate]);

  return (
    <StyledGridMain
      value={selected}
      onChange={(value, newValue) => {
        setSelected(newValue);
      }}
      showLabels
    >
      <StyledButtonMain label="Home" />
      <StyledButtonMain label="All Clothes" />
      <StyledButtonMain label="Women's Clothing" />
      <StyledButtonMain label="Men's Clothing" />
      <StyledButtonMain label="Jewelry" />
      <StyledButtonMain label="Electronics" />
    </StyledGridMain>
  );
};

export default MainNav;
