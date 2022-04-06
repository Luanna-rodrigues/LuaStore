import styled from "styled-components";
import { Grid } from "@material-ui/core";

const StyledGridAnnou = styled(Grid)`
  && {
    background-color: ${(props) => props.theme.colors.darksalmon};
    display: flex;
    justify-content: center;
    padding-right: 170px;
  }
`;

export default StyledGridAnnou;
