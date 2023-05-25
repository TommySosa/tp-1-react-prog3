import Alumno from "./Alumno";

function ListaAlumnos(){
    return(
        <section>
            <h1>Listado de alumnos</h1>
            <ul>
                <Alumno esMiembro={true} nombre={'Tomás Sosa'}></Alumno>
                <Alumno esMiembro={false} nombre={'Joaquin Jara'}></Alumno>
                <Alumno esMiembro={false} nombre={'Ian Cano'}></Alumno>
                <Alumno esMiembro={true} nombre={'Ortiz Elias'}></Alumno>
                <Alumno esMiembro={false} nombre={'Tobias Nieva'}></Alumno>
                <Alumno esMiembro={true} nombre={'Rodrigo Gonzalez'}></Alumno>
                <Alumno esMiembro={false} nombre={'Nicolas Contreras'}></Alumno>
            </ul>
        </section>
    );
}

export default ListaAlumnos;