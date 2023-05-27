import { Button } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import ListaAlumnos from './components/ListaAlumnos';
import BarraLateral from './components/BarraLateral';

function App() {
  return (
    <>
    <div className='grid-layout'>
      <div className='caja c1'>
        <Header titulo={'Trabajo Practico 2 - React'}></Header>
      </div>
      <div className='caja c2'>
        <h2>Menú</h2>
        <div className='container'>
        <div className='row'>
          <div className='col'>
            <Button variant="primary">Primary</Button>
          </div>
          <div className='col'>
            <Button variant="success">Sucess</Button>
          </div>
          <div className='col'>
            <Button variant="danger">Danger</Button>
          </div>
        </div>
        </div>
      </div>
      <div className='caja c3'>
        <div>
          contenido
          <ListaAlumnos></ListaAlumnos>
        </div>
      </div>
      <div className='caja c4'>
        <BarraLateral></BarraLateral>
      </div>
      <div className='caja c5'>
        footer
      </div>
    </div>
    </>
  );
}

export default App;
