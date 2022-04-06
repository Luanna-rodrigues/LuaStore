import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import MainNav from "../../components/MainNav";
import NavBar from "../../components/NavBar/NavBar";
import NewsLetter from "../../components/NewLetter/NewsLetter";
import useSettings from "../../hooks/useSettings";
import {
  StyledButGrid,
  StyledCardFavorite,
  StyledCardFirst,
  StyledCardPrice,
  StyledFavTitle,
  StyledFavTwo,
  StyledGridDel,
  StyledGridImg,
  StyledImage,
  StyledTotal,
} from "../../styledComponents";
import DeleteIcon from "@material-ui/icons/Delete";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import getShoppingCard from "../../utils/getShoppingCard";

const ShopFavorite = () => {
  const { settings, saveSettings } = useSettings();

  const handleRemovedItem = (id) => {
    const result = settings?.favorite?.filter((item) => item.id !== id);
    updateList(result);
  };

  const updateList = (result) => {
    localStorage.setItem("shopping-favorite", JSON.stringify(result));
    saveSettings({ ...settings, favorite: result });
  };

  const handleShop = (localStorangeName, fieldName, item) => {
    const { id, title, price, image } = item;
    const cart = getShoppingCard();

    if (!cart.find((item) => item.id === id)) {
      const itemsList = [...cart, { id, title, price, image }];
      localStorage.setItem(localStorangeName, JSON.stringify(itemsList));
      saveSettings({ ...settings, [fieldName]: itemsList });
    }
  };

  return (
    <Grid>
      <Announcement />
      <NavBar />
      <MainNav />
      <Container>
        <StyledFavTitle>Your Favorites!</StyledFavTitle>
        {settings?.favorite && settings?.favorite.length > 0 ? (
          <StyledTotal container spacing={3}>
            {settings?.favorite?.map((item) => (
              <Grid item xs={4} key={item.id}>
                <StyledCardFavorite elevation={3}>
                  <StyledGridDel item sm={12}>
                    <IconButton>
                      <DeleteIcon onClick={() => handleRemovedItem(item?.id)} />
                    </IconButton>
                  </StyledGridDel>
                  <StyledGridImg>
                    <StyledImage src={item.image} alt={item.title} />
                  </StyledGridImg>
                  <Grid>
                    <StyledCardFirst title={item.title}>
                      <Typography>{`${
                        item.title ? item.title.substring(0, 40) : ""
                      }`}</Typography>
                    </StyledCardFirst>
                  </Grid>
                  <Grid>
                    <StyledCardPrice>$ {item.price}</StyledCardPrice>
                  </Grid>
                  <StyledButGrid>
                    <IconButton
                      onClick={() =>
                        handleShop("shopping-cart", "shopCart", item)
                      }
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </StyledButGrid>
                </StyledCardFavorite>
              </Grid>
            ))}
          </StyledTotal>
        ) : (
          <StyledFavTwo>You haven't items in your favorites!</StyledFavTwo>
        )}

        <NewsLetter />
        <Footer />
      </Container>
    </Grid>
  );
};

export default ShopFavorite;
