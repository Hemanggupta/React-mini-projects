import './Review.css';

const Review = ({ review }) => {
  const { name, job, image, text } = review;

  return (
    <>
      <div className="review-card card bg-black">
        <div className="card-body d-flex flex-column align-items-center text-light">
          <div className="img-container">
            <img src={image} alt={name} className="rounded-circle review-img" />
          </div>
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2">{job}</h6>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Review;
