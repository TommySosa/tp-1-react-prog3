import { Button } from "react-bootstrap";
function Menu() {
    return (
        <>
            <h2>Grupo 11</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Button variant="primary">Primary</Button>
                    </div>
                    <div className='col'>
                        <Button variant="success">Sucess</Button>
                    </div>
                    <div className='col'>
                        <Button variant="warning">Danger</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu