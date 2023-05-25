import './App.css';
import Header from './components/Header';
import ListaAlumnos from './components/ListaAlumnos';

function App() {
  return (
    <>
    <div className='grid-layout'>
      <div className='caja c1'>
        <Header titulo={'Trabajo Practico 1 - React'}></Header>
      </div>
      <div className='caja c2'>
        menu
      </div>
      <div className='caja c3'>
        <div>
          contenido
          <ListaAlumnos></ListaAlumnos>
        </div>
      </div>
      <div className='caja c4'>
        lateral
      </div>
      <div className='caja c5'>
        footer
      </div>
    </div>
    </>
  );
}

export default App;
