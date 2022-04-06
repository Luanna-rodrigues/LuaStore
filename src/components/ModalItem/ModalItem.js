import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Container, Grid, Paper, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import {
  StyledImage,
  StyledGridMoImg,
  StyledMoTitleOne,
  StyledMoTitleTwo,
  StyledMoPrice,
  StyledCount,
  StyledButGrid,
} from "../../styledComponents";
import { Rating } from "@material-ui/lab";
import useSettings from "../../hooks/useSettings";
import getShoppingCard from "../../utils/getShoppingCard";
import getShoppingFavorite from "../../utils/getShoppingFavorite";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const ModalItem = ({ open, onClose, id }) => {
  const { saveSettings, settings } = useSettings();
  const [entity, setEntity] = useState({ rating: {} });

  const fetchModal = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);

    setEntity(data);
  };

  const handleShop = (localStorangeName, fieldName) => {
    const { id, title, price, image } = entity;
    const items =
      localStorangeName === "shopping-cart"
        ? getShoppingCard()
        : getShoppingFavorite();

    if (!items.find((item) => item.id === id)) {
      const itemsList = [...items, { id, title, price, image }];
      localStorage.setItem(localStorangeName, JSON.stringify(itemsList));
      saveSettings({ ...settings, [fieldName]: itemsList });
    }
  };

  useEffect(() => {
    fetchModal();
  });

  return (
    <Grid>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Container>
          <Grid Container>
            <Paper elevation={3}>
              <CloseIcon onClick={onClose} />
              <StyledButGrid>
                <IconButton
                  onClick={() => handleShop("shopping-favorite", "favorite")}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </StyledButGrid>
              <StyledGridMoImg item xs={12}>
                <StyledImage src={entity.image} alt={entity.title} />
              </StyledGridMoImg>
              <Grid container justifyContent="center">
                <Rating
                  defaultValue={parseInt(entity.rating.rate, 10)}
                  readOnly
                />
                <StyledCount>({entity.rating.count})</StyledCount>
              </Grid>
              <Grid item xs={12}>
                <StyledMoTitleOne>{entity.title}</StyledMoTitleOne>
              </Grid>

              <Grid item xs={12}>
                <StyledMoTitleTwo>{entity.description}</StyledMoTitleTwo>
              </Grid>
              <Grid item xs={12}>
                <StyledMoPrice>$ {entity.price}</StyledMoPrice>
              </Grid>
              <StyledButGrid>
                <IconButton
                  onClick={() => handleShop("shopping-cart", "shopCart")}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </StyledButGrid>
            </Paper>
          </Grid>
        </Container>
      </Modal>
    </Grid>
  );
};

export default ModalItem;
