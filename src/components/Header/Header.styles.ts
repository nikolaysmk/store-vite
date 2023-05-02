import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 2rem;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.a`
  margin-left: 1rem;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const LogoutButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #d32f2f;
  }
`;
