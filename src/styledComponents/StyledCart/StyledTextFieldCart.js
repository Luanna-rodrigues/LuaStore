import styled from "styled-components";
import { TextField } from "@material-ui/core";

const StyledTextFieldCart = styled(TextField)`
  && {
    width: 60px;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.whitesmoke};
  }
`;

export default StyledTextFieldCart;
