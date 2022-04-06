import styled from "styled-components";
import { TextField } from "@material-ui/core";

const StyledTextField = styled(TextField)`
  && {
    width: 550px;
    height: 35px;
    color: ${(props) => props.theme.colors.black};
  }
`;

export default StyledTextField;
