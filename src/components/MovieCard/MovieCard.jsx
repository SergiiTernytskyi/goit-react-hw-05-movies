import PropTypes from 'prop-types';
import {
  Container,
  Image,
  Info,
  InfoTitle,
  MovieTitle,
} from './MovieCard.styled';

import commingSoon from '../../pictures/comming-soon.jpg';

export const MovieCard = ({ poster, title, vote, overview, year }) => {
  const data = new Date(year);

  return (
    <Container>
      <Image
        src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : commingSoon}
        alt={title}
      />
      <div>
        <MovieTitle>
          {title} ({data.getFullYear()})
        </MovieTitle>
        <Info>
          <b>User score:</b> {vote}
        </Info>
        <InfoTitle>Overview</InfoTitle>
        {overview && <Info>{overview}</Info>}
        <InfoTitle>Genres</InfoTitle>
        <Info>Genres</Info>
      </div>
    </Container>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
