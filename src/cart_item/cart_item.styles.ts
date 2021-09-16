import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  // justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding: 20px 0;

  div {
    // flex: 1;
  }

  h3,
  .information,
  .buttons {
    width: 200px;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 150px;
    object-fit: contain;
    margin-left: 50px;
  }
`;

export const StyledButton = styled(Button)`
  // padding: 0;
  // padding: 10px 20px;
  // line-height: 1.5;
  font-size: 1.5rem;
  font-weight: 300;
  // width: 10px;
  // border-radius: 10px;
  // min-width: 0;
`;
