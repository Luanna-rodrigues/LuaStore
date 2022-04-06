import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import MainNav from "../../components/MainNav";
import NavBar from "../../components/NavBar/NavBar";
import NewsLetter from "../../components/NewLetter/NewsLetter";
import SingleContent from "../../components/SingleContent/SingleContent";

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

const MensClothing = () => {
  const [content, setContent] = useState([]);

  const fetchMenCloting = async () => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/men's%20clothing`
    );

    setContent(data);
  };

  useEffect(() => {
    fetchMenCloting();
  }, []);

  return (
    <Grid>
      <Announcement />
      <NavBar />
      <MainNav />
      <Container>
        <Grid container justifyContent="center">
          {content &&
            content.map((c, index) => (
              <Grid item xs={4}>
                {printGrid(c, index)}
              </Grid>
            ))}
        </Grid>
        <NewsLetter />
        <Footer />
      </Container>
    </Grid>
  );
};

export default MensClothing;
