import { nanoid } from 'nanoid';
import { useEffect, useMemo, useRef, useState } from 'react';
import './BoxesOptimized.css';
function BoxesOptimized({ boxMatrix }) {
  const visibleBoxesCount = useMemo(() => boxMatrix.flat().filter(Boolean).length, [boxMatrix]);
  const isUnloading = useRef(false);
  const [selectedBoxes, setSelectedBoxes] = useState(new Set());

  useEffect(() => {
    if (selectedBoxes.size === visibleBoxesCount) {
      unload();
    }
    function unload() {
      isUnloading.current = true;
      const keys = Array.from(selectedBoxes.keys());
      function removeNextKey() {
        if (keys.length) {
          const toBeRemovedKey = keys.shift();
          setSelectedBoxes(prevSet => {
            const updatedSet = new Set(prevSet);
            updatedSet.delete(toBeRemovedKey);
            return updatedSet;
          });
          setTimeout(removeNextKey, 500);
        } else {
          isUnloading.current = false;
          setSelectedBoxes(new Set());
        }
      }
      setTimeout(() => {
        removeNextKey();
      }, 100);
    }
  }, [selectedBoxes, visibleBoxesCount]);

  const handleBoxClick = event => {
    // const key = event.target.attributes['data-key'].value;
    // const status = event.target.attributes['data-status'].value;
    const { key, status } = event.target.dataset;
    if (!status || status === 'hidden' || selectedBoxes.has(key) || isUnloading.current) {
      return;
    }
    setSelectedBoxes(prevSelectedBoxes => {
      return new Set(prevSelectedBoxes.add(key));
    });
  };

  return (
    <>
      <div className="boxes-container" onClick={handleBoxClick}>
        {boxMatrix.map((row, rowIndex) => {
          return (
            <div key={nanoid()} className="mb-3 d-flex gap-3 justify-content-center">
              {row.map((box, boxIndex) => {
                const boxCoordinate = `${rowIndex}-${boxIndex}`;
                const isSelected = selectedBoxes.has(boxCoordinate);
                return (
                  <div
                    key={boxCoordinate}
                    role="button"
                    data-key={boxCoordinate}
                    data-status={box ? 'visible' : 'hidden'}
                    className={`uber-box ${box ? 'visible' : 'hidden'} ${isSelected ? 'selected' : ''} ${
                      isUnloading.current ? 'unloading' : ''
                    }`}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default BoxesOptimized;
