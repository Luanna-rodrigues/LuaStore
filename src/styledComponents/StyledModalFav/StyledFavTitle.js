import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledFavTitle = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    font-size: 2.5em;
    font-weight: bold;
    color: ${(props) => props.theme.colors.darksalmon};
    padding-bottom: 50px;
    padding-top: 50px;
  }
`;

export default StyledFavTitle;
