import styled from "styled-components";

const Nav = ({ searchValue, setSearchValue }) => {
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <StyledNav>
      <h1>Personal Notes</h1>
      <form>
        <input
          onChange={searchHandler}
          type="text"
          placeholder="Search here ..."
          value={searchValue}
        />
      </form>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  min-height: 10vh;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9f6ee;
  border-bottom-style: solid;
  border-width: 1px;
  h1 {
    padding-top: 0.5rem;
  }
  form {
    padding: 0.5rem 0;
    input {
      padding: 0.2rem;
      border-radius: 5px;
    }
  }
`;

export default Nav;
