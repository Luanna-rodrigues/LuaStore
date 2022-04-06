import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  StyledNavBar,
  StyledGridIcon,
  StyledGridSearch,
  StyledTitle,
  StyledGridTitle,
  StyledTitleIcon,
  StyledInput,
} from "../../styledComponents";
import { Container, Grid, Badge } from "@material-ui/core";
import useSettings from "../../hooks/useSettings";

import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const {
    settings: { shopCart, favorite },
  } = useSettings();

  const handleOpen = () => {
    navigate("/shopcart");
  };

  const handleClickOpen = () => {
    navigate("/shopfavorite");
  };

  return (
    <div>
      <StyledNavBar position="static">
        <Container>
          <Toolbar>
            <Grid container>
              <StyledGridTitle>
                <StyledTitle>Lua Store</StyledTitle>
              </StyledGridTitle>

              <StyledGridSearch>
                <StyledInput
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                />
                <IconButton>
                  <SearchIcon style={{ color: "white" }} />
                </IconButton>
              </StyledGridSearch>

              <StyledGridIcon>
                <IconButton onClick={handleClickOpen}>
                  <Badge badgeContent={favorite?.length} color="secondary">
                    <FavoriteIcon style={{ color: "white", fontSize: 35 }} />
                  </Badge>
                  <StyledTitleIcon />
                </IconButton>

                <IconButton onClick={handleOpen}>
                  <Badge badgeContent={shopCart?.length} color="secondary">
                    <ShoppingCartIcon
                      style={{ color: "white", fontSize: 35 }}
                    />
                  </Badge>
                </IconButton>
              </StyledGridIcon>
            </Grid>
          </Toolbar>
        </Container>
      </StyledNavBar>
    </div>
  );
};

export default NavBar;
