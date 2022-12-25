import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesApi';
import { CommentatorName, List, ListItem } from './Rewiews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const review = await getMovieReviews(movieId);
        setReviews(review.results);
      } catch {}
    };
    getReviews();
  }, [movieId]);

  return (
    <List>
      {reviews.length > 0 ? (
        reviews.map(review => {
          return (
            <ListItem key={review.id}>
              <CommentatorName>{review.author}</CommentatorName>
              <p>{review.content}</p>
            </ListItem>
          );
        })
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </List>
  );
};

export default Reviews;
