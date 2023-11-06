import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1rem 0;
  .box-inside {
    border: 2px solid black;

    padding: 1rem 1rem 1rem 10px;
    left: 0;
    font-size: 1.2rem;
  }
  .bottom {
    color: black;
    border-top: 0;
  }
  p {
    line-height: 1.5rem;
    color: #000000;
    font-weight: 500;
    font-size: 1.1em;
  }
`;

export default Wrapper;
