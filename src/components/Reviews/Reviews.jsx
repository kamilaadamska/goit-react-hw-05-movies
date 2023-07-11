import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/fetchMovies';
import { List, ListItem, SpanAuthor, TextReview } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setError('');
        const newReview = await fetchMovieReviews(id);
        if (newReview.length === 0) throw new Error();
        setReviews(newReview);
      } catch (error) {
        setError('No reviews found in our database.');
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <div>
      <List>
        {reviews &&
          reviews.map(({ author, content, id }) => {
            return (
              <ListItem key={id}>
                <SpanAuthor>{author}</SpanAuthor>
                <TextReview>{content}</TextReview>
              </ListItem>
            );
          })}
      </List>
      {error && <p style={{ textAlign: 'center' }}>{error}</p>}
    </div>
  );
};

export default Reviews;
