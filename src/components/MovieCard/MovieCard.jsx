import PropTypes from 'prop-types';
import {
  Container,
  Genres,
  GenresList,
  Image,
  Info,
  InfoTitle,
  MovieTitle,
  Score,
} from './MovieCard.styled';

import commingSoon from '../../pictures/comming-soon.jpg';

export const MovieCard = ({ poster, title, vote, overview, year, genres }) => {
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
        <InfoTitle>User score: </InfoTitle>
        <Score>{Math.floor(vote * 10)} %</Score>
        <InfoTitle>Overview</InfoTitle>
        {overview && <Info>{overview}</Info>}
        <InfoTitle>Genres</InfoTitle>
        <GenresList>
          {genres.map(genre => {
            return <Genres>{genre.name}</Genres>;
          })}
        </GenresList>
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
