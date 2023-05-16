import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';
import { Review } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovieReviews = async () => {
    try {
      const data = await getMovieReviews(movieId);
      setMovieReviews(data);
    } catch (fetchError) {
      console.log(fetchError);
    }
  };

  return (
    <>
      {movieReviews.length === 0 && <p>No reviews yet.</p>}
      {movieReviews &&
        movieReviews.map(({ id, author, content }) => (
          <Review key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </Review>
        ))}
    </>
  );
};

export default Reviews;
