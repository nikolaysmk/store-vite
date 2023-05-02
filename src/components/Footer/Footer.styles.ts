import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: black;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

// create logo, style height, margin-left
export const Logo = styled.img`
  height: 2rem;
  margin-left: 1rem;
`;

// create Navigation, style display, align-items, margin-left
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

// create NavItem, style margin-left, color, text-decoration, cursor, &:hover
export const NavItem = styled.a`
  margin-left: 1rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// create LogoutButton, style margin-left, padding, background-color, color, border, border-radius, cursor, &:hover
export const LogoutButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

// Path: src/components/Header/Header.tsx
