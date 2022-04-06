import { Grid } from "@material-ui/core";
import {
  StyledTitleFoot,
  StyledDescrFooter,
  StyledTypeLeft,
  StyledTypeRight,
  StyledTitleCont,
  StyledContainerFot,
} from "../../styledComponents";

const Footer = () => {
  return (
    <StyledContainerFot container justifyContent="center">
      <Grid item xs={4}>
        <StyledTitleFoot> Lua Store</StyledTitleFoot>
      </Grid>
      <Grid item xs={4}>
        <StyledTitleFoot> Useful Links</StyledTitleFoot>
      </Grid>
      <Grid item xs={4}>
        <StyledTitleCont> Contact</StyledTitleCont>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={3}>
          <StyledDescrFooter>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            placerat ultrices magna, et posuere nisl dapibus at.{" "}
          </StyledDescrFooter>
        </Grid>
        <Grid item xs={3}>
          <StyledTypeLeft>Home</StyledTypeLeft>
          <StyledTypeLeft>All Clothes</StyledTypeLeft>
          <StyledTypeLeft>Women's Clothes</StyledTypeLeft>
          <StyledTypeLeft>Men's Clothes</StyledTypeLeft>
        </Grid>
        <Grid item xs={3}>
          <StyledTypeRight>Cart</StyledTypeRight>
          <StyledTypeRight>WishList</StyledTypeRight>
          <StyledTypeRight>Jewelery</StyledTypeRight>
          <StyledTypeRight>Electronics</StyledTypeRight>
        </Grid>
        <Grid item xs={3}>
          <StyledTypeRight>Av. dos Pimpolhos, 654</StyledTypeRight>
          <StyledTypeRight>+55 1198543-1232</StyledTypeRight>
          <StyledTypeRight>luastore@luastore.com</StyledTypeRight>
        </Grid>
      </Grid>
    </StyledContainerFot>
  );
};

export default Footer;
