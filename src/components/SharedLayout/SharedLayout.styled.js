import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid white;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #d18d96;
  color: black;
`;

export const Link = styled(NavLink)`
  padding: 0.5rem;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;

  &.active {
    background-color: #dfb160;
    color: black;
  }
`;
