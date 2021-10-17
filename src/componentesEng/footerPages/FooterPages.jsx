import { Link } from 'react-router-dom';
import './footerPages.css';

const FooterPages = () => {
    return (
        <footer className="p-2 bg-dark text-white text-center position-relative">
            <Link to="/eng" className="position-absolute top-10 start-0 pt-4">
                <img src="images/Logo clóçon-branco_2.png" className="img-fluid d-none d-lg-block pt-5 dim1" alt=""/>
            </Link>
            <div className="container pt-3">	
                <div className="d-md-flex flex-row align-items-center justify-content-center">				
                    <div className="p-md-3 p-sm-2"><Link to="/aboutus" className="decoration liga">About us</Link></div> 
                    <div className="p-md-3 p-sm-2"><Link to="/activities" className="decoration liga">What we do</Link></div>
                    <div className="p-md-3 p-sm-2"><Link to="/contribute" className="decoration liga">How to contribute</Link></div>
                    <div className="p-md-3 p-sm-2"><Link to="/" className="decoration liga">Blog</Link></div>
                    <div className="p-md-3 p-sm-2"><Link to="/contactus" className="decoration liga">Contact us</Link></div>
                </div>	
                <p className="liga1">Copyright &copy; 2021 Clóçon Pôvô - Santomean Diaspora</p>
                <Link to="/eng" className="position-absolute bottom-0 end-0 p-4">
                    <i className="bi bi-arrow-up-circle h1"></i>
                </Link>
            </div> 
        </footer> 
    );
}

export default FooterPages;
