import { RadioButton } from 'primereact/radiobutton';
function StorageOptions({ storage, setStorageMode }) {
  return (
    <>
      <div className="storage-options d-flex justify-content-center mt-3">
        <div className="d-flex align-items-center">
          <RadioButton
            inputId="storage1"
            name="local"
            value="local"
            onChange={e => setStorageMode(e.value)}
            checked={storage === 'local'}
          />
          <label htmlFor="storage1" className="mx-2">
            Local Storage
          </label>
        </div>
        <div className="d-flex align-items-center">
          <RadioButton inputId="storage2" name="db" value="db" onChange={e => setStorageMode(e.value)} checked={storage === 'db'} />
          <label htmlFor="storage2" className="mx-2">
            Firebase
          </label>
        </div>
      </div>
    </>
  );
}
export default StorageOptions;
