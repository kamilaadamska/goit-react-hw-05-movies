import { styled } from 'styled-components';

export const Headline = styled.h2`
  border-radius: 4px;
  margin: 1rem;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const ListItem = styled.li`
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #34586e;
  text-align: center;
  box-shadow: 0px 0px 9px 0px rgba(66, 68, 90, 1);
`;
