import styled from "styled-components";
import { Chip } from "@material-ui/core";

const StyledChip = styled(Chip)`
  && {
    background-color: ${(props) => props.theme.colors.green};
    color: black;
    font-weight: bold;
    font-size: 1em;
  }
`;

export default StyledChip;
