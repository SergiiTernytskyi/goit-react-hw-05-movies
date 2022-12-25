import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Error } from 'components/Error/Error';
import { getMovieReviews } from 'services/moviesApi';
import { CommentatorName, List, ListItem } from './Rewiews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews = await getMovieReviews(movieId);

        const fetchedReview = reviews.results.map(
          ({ id, author, content, created_at }) => {
            return { id, author, content, created_at };
          }
        );
        setReviews(fetchedReview);
      } catch {
        setError('Something went wrong');
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {error && <Error>{error}</Error>}

      <List>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content, created_at }) => {
            const data = new Date(created_at);
            return (
              <ListItem key={id}>
                <CommentatorName>
                  <b>Author:</b> {author} ({data.toLocaleDateString()})
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
