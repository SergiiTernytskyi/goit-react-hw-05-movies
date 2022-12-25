import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesApi';
import { CommentatorName, List, ListItem } from './Rewiews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const reviews = await getMovieReviews(movieId);

        const fetchedReview = reviews.results.map(
          ({ id, author, content, created_at }) => {
            return { id, author, content, created_at };
          }
        );
        setReviews(fetchedReview);
      } catch {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {error && <Error>{error}</Error>}
      {isLoading && <Loader />}
      <List>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content, created_at }) => {
            const data = new Date(created_at);
            return (
              <ListItem key={id}>
                <CommentatorName>
                  {author} ({data.toLocaleString()})
                </CommentatorName>
                <p>{content}</p>
              </ListItem>
            );
          })
        ) : (
          <p>We don`t have any reviews for this movie.</p>
        )}
      </List>
    </>
  );
};

export default Reviews;
