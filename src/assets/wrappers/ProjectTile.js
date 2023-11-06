import styled from "styled-components";

const Wrapper = styled.article`
  margin-bottom: 1rem;
  border: 2px solid #000;
  overflow: hidden;
  .img-container {
    min-width: 100%;
    border-bottom: 2px solid #000;
  }
  .box-inside {
    padding: 0.5rem 0 0.5rem 10px;
    border-bottom: 2px solid #000;
    color: black;
    text-transform: capitalize;
  }
  .click-me {
    border: 2px solid var(--primary-500);
  }
  .title {
    padding-top: 10px;
    display: flex;
    padding-left: 10px;
  }
  h4 {
    font-size: 1.3rem;
  }
  .purpose {
    padding: 0.5rem 0 12px 0.5rem;
    color: black;
  }
  .bottom-box {
    margin: 0;
    padding: 0 0 1.2rem 10px;
  }
  button {
    margin-top: 0;
    background: transparent;
    padding: 7px;
    border: 2px solid var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
    color: white;
    font-size: 1rem;
    font-family: Fira Code;
  }
`;

export default Wrapper;
