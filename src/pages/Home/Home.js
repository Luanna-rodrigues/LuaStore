import { Grid, Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import Announcement from "../../components/Announcement/Announcement";
import NavBar from "../../components/NavBar/NavBar";
import MainNav from "../../components/MainNav";
import Slider from "../../components/Slider/Slider";
import NewsLetter from "../../components/NewLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import { StyledFavTitle, StyledLoading } from "../../styledComponents";
import CircularProgress from "@material-ui/core/CircularProgress";

const printGrid = (c, index) => {
  return (
    <SingleContent
      key={index}
      id={c.id}
      image={c.image}
      title={c.title}
      rating={c.rating}
      price={c.price}
    />
  );
};

const Home = () => {
  const [content, setContent] = useState([]);

  const fetchHome = async () => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products?limit=6`
    );

    setContent(data);
  };

  useEffect(() => {
    fetchHome();
  }, []);

  return (
    <Grid>
      <Announcement />
      <NavBar />
      <MainNav />
      <Slider />
      <Container>
        <StyledFavTitle>You Find Your Outfit Here!</StyledFavTitle>
        {content && content?.length > 0 ? (
          <Grid container justifyContent="center">
            {content &&
              content.map((c, index) => (
                <Grid item xs={4}>
                  {printGrid(c, index)}
                </Grid>
              ))}
          </Grid>
        ) : (
          <StyledLoading>
            <CircularProgress color="secondary" />
          </StyledLoading>
        )}

        <NewsLetter />
        <Footer />
      </Container>
    </Grid>
  );
};

export default Home;
