import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 48px 32px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 48px 16px;
  }

  // Remember that order is important here

  /* @media ${QUERIES.laptopAndSmaller} {
    background-color: yellow;
  }

  @media ${QUERIES.tabletAndSmaller} {
    background-color: red;
  }

  @media ${QUERIES.phoneAndSmaller} {
    background-color: fuchsia;
  } */
`;

export default App;
