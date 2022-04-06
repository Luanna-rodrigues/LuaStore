import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledTitle = styled(Typography)`
  && {
    font-size: 2em;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }
`;

export default StyledTitle;
