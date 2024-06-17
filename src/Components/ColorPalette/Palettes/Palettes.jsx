import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import './Palettes.css';
function Palettes({ colorPalettes }) {
  const HandleCopy = color => {
    if (!navigator) {
      toast.error('Sorry! Your browser does not support clipboard functionality');
    } else {
      navigator.clipboard.writeText(color);
      toast.success(`Color ${color} copied to clipboard`);
    }
  };
  return (
    <>
      <div className="palettes-container">
        {colorPalettes.map((color, index) => {
          const { hex, weight } = color;
          const style = {
            background: `#${hex}`,
            color: index > 10 ? 'black' : 'white'
          };
          return (
            <div key={nanoid()} className="palette" onClick={() => HandleCopy(`#${hex}`)} style={style}>
              <p>{weight}%</p>
              <p>#{hex}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Palettes;
