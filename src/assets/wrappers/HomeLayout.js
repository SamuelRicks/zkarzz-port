import styled from "styled-components";

const Wrapper = styled.section`
  .home {
    display: grid;
    grid-template-columns: 1fr;
  }
  .home-layout {
    width: 90vw;
    margin: 0 auto;
    padding: 1rem 0;
  }

  @media (min-width: 922px) {
    .home {
      grid-template-columns: 1fr 2fr 1fr;
    }
    .home-layout {
      width: 90%;
    }
  }
`;
export default Wrapper;
