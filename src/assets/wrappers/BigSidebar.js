import styled from "styled-components";

const Wrapper = styled.section`
  display: none;

  @media (min-width: 922px) {
    display: block;
    header {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .media {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Wrapper;
