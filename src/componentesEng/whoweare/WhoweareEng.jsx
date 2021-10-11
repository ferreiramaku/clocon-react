import { Link } from 'react-router-dom';
import './whoweareEng.css';

const WhoweareEng = () => {
    return (
        <section className="pt-5 mt-5 pb-2">
		<h2 className="text-center">Know who we are</h2>
		<div className="container">
			<hr/>
			<div className="row align-items-center justify-content-between">
				<div className="col-md embed-responsive embed-responsive-4by3">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/QqGpTnZvjsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				<div className="col-md p-5">
					<p className="lead">
						Find out the reasons why this network of associations exists.
					</p>
					<p>To defend the interests of the santomean diaspora in the spirit of unity.</p>
					<p>To develop cultural actions that promote and value the santomean identity.</p>
					<p>To improve the technical-professional skills of Sao Tome in order to make them competitive in the international market.</p>
					<p>Helping to improve the income and quality of life of santomeans.</p>
					<p>To support entrepreneurship through a specific action program.</p>
					<div id="iniciativas" className="marcador_escondido"></div>
					<Link to="/aboutus" className="btn btn-light mt-3">
						<i  className="bi bi-chevron-right"></i> Read more
					</Link>
				</div>
			</div>
		</div>
	</section>
    );
}

export default WhoweareEng;
