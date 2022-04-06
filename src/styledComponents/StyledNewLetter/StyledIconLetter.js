import styled from "styled-components";
import { BottomNavigationAction } from "@material-ui/core";

const StyledIconLetter = styled(BottomNavigationAction)`
  && {
    align-items: center;
    padding-left: 10px;
    background-color: ${(props) => props.theme.colors.whitesmoke};
    color: ${(props) => props.theme.colors.black};
  }
`;

export default StyledIconLetter;
