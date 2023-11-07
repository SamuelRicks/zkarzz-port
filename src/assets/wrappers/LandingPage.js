import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;

  span {
    color: var(--primary-500);
  }
  h1 {
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  p {
    color: #000000;
    font-weight: 500;
    font-size: 1.1em;
    margin-bottom: 1rem;
  }
  .wide-view {
    display: none;
  }
  .move-up {
    margin-top: -6rem;
    margin-bottom: 0;
  }

  @media (min-width: 922px) {
    .wide-view {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Wrapper;
