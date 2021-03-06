import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top nav-hr ">
		<div className="container">

			<Link to="/" className="navbar-brand">
				<img src="images/Logo clóçon-branco_3.png" alt="" className="logo"/>
			</Link>

			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navmenu"> 
				<ul className="navbar-nav ms-auto">
					<li className="nav-item text-center">
						<a href="#quemsomos" className="nav-link">Quem somos</a>
					</li>
					<li className="nav-item text-center">
						<a href="#iniciativas" className="nav-link">Atividades</a>
					</li>
					<li className="nav-item text-center">
						<a href="#colaborar" className="nav-link">Contribuir</a>
					</li>
					<li className="nav-item text-center">
						<a href="#blog" className="nav-link">Blog</a>
					</li>
					<li className="nav-item text-center">
						<a href="#contactos" className="nav-link">Contactos</a>
					</li>
					<li className="nav-item text-center">
						<Link to="/fr" className="nav-link"><img src="images/france-flag.png"  alt="" title="Version Française" className="liga" /></Link>
					</li>
					<li className="nav-item text-center">
						<Link to="/eng" className="nav-link"><img src="images/united-kingdom-flag.png"  alt="" title="English Version" className="liga" /></Link>
					</li>	
				</ul> 
			</div>
		</div>
	</nav>
    );
}

export default Navbar;