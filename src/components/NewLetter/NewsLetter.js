import { BottomNavigation } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import {
  StyledIconLetter,
  StyledGridNew,
  StyledTitleLet,
  StyledTitleNew,
  StyledTextField,
} from "../../styledComponents";

const NewsLetter = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <StyledTitleLet>News Letter</StyledTitleLet>
      </Grid>
      <Grid item xs={12}>
        <StyledTitleNew>
          Get timely updates from your favorite products.
        </StyledTitleNew>
      </Grid>
      <StyledGridNew item xs={12}>
        <StyledTextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
        />
        <BottomNavigation>
          <StyledIconLetter icon={<SendIcon />} />
        </BottomNavigation>
      </StyledGridNew>
    </Grid>
  );
};

export default NewsLetter;
