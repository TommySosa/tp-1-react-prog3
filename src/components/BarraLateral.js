import { Card } from "react-bootstrap";
import perfil from '../images/perfil.jpg';
import elias from '../images/elias.jpg';
import rodrigo from '../images/rodrigo.jpg';
function BarraLateral() {
    return (
        <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-5">
                        <Card style={{ width: 200, margin: 5 }}>
                            <Card.Img src={perfil} style={{ width: 200, height:200 }} />
                            <Card.Body>
                                <Card.Title>Tomás F. Sosa</Card.Title>
                                <Card.Text>
                                    Estudiante, 19 años, de Yerba Buena.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-5">
                        <Card style={{ width: 200, margin: 5 }}>
                            <Card.Img src={elias} style={{ width: 200, height:200 }} />
                            <Card.Body>
                                <Card.Title>Elias Ortiz</Card.Title>
                                <Card.Text>
                                    Estudiante, 19 años, de Lomas de Tafi.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-5">
                        <Card style={{ width: 200, margin: 5 }}>
                            <Card.Img src={rodrigo} style={{ width: 200, height:200 }} />
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
    );
}

export default BarraLateral;