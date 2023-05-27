function Alumno({nombre, esMiembro}){
    if(esMiembro){
        return(
            <div className="alumno">
                <div className="row">
                    <div className="col-6">
                        <p>{nombre}</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <p className="esMiembro">✓ Es miembro del grupo</p>
                    </div>
                </div>
            </div>
        );
    }
    return(
        <div className="alumno">
            <p>{nombre}</p>
        </div>
    );
}

export default Alumno;