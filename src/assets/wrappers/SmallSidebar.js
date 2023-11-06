import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 922px) {
    display: none;
  }
  .media {
    position: relative;
    width: var(--fluid-width);
    display: flex;
    justify-content: center;
    padding-left: 0;
    padding-top: 2rem;

    margin-left: -2rem;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.93);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--background-seconday-color);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: start;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
  .nav-links {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--background-color);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
    font-size: 2rem;
    padding-bottom: 3rem;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .icon {
    font-size: 2.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }
`;

export default Wrapper;
