import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-2 bg-dark text-white text-center position-relative">
            <Link to="/" className="position-absolute top-10 start-0 pt-4">
                <img src="images/Logo clóçon-branco_2.png" className="img-fluid d-none d-lg-block pt-5 dim1" alt=""/>
            </Link>
            <div className="container pt-3">	
                <div className="d-md-flex flex-row align-items-center justify-content-center">				
                    <div className="p-md-3 p-sm-2"><a href="#quemsomos" className="decoration liga">Quem somos</a></div>
                    <div className="p-md-3 p-sm-2"><a href="#iniciativas" className="decoration liga">Áreas de atividade</a></div>
                    <div className="p-md-3 p-sm-2"><a href="#colaborar" className="decoration liga">Como contribuir</a></div>
                    <div className="p-md-3 p-sm-2"><a href="#blog" className="decoration liga">Blog</a></div>
                    <div className="p-md-3 p-sm-2"><a href="#contactos" className="decoration liga">Contacta-nos</a></div>
                </div>	
                <p className="liga1">Copyright &copy; 2021 Clóçon Pôvô - Diáspora São-tomense</p>
                <Link to="/" className="position-absolute bottom-0 end-0 p-4">
                    <i className="bi bi-arrow-up-circle h1"></i>
                </Link>
            </div>
        </footer> 
    );
}

export default Footer;
