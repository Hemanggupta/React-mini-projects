import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Values from 'values.js';
import PaletteForm from './PaletteForm/PaletteForm';
import Palettes from './Palettes/Palettes';
function ColorPalette() {
  const [color, setColor] = useState('#1500ff');
  const [colorPalettes, setColorPalettes] = useState([]);

  const GetPaletteColors = event => {
    event?.preventDefault();
    try {
      const colors = new Values(color).all(10);
      colors.reverse();
      setColorPalettes(colors);
      console.log(colors);
    } catch (error) {
      toast.error(error.message);
      setColorPalettes([]);
    }
  };

  useEffect(() => {
    GetPaletteColors();
  }, []);

  return (
    <section className="palette-container">
      <PaletteForm color={color} setColor={setColor} GetPaletteColors={GetPaletteColors} />
      <Palettes colorPalettes={colorPalettes} />
    </section>
  );
}
export default ColorPalette;
