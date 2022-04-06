import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButtonFin = styled(Button)`
  && {
    background-color: ${(props) => props.theme.colors.coral};
    border-radius: 12px;
    padding: 5px;
    color: ${(props) => props.theme.colors.white};
    font-weight: bolder;
  }
`;

export default StyledButtonFin;
