import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
		<nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top nav-hr">
			<div className="container">
				<Link to="/eng" className="navbar-brand">
					<img src="images/Logo clóçon-branco_3.png" className="logo" alt="Logo"/>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navmenu"> 
					<ul className="navbar-nav ms-auto">
						<li className="nav-item text-center">
							<a href="#quemsomos" className="nav-link">About us</a>
						</li>
						<li className="nav-item  text-center">
							<a href="#iniciativas" className="nav-link">What we do</a>
						</li>
						<li className="nav-item  text-center">
							<a href="#colaborar" className="nav-link">Contribute</a>
						</li>
						<li className="nav-item  text-center">
							<a href="#blog" className="nav-link">Blog</a>
						</li>
						<li className="nav-item  text-center">
							<a href="#contactos" className="nav-link">Contact us</a>
						</li>
						<li className="nav-item text-center">
							<Link to="/" className="nav-link"><img src="images/portuguese-flag.png" alt="" title="Versão Portuguesa" className="liga" /></Link>
						</li>
						<li className="nav-item text-center">
							<Link to="/fr" className="nav-link"><img src="images/france-flag.png" alt="" title="Version Française" className="liga" /></Link>
						</li>
					</ul> 
				</div>
			</div>
		</nav>
    );
}

export default Navbar;