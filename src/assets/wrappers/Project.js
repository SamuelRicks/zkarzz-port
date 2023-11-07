import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 922px) {
    .project-area {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
  }
`;

export default Wrapper;
