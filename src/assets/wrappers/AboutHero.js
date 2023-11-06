import styled from "styled-components";

const Wrapper = styled.section`
  .section {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
  }
  .about-me {
    display: none;
  }
  p {
    line-height: 1.5rem;
    color: #000000;
    font-weight: 500;
    font-size: 1.1em;
    margin-bottom: 1.5rem;
  }
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
  button {
    background: transparent;
    padding: 0.75rem 0.5rem;
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
