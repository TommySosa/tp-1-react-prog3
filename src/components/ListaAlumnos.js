import Alumno from "./Alumno";

function ListaAlumnos(){
    return(
        <section>
            <h1>Listado de alumnos</h1>
            <ul>
                <Alumno esMiembro={true} nombre={'Tomás'} apellido={'Sosa'}></Alumno>
                <Alumno esMiembro={false} nombre={'Joaquin'} apellido={'Jara'}></Alumno>
                <Alumno esMiembro={false} nombre={'Ian'} apellido={'Cano'}></Alumno>
                <Alumno esMiembro={true} nombre={'Ortiz'} apellido={'Elias'}></Alumno>
                <Alumno esMiembro={false} nombre={'Tobias'} apellido={'Nieva'}></Alumno>
                <Alumno esMiembro={true} nombre={'Rodrigo'} apellido={'Gonzalez'}></Alumno>
                <Alumno esMiembro={false} nombre={'Nicolas'} apellido={'Contreras'}></Alumno>
            </ul>
        </section>
    );
}

export default ListaAlumnos;