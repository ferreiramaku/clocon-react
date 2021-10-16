import './testimonials.css';

const Testimonials = () => {
    return (
        <section className="p-5 mt-3 cor-fundo-1">
			<div className="container">
				<h2 className="text-center text-white">Testemunhos</h2>
				<p className="lead text-center text-white mb-4">
					Os nossos membros expressam as suas opiniões sobre esse projeto associativo.
				</p>
				
				<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-2">

					<div class="col ">
						<div className="card bg-light">
							<div className="card-body text-center">
								<img src="images/Anjo_Gabriel.jpg" className="rounded-circle mb-3 w-50" alt="Melquíades Neves" />
								<h4 className="card-title mb-3">Melquíades Neves</h4>
								<p className="card-text">"Deposito grande fé nesse projeto. Já é mais do que tempo de união, de trabalho e de prosperidade."
								</p>
								<a href="https://www.facebook.com/anjo.gabriel.39142" rel="noreferrer" target="_blank"><i className="bi bi-facebook text-dark mx-1"></i></a> 
							</div>
						</div>
					</div>
 
					<div class="col ">
						<div className="card bg-light">
							<div className="card-body text-center">
								<img src="images/Liza.jpg" className="rounded-circle mb-3 w-50" alt="Silverliza Amorim" />
								<h4 className="card-title mb-3">Silverliza Amorim</h4>
								<p className="card-text">"Eu não venho ver para crer. Quero fazer parte desse processo de mudanças. Eu quero progresso."
								</p>
								<a href="https://www.facebook.com/silverliza.amorim" rel="noreferrer" target="_blank"><i className="bi bi-facebook text-dark mx-1"></i></a> 
							</div>
						</div>
					</div>

					<div class="col ">
						<div className="card bg-light">
							<div className="card-body text-center">
								<img src="images/Esmilson.jpg" className="rounded-circle mb-4 w-50" alt="Esmilson Afonso" />
								<h4 className="card-title mb-3">Esmilson Afonso</h4>
								<p className="card-text">"Sem trabalho não chegaremos lá. Isso requere mobilização geral, espírito de equipa e dinamismo."
								</p>
								<a href="https://www.facebook.com/Esmilson.dagraca" rel="noreferrer" target="_blank"><i className="bi bi-facebook text-dark mx-1"></i></a> 
							</div>
						</div>
					</div>

					<div class="col ">
						<div className="card bg-light">
							<div className="card-body text-center" >
								<img src="images/Euclides.jpg" className="rounded-circle mb-4  w-50" alt="Euclides Lisboa" />
								<h4 className="card-title mb-3">Euclides Lisboa</h4>
								<p className="card-text">"Eu não pretendo ficar de braços cruzados e, no leve-leve, vendo o nosso futuro sempre adiado."
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
