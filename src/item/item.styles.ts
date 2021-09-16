import styled from "styled-components";
import Chip from "@mui/material/Chip";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
    padding: 20px;
  }

  h3 {
    height: 44px;
    overflow: hidden;
  }
  p {
    height: 202px;
    overflow: hidden;
  }

  img {
    height: 150px;
    max-height: 250px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
    padding-top: 20px;
  }

  .description {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  h3 {
    // font-family: Arial, Helvetica, sans-serif;
  }
`;

export const StyledChip = styled(Chip)`
  // display: block;
  // padding: 300px;
  // height: auto;
  // margin: 20px;
  margin: auto;
  margin-left: 0;

  justify-self: flex-start;
`;
