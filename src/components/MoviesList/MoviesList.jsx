import PropTypes from 'prop-types';
import { List, ListItem, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, original_title }) => {
        return (
          <ListItem key={id}>
            <StyledLink to="/movies/:movieId">{original_title}</StyledLink>
          </ListItem>
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
