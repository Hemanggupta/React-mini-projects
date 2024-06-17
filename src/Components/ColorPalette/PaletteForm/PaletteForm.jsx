import { Button } from 'primereact/button';
import { ColorPicker } from 'primereact/colorpicker';
import { InputText } from 'primereact/inputtext';
import './PaletteForm.css';

function PaletteForm({ color, GetPaletteColors, setColor }) {
  return (
    <>
      <h4>Color Palette</h4>
      <br />
      <form className="color-form" onSubmit={() => GetPaletteColors(event)}>
        <ColorPicker value={color} onChange={e => setColor(`#${e.value}`)} />
        <InputText value={color} onChange={e => setColor(e.target.value)} placeholder="#fce523" />
        <Button label="Submit" style={{ background: color }} />
      </form>
    </>
  );
}
export default PaletteForm;
