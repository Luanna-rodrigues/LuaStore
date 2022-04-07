import React, { Fragment } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Announcement from "../../components/Announcement/Announcement";
import NavBar from "../../components/NavBar/NavBar";
import MainNav from "../../components/MainNav";
import {
  StyledCartGridTi,
  StyledTypPriceCart,
  StyledFavCard,
  StyledFavTitle,
  StyledFavTwo,
  StyledImgCart,
  StyledTotal,
  StyledCartTitle,
  StyledGridDel,
  StyledTextFieldCart,
  StyledQuantity,
  StyledChip,
  StyledGridSub,
  StyledResume,
  StyledTotalTyp,
  StyledFinish,
  StyledButtonFin,
} from "../../styledComponents";
import useSettings from "../../hooks/useSettings";
import NewsLetter from "../../components/NewLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useNavigate } from "react-router-dom";

const ShopCart = () => {
  const navigate = useNavigate();
  const { settings, saveSettings } = useSettings();

  const total = settings.shopCart?.reduce((sumTotal, item) => {
    return (sumTotal += (item?.quant || 1) * item.price);
  }, 0);

  const handleQuant = (id, type) => {
    const result = settings?.shopCart
      .map((item) => {
        let quantItem = item?.quant || 1;
        const quant =
          item?.id === id
            ? type === "sum"
              ? quantItem + 1
              : quantItem - 1
            : quantItem;
        return {
          ...item,
          quant,
        };
      })
      .filter((item) => item.quant > 0);
    updateList(result);
  };

  const handleRemovedItem = (id) => {
    const result = settings?.shopCart?.filter((item) => item.id !== id);
    updateList(result);
  };

  const updateList = (result) => {
    localStorage.setItem("shopping-cart", JSON.stringify(result));
    saveSettings({ ...settings, shopCart: result });
  };

  const handleClick = () => {
    navigate("/finish");
  };

  return (
    <Grid>
      <Announcement />
      <NavBar />
      <MainNav />
      <Container>
        <StyledFavTitle>Your Shopping Cart!</StyledFavTitle>

        {settings?.shopCart && settings?.shopCart.length > 0 ? (
          <StyledTotal container spacing={3}>
            {settings?.shopCart?.map((item, index) => (
              <Fragment>
                <Grid item sm={7} key={item.id}>
                  <StyledFavCard elevation={3}>
                    <StyledGridDel item sm={12}>
                      <IconButton>
                        <DeleteIcon
                          onClick={() => handleRemovedItem(item?.id)}
                        />
                      </IconButton>
                    </StyledGridDel>

                    <Grid container sm={12}>
                      <StyledCartGridTi item sm={8}>
                        <StyledImgCart src={item.image} alt={item.title} />

                        <StyledCartTitle title={item.title}>
                          {`${item.title.substring(0, 50)}`}
                        </StyledCartTitle>
                      </StyledCartGridTi>
                      <Grid item sm={4}>
                        <StyledTypPriceCart>$ {item.price}</StyledTypPriceCart>
                      </Grid>
                    </Grid>

                    <StyledQuantity container>
                      <Typography>Quantity:</Typography>
                      <Grid item>
                        <IconButton
                          disabled={(item?.quant || 1) <= 1}
                          onClick={() => handleQuant(item?.id, "subtract")}
                        >
                          <RemoveCircleOutlineIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <StyledTextFieldCart
                          disabled
                          id="outlined-disabled"
                          variant="outlined"
                          type="number"
                          value={item?.quant || 1}
                        />
                      </Grid>

                      <Grid item>
                        <IconButton
                          disabled={(item?.quant || 1) >= 10}
                          onClick={() => handleQuant(item?.id, "sum")}
                        >
                          <AddCircleOutlineIcon />
                        </IconButton>
                      </Grid>
                      <Grid>
                        <StyledChip label="Free Shipping" />
                      </Grid>
                    </StyledQuantity>
                  </StyledFavCard>
                </Grid>
                {index === 0 && (
                  <Grid item sm={4}>
                    <StyledFavCard elevation={4}>
                      <Grid item sm={12}>
                        <Grid>
                          <StyledResume>RESUME</StyledResume>
                        </Grid>
                        <StyledGridSub>
                          <Typography>SubTotal:</Typography>
                          <Typography>
                            {total?.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </Typography>
                        </StyledGridSub>
                        <StyledGridSub>
                          <Typography>Discount:</Typography>
                          <Typography>$0,00</Typography>
                        </StyledGridSub>
                        <StyledGridSub>
                          <StyledTotalTyp>TOTAL:</StyledTotalTyp>
                          <StyledTotalTyp>
                            {total?.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </StyledTotalTyp>
                        </StyledGridSub>
                      </Grid>
                      <StyledFinish>
                        <StyledButtonFin onClick={handleClick}>
                          Finish your order
                        </StyledButtonFin>
                      </StyledFinish>
                    </StyledFavCard>
                  </Grid>
                )}{" "}
                {index !== 0 && <Grid item sm={4}></Grid>}
              </Fragment>
            ))}
          </StyledTotal>
        ) : (
          <StyledFavTwo>You haven't items in your shopping cart!</StyledFavTwo>
        )}

        <NewsLetter />
        <Footer />
      </Container>
    </Grid>
  );
};

export default ShopCart;
