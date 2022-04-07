import styled from "styled-components";
import { BottomNavigationAction } from "@material-ui/core";

const StyledButtonMain = styled(BottomNavigationAction)`
  && {
    color: ${(props) => props.theme.colors.white};
    :hover {
      color: ${(props) => props.theme.colors.rose};
    }
    display: flex;
    justify-content: center;
    padding: 20px;
    font-size: 1.2em;
    font-weight: bold;
  }
`;

export default StyledButtonMain;
