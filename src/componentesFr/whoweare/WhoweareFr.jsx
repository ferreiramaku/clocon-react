import { Link } from 'react-router-dom';
import './whoweareFr.css';

const WhoweareFr = () => {
    return (
        <section className="pt-5 mt-5 pb-2">
            <h2 className="text-center">Qui sommes nous?</h2>
            <div className="container">
                <hr/>
                <div className="row align-items-center justify-content-between">
                    <div className="col-md embed-responsive embed-responsive-4by3">
                        <iframe className="vid" max-width="560" height="315" src="https://www.youtube.com/embed/QqGpTnZvjsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-md p-5">
                        
                        <p className="lead">
                            Découvrez les raisons pour lesquelles ce réseau d'associations existe.
                        </p>
                        <p>Défendre les intérêts de la diaspora santoméenne dans un esprit d'unité.</p>
                        <p>Développer des actions culturelles qui valorisent et promeuvent l'identité santoméenne.</p>
                        <p>Améliorer les compétences technico-professionnelles des santoméens(-ennes) afin de les rendre compétitifs sur le marché international.</p>
                        <p>Aider à améliorer les revenus et la qualité de vie des santoméens(-ennes).</p>
                        <p>Soutenir l'entrepreneuriat sur la base d'un programme d'action spécifique.</p>
                        <div id="iniciativas" className="marcador_escondido"></div>
                        <Link to="/quisommesnous" className="btn btn-light mt-3">
                                <i  className="bi bi-chevron-right"></i> Lire la suite
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhoweareFr;
