import { Container, Grid } from "@material-ui/core";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import MainNav from "../../components/MainNav";
import NavBar from "../../components/NavBar/NavBar";
import NewsLetter from "../../components/NewLetter/NewsLetter";
import {
  StyledFavTitle,
  StyledFavTwo,
  StyledGridGif,
  StyledGifImage,
} from "../../styledComponents";

const Finish = () => {
  return (
    <Grid>
      <Announcement />
      <NavBar />
      <MainNav />
      <Container>
        <StyledFavTitle>Sale Completed!</StyledFavTitle>
        <StyledGridGif>
          <StyledGifImage
            src="https://c.tenor.com/fRMf8K7uAUkAAAAC/batman-dance.gif"
            alt="gif"
          />
        </StyledGridGif>
        <StyledFavTwo>
          Thanks for Shopping with us and come back always!
        </StyledFavTwo>
        <NewsLetter />
        <Footer />
      </Container>
    </Grid>
  );
};

export default Finish;
