import styled from "styled-components";
import { Typography } from "@material-ui/core";

const StyledTitleIcon = styled(Typography)`
  && {
    font-size: 0.8em;
    color: ${(props) => props.theme.colors.white};
    padding-left: 5px;
  }
`;

export default StyledTitleIcon;
