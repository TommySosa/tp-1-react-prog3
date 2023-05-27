import { BsInstagram } from 'react-icons/bs'

function Footer() {
    return (
        <div className="container">
            <div className='d-flex justify-content-center'>
                <div className="row">
                    <div className="col">
                        <a href="https://www.instagram.com/tomassosa20/" target='_blank'><BsInstagram /> Tomás Sosa</a>
                    </div>
                    <div className="col">
                        <a href="https://www.instagram.com/ortizeliass/"><BsInstagram /> Elias Ortiz</a>
                    </div>
                    <div className="col">
                        <a href="https://www.instagram.com/rodrigo_gonzalez.31/"><BsInstagram /> Rodrigo Gonzalez</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer

