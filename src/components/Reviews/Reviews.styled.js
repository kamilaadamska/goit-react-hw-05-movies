import { styled } from 'styled-components';

export const List = styled.ul`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
  border-radius: 1rem;
  list-style-type: none;
  background-color: #34586e;
  text-align: center;
`;

export const ListItem = styled.li`
  margin: 1rem;
  &:not(:last-child) {
    border-bottom: 1px dashed white;
  }
`;

export const SpanAuthor = styled.span`
  font-weight: 600;
`;

export const TextReview = styled.p`
  font-size: 14px;
  font-style: italic;
`;
