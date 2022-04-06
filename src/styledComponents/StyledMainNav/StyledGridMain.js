import styled from "styled-components";
import { BottomNavigation } from "@material-ui/core";

const StyledGridMain = styled(BottomNavigation)`
  && {
    background-color: ${(props) => props.theme.colors.lightsalmon};
    display: flex;
    justify-content: center;
  }
`;

export default StyledGridMain;
