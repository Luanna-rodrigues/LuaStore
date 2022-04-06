import styled from "styled-components";
import { InputBase } from "@material-ui/core";

const StyledInput = styled(InputBase)`
  && {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    border-radius: 10px;
    width: 500px;
    height: 35px;
    padding-left: 25px;
  }
`;

export default StyledInput;
