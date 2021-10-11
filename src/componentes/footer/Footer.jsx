import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-2 bg-dark text-white text-center position-relative">
            <a href="index.html" className="position-absolute top-10 start-0 pt-4">
                <img src="images/Logo clóçon-branco_2.png" className="img-fluid d-none d-sm-block p-4" alt=""/>
            </a>
            <div className="container pt-3">	
                <div className="d-md-flex flex-row align-items-center justify-content-center">				
                    <div className="p-md-4 p-sm-3"><a href="#quemsomos" className="decoration">Quem somos</a></div>
                    <div className="p-md-4 p-sm-3"><a href="#iniciativas" className="decoration">Áreas de atividade</a></div>
                    <div className="p-md-4 p-sm-3"><a href="#colaborar" className="decoration">Como contribuir</a></div>
                    <div className="p-md-4 p-sm-3"><a href="#blog" className="decoration">Blog</a></div>
                    <div className="p-md-4 p-sm-3"><a href="#contactos" className="decoration">Contacta-nos</a></div>
                </div>	
                <p>Copyright &copy; 2021 Clóçon Pôvô - Diáspora São-tomense</p>
                <Link to="/" className="position-absolute bottom-0 end-0 p-5">
                    <i className="bi bi-arrow-up-circle h1"></i>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
