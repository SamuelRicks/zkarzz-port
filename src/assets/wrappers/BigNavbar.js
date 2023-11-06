import styled from "styled-components";

const Wrapper = styled.nav`
  .big-nav {
    display: none;
  }
  @media (min-width: 922px) {
    .big-nav {
      width: var(--fluid-width);
      max-width: var(--max-width);
      margin: 0 auto;
      height: var(--nav-height);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-link {
      margin-right: 1rem;
      color: black;
    }

    .active {
      color: white;
    }
  }
`;

export default Wrapper;
