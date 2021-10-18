import Formulario from '../form/Formulario';
import './showcase3.css';

const Showcase3 = () => {
    return (
        <>
        <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"> 
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h4>Bienvenue sur le site de</h4>
                        <h1 className="text-warning">Clóçon Pôvô</h1>
                        <p className="lead my-4">Clóçon Pôvô est un réseau international d'associations santoméennes à travers le monde. 
                            Notre objectif principal est d'unir et de renforcer notre communauté.
                        </p>
                        <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">Adhérez maintenant!</button>
                    </div>
                    <img className="img-fluid w-50 d-none d-md-block" src="images/mulher_1.png" alt=""/> 

                </div>
            </div>
        </section>
        
        <Formulario/>
        </>
    );
}

export default Showcase3;
