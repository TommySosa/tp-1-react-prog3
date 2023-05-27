import { Button } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import ListaAlumnos from './components/ListaAlumnos';
import BarraLateral from './components/BarraLateral';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='grid-layout'>
      <div className='caja c1'>
        <Header titulo={'Trabajo Practico 1 - React'}></Header>
      </div>
      <div className='caja c2'>
        <Menu></Menu>
      </div>
      <div className='caja c3'>
        <div>
          <ListaAlumnos></ListaAlumnos>
        </div>
      </div>
      <div className='caja c4'>
        <BarraLateral></BarraLateral>
      </div>
      <div className='caja c5'>
        <Footer></Footer>
      </div>
    </div>
    </>
  );
}

export default App;
