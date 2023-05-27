import { Card } from "react-bootstrap";
import perfil from '../images/perfil.jpg';
import elias from '../images/elias.jpg';
import rodrigo from '../images/rodrigo.jpg';
function BarraLateral() {
    return (
        <div className="container">
            <div className="d-flex justify-content-center">

                <div className="row">
                    <div className="col">
                        <Card style={{ width: 200, margin: 10 }}>
                            <Card.Img src={perfil} />
                            <Card.Body>
                                <Card.Title>Tomás F. Sosa</Card.Title>
                                <Card.Text>
                                    Estudiante, 19 años, de Yerba Buena.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card style={{ width: 200, margin: 10 }}>
                            <Card.Img src={elias} />
                            <Card.Body>
                                <Card.Title>Elias Ortiz</Card.Title>
                                <Card.Text>
                                    Estudiante, 19 años, de Yerba Buena
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card style={{ width: 200, margin: 10 }}>
                            <Card.Img src={rodrigo} />
                            <Card.Body>
                                <Card.Title>Rodrigo Gonzalez</Card.Title>
                                <Card.Text>
                                    Estudiante, 19 años, de Yerba Buena.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BarraLateral;