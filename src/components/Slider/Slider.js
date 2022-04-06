import itemsList from "../../pages/ItemsList";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Container } from "@material-ui/core";

const Slider = () => {
  return (
    <Container>
      <ImageGallery
        items={itemsList}
        showPlayButton={false}
        showFullscreenButton={false}
        isFullscreen={true}
      />
    </Container>
  );
};

export default Slider;
