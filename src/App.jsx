import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Container from './Template/Container/Container';

function App() {
  return (
    <>
      <Container />
      <ToastContainer position="bottom-right" autoClose={1000} theme="dark" newestOnTop />
    </>
  );
}

export default App;
