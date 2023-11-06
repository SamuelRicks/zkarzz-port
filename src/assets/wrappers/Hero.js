import styled from "styled-components";

const Wrapper = styled.section`
  .section {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
  }
  .contact-me {
    display: none;
  }
  span {
    color: var(--primary-500);
  }
  h1 {
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  p {
    line-height: 1.5rem;
    color: #000000;
    font-weight: 500;
    font-size: 1.1em;
    margin: 0;
  }
  .info {
    overflow: hidden;
  }

  @media (min-width: 922px) {
    .info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      align-content: center;
    }
    .contact-me {
      display: block;
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
  }
`;

export default Wrapper;
