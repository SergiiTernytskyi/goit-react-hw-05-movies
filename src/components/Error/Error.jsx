import PropTypes from 'prop-types';
import { ErrorMessage } from './Error.styled';

export const Error = ({ children }) => {
  return <ErrorMessage>{children}</ErrorMessage>;
};

Error.propTypes = {
  children: PropTypes.string.isRequired,
};
