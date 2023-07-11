import { StyledBackLink } from './BackLink.styled';
import PropTypes from 'prop-types';

export const BackLink = ({ to }) => {
  const text = '<-- Go back';
  return <StyledBackLink to={to}>{text}</StyledBackLink>;
};

BackLink.propTypes = {
  to: PropTypes.string,
};
