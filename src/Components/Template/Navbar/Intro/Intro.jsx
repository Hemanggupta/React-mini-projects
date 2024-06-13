import logo from '../../../../assets/my-logo.png';
import './Intro.css';

import { Card } from 'primereact/card';

const Intro = () => {
  return (
    <>
      <Card className="my-3">
        <div className="row align-items-center cursor-pointer">
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
      </Card>
    </>
  );
};

export default Intro;
