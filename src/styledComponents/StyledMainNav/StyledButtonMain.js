import styled from "styled-components";
import { BottomNavigationAction } from "@material-ui/core";

const StyledButtonMain = styled(BottomNavigationAction)`
  && {
    color: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: center;
    padding: 20px;
    font-size: 1.2em;
    font-weight: bold;
  }
`;

export default StyledButtonMain;
