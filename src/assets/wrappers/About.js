import styled from "styled-components";

const Wrapper = styled.section`
  @media (min-width: 922px) {
    .skill-area {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
  }
`;

export default Wrapper;
