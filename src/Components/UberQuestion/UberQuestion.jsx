import { Button } from 'primereact/button';
import { useState } from 'react';
import BoxesOptimized from './Boxes/BoxesOptimized';
import UpdateMatrix from './UpdateMatrix/UpdateMatrix';

const masterMatrix = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1]
];

function UberQuestion() {
  const [isUpdatingMatrix, setIsUpdatingMatrix] = useState(false);

  const [boxMatrix, setBoxMatrix] = useState(masterMatrix);

  const handleChangeMatrix = () => {
    setIsUpdatingMatrix(!isUpdatingMatrix);
  };

  return (
    <>
      <center>
        <h3>Uber Interview Question</h3>
        <Button label={`${isUpdatingMatrix ? 'Save' : 'Change'} Matrix`} className="my-3 btn" onClick={handleChangeMatrix} />
        {/* <Boxes boxMatrix={boxMatrix} /> */}
        {isUpdatingMatrix ? <UpdateMatrix boxMatrix={boxMatrix} setBoxMatrix={setBoxMatrix} /> : <BoxesOptimized boxMatrix={boxMatrix} />}
      </center>
    </>
  );
}
export default UberQuestion;
