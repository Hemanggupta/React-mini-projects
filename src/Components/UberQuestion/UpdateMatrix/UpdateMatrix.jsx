import { nanoid } from 'nanoid';
import './UpdateMatrix.css';

function UpdateMatrix({ boxMatrix, setBoxMatrix }) {
  const handleBoxClick = event => {
    const target = event.target.closest('.update-box');
    if (target) {
      const index = target.dataset.index.split(',').map(Number);
      const newMatrix = Array.from(boxMatrix);
      newMatrix[index[0]][index[1]] = !newMatrix[index[0]][index[1]];
      setBoxMatrix(newMatrix);
    }
  };
  return (
    <>
      <div className="Update-boxes-container" onClick={handleBoxClick}>
        {boxMatrix.map((row, rowIndex) => {
          return (
            <div key={nanoid()} className="mb-3 d-flex gap-3 justify-content-center">
              {row.map((box, boxIndex) => {
                const boxCoordinate = [rowIndex, boxIndex];
                return (
                  <div
                    key={boxCoordinate}
                    data-index={boxCoordinate}
                    className={`update-box d-flex justify-content-center align-items-center`}
                  >
                    <em className={`pi pi-check fs-3 fw-bolder ${box ? 'pi-check text-success' : 'pi-times text-danger'}`}></em>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default UpdateMatrix;
