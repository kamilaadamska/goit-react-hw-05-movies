import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBackLink = styled(Link)`
  margin: 0.5rem;
  color: black;
  text-decoration: none;
  padding: 5px;
  border-radius: 4px;
  font-weight: 500;
  background-color: #dfb160;
  display: inline-block;

  &:hover {
    background-color: #d18d96;
  }
`;
