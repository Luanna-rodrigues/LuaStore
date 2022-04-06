import styled from "styled-components";
import { Button } from "@material-ui/core";

const StyledButtonSum = styled(Button)`
  && {
    background-color: ${(props) => props.theme.colors.whitesmoke};
    color: ${(props) => props.theme.colors.black};
  }
`;

export default StyledButtonSum;
