import { styled } from 'styled-components';

export const CastContainer = styled.ul`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ActorCard = styled.li`
  background-color: #34586e;
  border-radius: 4px;
  flex-basis: calc((100% - 6rem) / 4);
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 1rem;
  align-items: center;
  box-shadow: 0px 0px 9px 0px rgba(66, 68, 90, 1);
`;

export const SpanName = styled.span`
  font-size: 14px;
  margin-top: 0.5rem;
`;

export const SpanLabel = styled.span`
  font-size: 14px;
  color: #d18d96;
`;
