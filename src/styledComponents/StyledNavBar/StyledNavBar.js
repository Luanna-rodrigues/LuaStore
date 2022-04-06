import styled from "styled-components";
import { AppBar } from "@material-ui/core";

const StyledNavBar = styled(AppBar)`
  && {
    background-color: ${(props) => props.theme.colors.lightsalmon};
    color: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: center;
  }
`;

export default StyledNavBar;
