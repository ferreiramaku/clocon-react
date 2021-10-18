
import './showcase3.css';
import Formulario from '../form/Formulario';

const Showcase3 = () => {
    return (
        <>
        <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h4>Welcome to the</h4>
                        <h1 className="text-warning">Clóçon Pôvô website</h1>
                        <p className="lead my-4">Clóçon Pôvô is an international network of santomeans associations throughout the world. Our main objective is to unite, strengthen and empower santomeans.
                        </p>
                        <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">Join now!</button>
                    </div>
                    <img className="img-fluid w-50 d-none d-sm-block" src="images/mulher_1.png" alt=""/> 
                </div>
            </div>
        </section>
        
        <Formulario/>
        </>
    );
}

export default Showcase3;
