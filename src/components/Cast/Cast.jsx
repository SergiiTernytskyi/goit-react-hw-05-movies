import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredit } from 'services/moviesApi';

import commingSoon from '../../pictures/comming-soon.jpg';
import { Character, Image, List, ListItem, Name, Wrapper } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const details = await getMoviesCredit(movieId);

        const fetchedDetails = details.cast.map(
          ({ id, name, character, profile_path }) => {
            return { id, name, character, profile_path };
          }
        );
        setCast(fetchedDetails);
      } catch {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    getDetails();
  }, [movieId]);

  return (
    <>
      {error && <Error>{error}</Error>}
      {isLoading && <Loader />}
      <List>
        {cast.map(({ id, profile_path, name, character }) => {
          return (
            <ListItem key={id}>
              <Image
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : commingSoon
                }
                alt={name}
              />
              <Wrapper>
                <Name>{name}</Name>
                <Character>
                  <b>Character:</b> {character}
                </Character>
              </Wrapper>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Cast;
