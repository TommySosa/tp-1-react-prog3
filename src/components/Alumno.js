function Alumno({nombre, apellido, esMiembro}){
    if(esMiembro){
        return(
            <div className="alumno">
                <div className="row">
                    <div className="col">
                        {nombre}
                        {apellido}
                    </div>
                    <div className="col d-flex justify-content-end">
                        <p className="noMiembro">* Es miembro del grupo</p>
                    </div>
                </div>
            </div>
        );
    }
    return(
        <div className="alumno">
            {nombre}
            {apellido}
        </div>
    );
}

export default Alumno;