import styled from "styled-components";

const Wrapper = styled.div`
  .form-message {
    padding-bottom: 3rem;
    padding-top: 1rem;
    width: 100%;
    background-color: var(--gray-50);
    border: 2px solid black;
    padding-left: 7px;
    margin-bottom: 1.5rem;
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
    left: 0;
  }
`;

export default Wrapper;
