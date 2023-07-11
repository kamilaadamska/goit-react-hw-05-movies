import { StyledBackLink } from './BackLink.styled';

export const BackLink = ({ to }) => {
  const text = '<-- Go back';
  return <StyledBackLink to={to}>{text}</StyledBackLink>;
};
