import styled from "styled-components";

const Wrapper = styled.div`
  .media-container {
    display: flex;
    justify-content: center;
  }
  .icon {
    padding: 5px;
    height: 50px;
  }

  .github {
    filter: invert(100%);
  }
  .discord {
    filter: invert(100%);
  }

  @media (min-width: 922px) {
    .media-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
    }
    .icon {
      height: 30px;
    }
  }
`;

export default Wrapper;
