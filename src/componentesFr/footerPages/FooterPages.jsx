import { Link } from 'react-router-dom';
import './footerPages.css';

const FooterPages = () => {
    return (
        <footer className="p-2 bg-dark text-white text-center position-relative">
            <a href="index.html" className="position-absolute top-10 start-0 pt-4">
                <img src="images/Logo clóçon-branco_2.png" className="img-fluid d-none d-sm-block p-4" alt=""/>
            </a>
            <div className="container pt-3">	
                <div className="d-md-flex flex-row align-items-center justify-content-center">				
                    <div className="p-md-4 p-sm-3"><Link to="/quisommesnous" className="decoration">Qui sommes-nous</Link></div>
                    <div className="p-md-4 p-sm-3"><Link to="/fr#iniciativas" className="decoration">Domaines d'activité</Link></div>
                    <div className="p-md-4 p-sm-3"><Link to="/fr#colaborar" className="decoration">Comment contribuer</Link></div>
                    <div className="p-md-4 p-sm-3"><Link to="/fr" className="decoration">Blog</Link></div>
                    <div className="p-md-4 p-sm-3"><Link to="/nouscontacter" className="decoration">Nous contacter</Link></div>
                </div>	
                <p>Copyright &copy; 2021 Clóçon Pôvô - Diaspora Santoméenne</p>
                <a href="index.html" className="position-absolute bottom-0 end-0 p-5">
                    <i className="bi bi-arrow-up-circle h1"></i>
                </a>
            </div>
        </footer>
    );
}

export default FooterPages;
