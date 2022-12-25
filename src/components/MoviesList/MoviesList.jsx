import PropTypes from 'prop-types';
import { TbMovie } from 'react-icons/tb';
import { useLocation } from 'react-router-dom';
import { List, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <TbMovie size={24} /> {original_title}
            </StyledLink>
          </li>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
