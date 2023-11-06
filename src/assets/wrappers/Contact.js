import styled from "styled-components";

const Wrapper = styled.div`
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
  .section {
    background-color: black;
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    outline: 0;
    border: 1px solid black;
    background: transparent;
    color: black;
  }

  .input-group {
    position: relative;
  }

  label {
    position: absolute;
    height: 100%;
    padding: 10px;
    transition: 0.2s;
    color: black;
  }

  .input-group {
    margin-bottom: 30px;
    display: grid;
  }

  input:focus ~ label,
  input:valid ~ label,
  textarea:focus ~ label,
  textarea:valid ~ label {
    top: -25px;
    font-size: 0.75rem;
  }
`;

export default Wrapper;
