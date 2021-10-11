import { Link } from 'react-router-dom';
import './navbarPages.css';

const NavbarPages = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top nav-hr ">
		<div className="container">

			<Link to="/fr"  className="navbar-brand">
				<img src="images/Logo clóçon-branco_3.png" alt="" className="logo"/>
			</Link>

			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navmenu">
				<ul className="navbar-nav ms-auto">
					<li className="nav-item text-center">
						<Link to="/quisommesnous" className="nav-link">Qui sommes-nous</Link>
					</li>
					<li className="nav-item text-center">
						<a href="#iniciativas" className="nav-link">Domaines d'activité</a>
					</li>
					<li className="nav-item text-center">
						<a href="#colaborar" className="nav-link">Comment contribuer</a>
					</li>
					<li className="nav-item text-center">
						<a href="#blog" className="nav-link">Blog</a>
					</li>
					<li className="nav-item text-center">
							<Link to="/nouscontacter" className="nav-link">Nous contacter</Link>
					</li>
					<li className="nav-item text-center">
						<Link to="/" className="nav-link"><img src="images/portuguese-flag.png"  alt="" title="Version Française"/></Link>
					</li>
					<li className="nav-item text-center">
						<Link to="/eng" className="nav-link"><img src="images/united-kingdom-flag.png"  alt="" title="English Version"/></Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
    );
}

export default NavbarPages;
