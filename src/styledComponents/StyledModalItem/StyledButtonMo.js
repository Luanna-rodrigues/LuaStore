import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButtonMo = styled(Button)`
  && {
    font-size: 1.2em;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.coral};
    :hover {
      background-color: ${(props) => props.theme.colors.rose};
    }
    font-weight: 400;
    border-radius: 15px;
  }
`;

export default StyledButtonMo;
