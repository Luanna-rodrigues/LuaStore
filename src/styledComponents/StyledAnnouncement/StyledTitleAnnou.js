import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledTitleAnnou = styled(Typography)`
  && {
    font-size: 1.3em;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }
`;

export default StyledTitleAnnou;
