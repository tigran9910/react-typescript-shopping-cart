import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";

export const Wrapper = styled.div`
  // margin: 0;
  // padding: 0;
`;

export const StyledButton = styled(IconButton)`
  // position: fixed;
  // z-index: 100;
  // right: 20px;
  // top: 20px;
`;

export const StyledGrid = styled(Grid)`
  width: 80%;
  margin: 0;
  margin: auto;
  margin-top: 100px;
`;

export const StyledBox = styled(Box)`
  position: fixed;
  z-index: 100;
  // padding: 0;
  // margin: 0;
  width: 100%;
  top: 0;
  left: 0;
`;
