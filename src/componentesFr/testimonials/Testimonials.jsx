import './testimonials.css';

const Testimonials = () => {
    return (
		<section className="p-5 mt-3 cor-fundo-1">
		<div className="container">
			<h2 className="text-center text-white">Témoignages</h2>
			<p className="lead text-center text-white mb-5">
				Nos membres s'expriment sur ce projet associatif.
			</p>
			<div className="row g-4">

				<div className="col-md-6 col-lg-3">
					<div className="card bg-light py-3">
						<div className="card-body text-center" style={{height: '22rem'}}>
							<img src="images/Anjo_Gabriel.jpg" className="rounded-circle mb-3 w-50" alt="Melquíades Neves"/>
							<h4 className="card-title mb-3">Melquíades Neves</h4>
							<p className="card-text">"J'ai une grande confiance en ce projet. L'heure est à l'union, au travail et à la prospérité."
							</p>
							<a href="https://www.facebook.com/anjo.gabriel.39142" rel="noreferrer" target="_blank"><i className="bi bi-facebook text-dark mx-1"></i></a> 
						</div>
					</div>
				</div>

				<div className="col-md-6 col-lg-3">
					<div className="card bg-light py-3">
						<div className="card-body text-center" style={{height: '22rem'}}>
							<img src="images/Liza.jpg" className="rounded-circle mb-3 w-50" alt="Silverliza Amorim"/>
							<h4 className="card-title mb-3">Silverliza Amorim</h4>
							<p className="card-text">"Je ne viens pas le voir pour le croire. Je veux faire partie de ce processus de changement. Je veux progresser."
							</p>
							<a href="https://www.facebook.com/silverliza.amorim" rel="noreferrer" target="_blank"><i className="bi bi-facebook text-dark mx-1"></i></a> 
						</div>
					</div>
				</div>

				<div className="col-md-6 col-lg-3">
					<div className="card bg-light py-3">
						<div className="card-body text-center" style={{height: '22rem'}}>
							<img src="images/Esmilson.jpg" className="rounded-circle mb-3 w-50" alt="Esmilson Manso"/>
							<h4 className="card-title mb-3">Esmilson Manso</h4>
							<p className="card-text">"Sans travail, nous n'y arriverons pas. Cela nécessite une mobilisation générale et un esprit d'équipe."
							</p>
							<a href="https://www.facebook.com/Esmilson.dagraca" rel="noreferrer" target="_blank"><i className="bi bi-facebook text-dark mx-1"></i></a> 
						</div>
					</div>
				</div>

				<div className="col-md-6 col-lg-3">
					<div className="card bg-light py-3">
						<div className="card-body text-center" style={{height: '22rem'}}>
							<img src="images/Euclides.jpg" className="rounded-circle mb-3  w-50" alt="Euclides Lisboa"/>
							<h4 className="card-title mb-3">Euclides Lisboa</h4>
							<p className="card-text">"Je n'ai pas l'intention de rester les bras croisés, voyant notre avenir toujours reporté."
							</p>
							<a href="https://www.facebook.com/euclides.lisboa.1" rel="noreferrer" target="_blank"><i className="bi bi-facebook text-dark mx-1"></i></a> 
							<div id="contactos" className="marcador_escondido"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
}

export default Testimonials;
