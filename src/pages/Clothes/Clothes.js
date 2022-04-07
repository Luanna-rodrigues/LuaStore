import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Announcement from "../../components/Announcement/Announcement";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import Footer from "../../components/Footer/Footer";
import MainNav from "../../components/MainNav";
import NavBar from "../../components/NavBar/NavBar";
import NewsLetter from "../../components/NewLetter/NewsLetter";
import SingleContent from "../../components/SingleContent/SingleContent";
import { StyledFavTitle, StyledGridPag } from "../../styledComponents";

const printGrid = (c, index) => {
  return (
    <SingleContent
      key={index}
      id={c.id}
      image={c.image}
      title={c.title}
      rating={c.rating}
      price={c.price}
      handleAddItemToCart={c.handleAddItemToCart}
    />
  );
};

const Clothes = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchJewelery = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);

    setContent(data);
  };

  useEffect(() => {
    fetchJewelery();
  }, [page]);

  return (
    <Grid>
      <Announcement />
      <NavBar />
      <MainNav />
      <Container>
        <StyledFavTitle>All </StyledFavTitle>
        <Grid container justifyContent="center">
          {content &&
            content.map((c, index) => (
              <Grid item xs={4}>
                {printGrid(c, index)}
              </Grid>
            ))}
        </Grid>
        <StyledGridPag>
          <CustomPagination setPage={setPage} />
        </StyledGridPag>
        <NewsLetter />
        <Footer />
      </Container>
    </Grid>
  );
};

export default Clothes;
