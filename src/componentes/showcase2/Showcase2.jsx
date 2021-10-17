import Formulario from './Formulario';
import './showcase2.css';

const Showcase2 = () => {
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

                    <img className="img-fluid w-50 d-none d-sm-block" src="images/jovem.png" alt="" /> 

                </div>
            </div>
	    </section>
        <Formulario/>
        </>
    );
}

export default Showcase2;
