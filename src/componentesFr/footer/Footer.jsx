import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="p-2 bg-dark text-white text-center position-relative">
            <a href="index.html" className="position-absolute top-10 start-0 pt-4">
                <img src="images/Logo clóçon-branco_2.png" className="img-fluid d-none d-lg-block pt-5" alt=""/>
            </a>
            <div className="container pt-3">	
                <div className="d-md-flex flex-row align-items-center justify-content-center">				
                    <div className="p-md-4 p-sm-3"><a href="#quemsomos" className="decoration liga">Qui sommes-nous</a></div>
                    <div className="p-md-4 p-sm-3"><a href="#iniciativas" className="decoration liga">Domaines d'activité</a></div>
                    <div className="p-md-4 p-sm-3"><a href="#colaborar" className="decoration liga">Comment contribuer</a></div>
                    <div className="p-md-4 p-sm-3"><a href="#blog" className="decoration liga">Blog</a></div>
                    <div className="p-md-4 p-sm-3"><a href="#contactos" className="decoration liga">Nous contacter</a></div>
                </div>	
                <p className="liga1">Copyright &copy; 2021 Clóçon Pôvô - Diaspora Santoméenne</p>
                <Link to="/fr" className="position-absolute bottom-0 end-0 p-4">
                    <i className="bi bi-arrow-up-circle h1"></i>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
