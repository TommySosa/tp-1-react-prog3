import { useEffect } from "react";

function Header({titulo}){

    useEffect(()=>{
        document.title = titulo;
    }, [titulo])

    return(
        <h1>{titulo}</h1>
    );
}

export default Header;