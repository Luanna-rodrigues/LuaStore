import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButtonFin = styled(Button)`
  && {
    background-color: ${(props) => props.theme.colors.coral};
    :hover {
      background-color: ${(props) => props.theme.colors.rose};
    }
    color: ${(props) => props.theme.colors.white};

    border-radius: 12px;
    padding: 5px;

    font-weight: bolder;
  }
`;

export default StyledButtonFin;
