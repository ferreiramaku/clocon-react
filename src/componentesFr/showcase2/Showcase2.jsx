
import './showcase2.css';

const Showcase2 = () => {
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
                    <img className="img-fluid w-50 d-none d-sm-block" src="images/jovem.png" alt=""/> 

                </div>
            </div>
        </section>
        
        <div className="modal fade" id="enroll" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="enrollLabel">Formulaire d'adhésion</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">Remplissez ce formulaire et nous vous contacterons sous peu.</p>
                        <form action="">
                            <div className="mb-3">
                                <label for="first-name" className="col-form-label">Prénom: </label>
                                <input type="text" className="form-control" id="first-name"/>
                            </div>
                            <div className="mb-3">
                                <label for="last-name" className="col-form-label">Nom: </label>
                                <input type="text" className="form-control" id="last-name"/>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="col-form-label">E-mail: </label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="mb-3">
                                <label for="phone" className="col-form-label">Portable: </label>
                                <input type="tel" className="form-control" id="phone"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        <button type="button" className="btn btn-primary">Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Showcase2;
