
import './showcase4.css';

const Showcase4 = () => {
    return (
        <>
        <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">

                    <div>
                        <h4>Bem-vindo(a) ao website da</h4>
                        <h1 className="text-warning">Clóçon Pôvô</h1>
                        <p className="lead my-4">A Clóçon Pôvô é uma rede internacional de associações de são-tomenses em todo o mundo. 
                            O nosso objetivo central é o de unir, fortalecer e empoderar os são-tomenses.
                        </p>
                        <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">Adira já!</button>
                    </div>

                    <img className="img-fluid w-50 d-none d-md-block" src="images/man_1.png" alt="" />  

                </div>
            </div>
	    </section>
        <div className="modal fade" id="enroll" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="enrollLabel">Formulário de Adesão</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">Preencha esse formulário para lhe contactarmos.</p>
                        <form action="">
                            <div className="mb-3">
                                <label for="first-name" className="col-form-label">Nome: </label>
                                <input type="text" className="form-control" id="first-name"/>
                            </div>
                            <div className="mb-3">
                                <label for="last-name" className="col-form-label">Apelido: </label>
                                <input type="text" className="form-control" id="last-name"/>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="col-form-label">E-mail: </label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="mb-3">
                                <label for="phone" className="col-form-label">Telemóvel: </label>
                                <input type="tel" className="form-control" id="phone"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-primary">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Showcase4;
