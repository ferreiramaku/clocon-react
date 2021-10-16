import { Link } from 'react-router-dom';
import './whoweare.css';

const Whoweare = () => {
    return (
        <section className="pt-5 mt-5 pb-2">
            <h2 className="text-center">Saiba quem somos</h2>
            <div className="container">
                <hr />
                <div className="row align-items-center justify-content-between">
                    <div className="col-md embed-responsive embed-responsive-4by3">
                        <iframe className="vid" max-width="560" height="315" src="https://www.youtube.com/embed/QqGpTnZvjsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-md p-5"> 
                        
                        <p className="lead">
                            Descubra as razões pelas quais essa rede de associações existe.
                        </p>
                        <p>Defender os interesses da diáspora são-tomense no espírito de unidade.</p>
                        <p>Desenvolver ações culturais que promovam e valorizem a identidade sãotomense.</p>
                        <p>Melhorar as competências técnico-profissionais dos sãotomenses de forma a torná-los competitivos no mercado internacional.</p>
                        <p>Ajudar a melhorar os rendimentos e a qualidade de vida dos são-tomenses.</p>
                        <p>Apoiar o empreendedorismo através de um programa específico de ação.</p>
                        <div id="iniciativas" className="marcador_escondido"></div>
                        <Link to="/quemsomos" className="btn btn-light mt-3">
                            <i  className="bi bi-chevron-right"></i> Leia mais
                        </Link>
                        
                    </div>
                </div>
            </div>
	    </section>
    );
}

export default Whoweare;
