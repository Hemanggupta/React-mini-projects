import logo from '../../../../assets/my-logo.png';
import './Intro.css';
const Intro = () => {
  return (
    <>
      <div className="row align-items-center my-3 mx-0 intro-div shadow cursor-pointer">
        <div className="col-4 p-0">
          <img className="my-logo" src={logo} alt="my-logo" />
        </div>
        <div className="col-8 p-0">
          <h5>
            <span>
              Hemang <span className="last-name">Gupta</span>
            </span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Intro;
