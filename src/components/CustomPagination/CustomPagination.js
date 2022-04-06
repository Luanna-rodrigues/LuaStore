import { Grid } from "@material-ui/core";
import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";

const PaginationStyled = styled(Pagination)`
  button {
    color: #e9967a;
  }
`;

const CustomPagination = ({ setPage, numOfPages = 2 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <Grid>
      <PaginationStyled
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numOfPages}
        hideNextButton
        hidePrevButton
      />
    </Grid>
  );
};

export default CustomPagination;
