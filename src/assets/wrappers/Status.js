import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1rem;
  .contain-box {
    border: 2px solid black;
    display: flex;
    align-items: center;
    padding: 0.5rem 0 0.5rem 0.5rem;
  }
  .status {
    height: 20px;
    width: 20px;
    background-color: var(--primary-500);
  }
  .text {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  p {
    margin: 0;
    padding-left: 1rem;
  }
  span {
    color: white;
    font-size: 1.2rem;
  }
`;

export default Wrapper;
