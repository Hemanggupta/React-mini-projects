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
        <div className="col-md-1 col-1">
          <ColorPicker value={color} onChange={e => setColor(`#${e.value}`)} />
        </div>
        <div className="col-md-7 col-lg-3 col-8 color-input">
          <InputText value={color} onChange={e => setColor(e.target.value)} placeholder="#fce523" />
        </div>
        <div className="col-md-3 col-3">
          <Button label="Submit" style={{ background: color }} />
        </div>
      </form>
    </>
  );
}
export default PaletteForm;
