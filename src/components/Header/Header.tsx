import {
  HeaderContainer,
  Logo,
  Navigation,
  NavItem,
  LogoutButton,
} from './Header.styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
        alt="logo"
      />
      <Navigation>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
        <LogoutButton>Logout</LogoutButton>
      </Navigation>
    </HeaderContainer>
  );
};
