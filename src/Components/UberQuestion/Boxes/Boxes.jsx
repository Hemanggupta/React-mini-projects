// My Approach
import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';
import './Boxes.css';

function Boxes({ boxMatrix }) {
  const [activatedBoxes, setActivatedBoxes] = useState([]);
  const deactivateBoxes = useRef(false);
  const matrixItemCount = useRef(0);

  useEffect(() => {
    if (!matrixItemCount.current) {
      matrixItemCount.current = boxMatrix.flat().filter(Boolean).length;
    }
  });

  const handleClickOnBox = boxCoordinates => {
    if (activatedBoxes.length === matrixItemCount.current - 1) {
      deactivateBoxes.current = true;
    }
    if (!activatedBoxes.includes(boxCoordinates)) {
      setActivatedBoxes([...activatedBoxes, boxCoordinates]);
    }
    if (deactivateBoxes.current) {
      setActivatedBoxes(prevVal => {
        prevVal.forEach((box, i) => {
          setTimeout(() => {
            prevVal.shift();
            setActivatedBoxes([...prevVal]);
          }, i * 500);
        });
        return [boxCoordinates, ...prevVal];
      });
      deactivateBoxes.current = false;
    }
  };
  return (
    <>
      {boxMatrix.map((row, i) => (
        <div key={nanoid()} className="d-flex justify-content-center gap-3">
          {row.map((box, j) => {
            const boxCoordinate = `${i}-${j}`;
            return (
              <div
                key={nanoid()}
                onClick={() => {
                  handleClickOnBox(boxCoordinate);
                }}
                className={`u-box mt-3 ${box ? 'visible' : 'hidden'} ${
                  activatedBoxes.includes(boxCoordinate) ? 'green-bg' : 'transparent-bg'
                }`}
              ></div>
            );
          })}
        </div>
      ))}
    </>
  );
}
export default Boxes;
