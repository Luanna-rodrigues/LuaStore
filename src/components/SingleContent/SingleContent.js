import { Grid, IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {
  StyledImage,
  StyledGridImg,
  StyledCard,
  StyledCardFirst,
  StyledGridHeart,
  StyledGridCart,
  StyledCardPrice,
  StyledGridMoItem,
  StyledButtonMo,
  StyledCount,
  StyledNewImage,
  StyledNewGrid,
} from "../../styledComponents";
import { Rating } from "@material-ui/lab";
import useSettings from "../../hooks/useSettings";
import ModalItem from "../ModalItem/ModalItem";
import React from "react";

const SingleContent = ({ id, title, price, image, rating }) => {
  const { saveSettings, settings } = useSettings();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShopAdd = (items, localStorangeName, fieldName) => {
    const itemsList = [...items, { id, title, price, image }];

    if (!items.find((item) => item.id === id)) {
      localStorage.setItem(localStorangeName, JSON.stringify(itemsList));
      saveSettings({ ...settings, [fieldName]: itemsList });
    }
  };

  return (
    <StyledCard>
      <StyledGridHeart>
        <IconButton
          onClick={() =>
            handleShopAdd(settings?.favorite, "shopping-favorite", "favorite")
          }
        >
          <FavoriteBorderIcon />
        </IconButton>
      </StyledGridHeart>
      <StyledNewGrid>
        <StyledNewImage
          src="https://cdn-icons.flaticon.com/png/512/2048/premium/2048907.png?token=exp=1649341858~hmac=b9c0f62bcefe3fbe9bbe0428ee06b734"
          alt="percent"
        />
      </StyledNewGrid>
      <StyledGridImg>
        <StyledImage src={image} alt={title} />
      </StyledGridImg>
      <Grid container justifyContent="center">
        <Rating defaultValue={parseInt(rating.rate, 10)} readOnly />
        <StyledCount>({rating.count})</StyledCount>
      </Grid>
      <Grid>
        <StyledCardFirst title={title}>{`${title.substring(
          0,
          45
        )}`}</StyledCardFirst>
      </Grid>
      <Grid>
        <StyledCardPrice>$ {price}</StyledCardPrice>
      </Grid>
      <StyledGridCart>
        <IconButton
          onClick={() =>
            handleShopAdd(settings?.shopCart, "shopping-cart", "shopCart")
          }
        >
          <AddShoppingCartIcon />
        </IconButton>
      </StyledGridCart>
      <StyledGridMoItem>
        <StyledButtonMo onClick={handleOpen}>More Info</StyledButtonMo>
        <ModalItem open={open} onClose={handleClose} id={id} />
      </StyledGridMoItem>
    </StyledCard>
  );
};

export default SingleContent;
