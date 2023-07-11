import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 500;

  &:hover,
  &:focus {
    color: #dfb160;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
