import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  p {
    color: black;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    font-size: 1.1rem;
    line-height: 1.2rem;
  }
  @media (min-width: 922px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: -50px;
  }
`;

export default Wrapper;
