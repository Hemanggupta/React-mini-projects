import { useState } from 'react';
import reviews from '../../../assets/data/reviews';
import ContentHeader from '../../Template/ContentHeader/ContentHeader';
import Review from './Review/Review';
import './Reviews.css';
function Reviews() {
  const [review, setReview] = useState(reviews[0]);

  const HandleNextReview = () => {
    const currentIndex = reviews.indexOf(review);
    if (currentIndex === reviews.length - 1) {
      setReview(reviews[0]);
    } else {
      setReview(reviews[currentIndex + 1]);
    }
  };

  const HandlePreviousReview = () => {
    const currentIndex = reviews.indexOf(review);
    if (currentIndex === 0) {
      setReview(reviews[reviews.length - 1]);
    } else {
      setReview(reviews[currentIndex - 1]);
    }
  };

  const HandleRandom = review => {
    const currentIndex = reviews.indexOf(review);
    const randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === currentIndex) {
      return HandleRandom(review);
    }
    setReview(reviews[randomIndex]);
  };

  if (!review) {
    return (
      <center>
        <h1>No Review Found</h1>
      </center>
    );
  }

  return (
    <>
      <center>
        <ContentHeader title="Reviews" />
        <div className="p-5 bg-dark card mt-2">
          <div className="row reviews-slider flex-column align-items-center">
            <div className="col">
              <Review review={review} />
            </div>
            <div className="col prev-next-btn">
              <span onClick={() => HandlePreviousReview(review)} className="me-3 fs-3 text-light pointer p-3 pi pi-angle-left"></span>
              <span onClick={() => HandleNextReview(review)} className="fs-3 text-light pointer p-3 pi pi-angle-right"></span>
            </div>
            <div className="col">
              <button type="button" onClick={() => HandleRandom(review)} className="btn">
                Surprise Me
              </button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
export default Reviews;
