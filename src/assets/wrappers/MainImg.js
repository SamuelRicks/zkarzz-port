import styled from "styled-components";

const Wrapper = styled.div`
  .main-img {
    position: relative;
    top: 0;
    left: 0;
    .front-main {
      position: relative;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .back-main {
      z-index: -1;
      position: absolute;
      top: -40px;
      left: -10px;
    }
  }
`;

export default Wrapper;
