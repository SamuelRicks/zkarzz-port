import styled from "styled-components";

const Wrapper = styled.nav`
  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  @media (min-width: 922px) {
    .nav-center {
      display: none;
    }
  }
`;

export default Wrapper;
