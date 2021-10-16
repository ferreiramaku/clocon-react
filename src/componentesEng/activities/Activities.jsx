import './activities.css';

const Activities = () => {
    return (
		<section className="p-5">	
			<div className="container">
				<h2 className="text-center">Areas of activity</h2>
				<hr/>

				<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">

					<div class="col ">
						<div className="card bg-fundo-3 text-dark">
							<div className="card-body text-center">
								<div className="h1 mb-3">
									<i className="bi bi-easel"></i>
								</div>
								<h3 className="card-title mb-3 text-dark">
									Training
								</h3>
								<p className="card-text">
									Our trainings aim at the technical-professional growth of our members. We prepare a professional 
									development plan for you in order to maximize your potential and income.
								</p>
								<a href="ola.html" className="btn btn-info">Read more</a>
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
									Entrepreneurship
								</h3>
								<p className="card-text">
									The time has come for you to make business responsibly and sustainably. Our entrepreneurship 
									program will help you to identify your area of activity, prepare your business plan, manage 
									your business and seek funding.
								</p>
								<a href="ola.html" className="btn btn-secondary">Read more</a>
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
									Employment
								</h3>
								<p className="card-text">
									Our job opportunities database is available to all our members. In addition, we will offer several types of 
									specific training to help you prepare for interviews and negotiate working conditions.
								</p>
								<a href="ola.html" className="btn btn-info">Read more</a>
							</div>
						</div>
					</div>
				
					<div class="col ">
						<div className="card bg-fundo-5 text-dark">
							<div className="card-body text-center">
								<div className="h1 mb-3">
									<i className="bi bi-music-note-list"></i>
								</div>
								<h3 className="card-title mb-3 text-dark">
									Culture
								</h3>
								<p className="card-text">
									Culture is not static. It must evolve and be refined. It must be of sufficient quality to be consumed by 
									anyone, regardless of its origin. That's our bet. We intend to promote the São Tomé and Príncipe cultural identity.
							
								</p>
								<a href="ola.html" className="btn btn-info">Read more</a>
							</div>
						</div>
					</div>

					<div class="col ">
						<div className="card bg-fundo-3 text-dark">
							<div className="card-body text-center">
								<div className="h1 mb-3">
									<i className="bi bi-trophy"></i>
								</div>
								<h3 className="card-title mb-3 text-dark">
									Sport
								</h3>
								<p className="card-text">
									We intend to create sporting tournaments/championships at local, regional, national and 
									international level. In addition to the benefits of intergenerational interaction, we will also 
									be discovering and promoting new values and talents.
								</p>
								<a href="ola.html" className="btn btn-secondary">Read more</a>
							</div>
						</div>
					</div>

					<div class="col ">
						<div className="card bg-fundo-5 text-dark">
							<div className="card-body text-center">
								<div className="h1 mb-3">
									<i className="bi bi-lightbulb"></i>
								</div>
								<h3 className="card-title mb-3 text-dark">
									Citizenship
								</h3>
								<p className="card-text">
									In this area, we include actions of cooperation, social solidarity, reinforcement of democratic 
									principles and values, peaceful, orderly and healthy coexistence among citizens, active 
									participation in actions for the development of our community.
								</p>
								<a href="ola.html" className="btn btn-info">Read more</a>
								<div id="colaborar" className="marcador_escondido"></div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
    );
}

export default Activities;