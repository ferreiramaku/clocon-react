import './activities.css';
import Cidadania from './Cidadania';
import Cultura from './Cultura';
import Desporto from './Desporto';
import Empreendedorismo from './Empreendedorismo';
import Emprego from './Emprego';
import Formacao from './Formacao'; 

const Activities = () => {
    return (
        <>
		<section  className="p-5">
			<div className="container">
				<h2 className="text-center">Domaines d'activité</h2>
				<hr/>

				<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">

					<div class="col ">
						<div className="card bg-fundo-3 text-dark">
							<div className="card-body text-center">
								<div className="h1 mb-3">
									<i className="bi bi-easel"></i>
								</div>
								<h3 className="card-title mb-3 text-dark">
									Actions de formation
								</h3>
								<p className="card-text">
									Avec nos formations, nous visons la croissance technico-professionnelle de nos membres. 
									Nous préparons pour vous un plan de développement professionnel afin de maximiser votre 
									potentiel et vos revenus.
								</p>
								<a href="ola.html" className="btn btn-info"  data-bs-toggle="modal" data-bs-target="#formacao">Lire la suite</a>
							</div>
						</div>
					</div>
					
					<div class="col ">
						<div className="card bg-fundo-5 text-dark">
							<div className="card-body text-center">
								<div className="h1 mb-3">
									<i className="bi bi-file-bar-graph"></i>
								</div>
								<h3 className="card-title mb-3 text-dark">
									Entrepreneuriat
								</h3>
								<p className="card-text">
									Le temps est venu pour vous d'entreprendre de manière responsable et durable. Notre programme 
									d'entrepreneuriat vous aidera à identifier votre domaine d'activité, préparer votre business 
									plan, gérer votre entreprise et rechercher des financements. 
								</p>
								<a href="ola.html" className="btn btn-secondary"  data-bs-toggle="modal" data-bs-target="#empreendedorismo">Lire la suite</a>
							</div>
						</div>
					</div>
					
					<div class="col ">
						<div className="card bg-fundo-3 text-dark">
							<div className="card-body text-center">
								<div className="h1 mb-3">
									<i className="bi bi-people"></i>
								</div>
								<h3 className="card-title mb-3 text-dark">
									Emploie
								</h3>
								<p className="card-text">
									Notre bourse d'emploi est disponible à tous nos membres. De plus, nous vous proposerons plusieurs types de 
									formations spécifiques pour vous aider à vous préparer aux entretiens et à négocier les conditions de 
									travail.
								</p>
								<a href="ola.html" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#emprego">Lire la suite</a>
							</div>
						</div>
					</div>
				
					<div className="col">
						<div className="card bg-fundo-5 text-dark">
							<div className="card-body text-center">
								<div className="h1 mb-3">
									<i className="bi bi-music-note-list"></i>
								</div>
								<h3 className="card-title mb-3 text-dark">
									Culture
								</h3>
								<p className="card-text">
									La culture n'est pas statique. Elle doit évoluer et s'affiner. Elle doit avoir de la qualité 
									pour être consommé par n'importe qui, quelle que soit son origine.  
									Nous avons l'intention de valoriser et de promouvoir l'identité culturelle de São Tomé et Príncipe à travers le monde.
								</p>
								<a href="ola.html" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#cultura">Lire la suite</a>
							</div>
						</div>
					</div>
					
					<div class="col"> 
						<div className="card bg-fundo-3 text-dark">
							<div className="card-body text-center">
								<div className="h1 mb-3">
									<i className="bi bi-trophy"></i>
								</div>
								<h3 className="card-title mb-3 text-dark">
									Sport
								</h3>
								<p className="card-text">
									Nous avons l'intention de créer des tournois/championnats sportifs au niveau local, régional, 
									national et international. En plus des bienfaits de l'interaction intergénérationnelle, nous 
									découvrirons et promouvrons également de nouvelles valeurs et de nouveaux talents.
								</p>
								<a href="ola.html" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#desporto">Lire la suite</a>
							</div>
						</div>
					</div>
					
					<div class="col"> 
						<div className="card bg-fundo-5 text-dark">
							<div className="card-body text-center">
								<div className="h1 mb-3">
									<i className="bi bi-lightbulb"></i>
								</div>
								<h3 className="card-title mb-3 text-dark">
									Citoyenneté
								</h3>
								<p className="card-text">
									Dans ce domaine, nous incluons des actions de coopération, de solidarité sociale, de 
									renforcement des principes et valeurs démocratiques, de coexistence pacifique, ordonnée et 
									saine entre les citoyens, de participation active à des actions pour le développement de notre 
									communauté.
								</p>
								<a href="ola.html" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#cidadania">Lire la suite</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
		<Formacao/>
		<Empreendedorismo/>
		<Emprego/>
		<Cultura/>
		<Desporto/>
		<Cidadania/>
		</>
    );
}

export default Activities;
