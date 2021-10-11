import './testimonials.css';

const Testimonials = () => {
    return (
		<section class="p-5 mt-3 cor-fundo-1">
		<div class="container">
			<h2 class="text-center text-white">Testimonials</h2>
			<p class="lead text-center text-white mb-5">
				Our members express their opinions on this associative project.
			</p>
			<div class="row g-4">
			
				<div class="col-md-6 col-lg-3">
					<div class="card bg-light py-3">
						<div class="card-body text-center" style={{height: '22rem'}}>
							<img src="images/Anjo_Gabriel.jpg" class="rounded-circle mb-3 w-50" alt="Melquíades Neves"/>
							<h4 class="card-title mb-3">Melquíades Neves</h4>
							<p class="card-text">"I have great faith in this project. It's time for union, work and prosperity."
							</p>
							<a href="https://www.facebook.com/anjo.gabriel.39142" rel="noreferrer" target="_blank"><i class="bi bi-facebook text-dark mx-1"></i></a> 
						</div>
					</div>
				</div>
				
				<div class="col-md-6 col-lg-3">
					<div class="card bg-light py-3">
						<div class="card-body text-center" style={{height: '22rem'}}>
							<img src="images/Liza.jpg" class="rounded-circle mb-3 w-50" alt="Silverliza Amorim"/>
							<h4 class="card-title mb-3">Silverliza Amorim</h4>
							<p class="card-text">"I don't come to see it to believe it. I want to be part of this change process. I want progress."
							</p>
							<a href="https://www.facebook.com/silverliza.amorim" rel="noreferrer" target="_blank"><i class="bi bi-facebook text-dark mx-1"></i></a> 
						</div>
					</div>
				</div>
				
				<div class="col-md-6 col-lg-3">
					<div class="card bg-light py-3">
						<div class="card-body text-center" style={{height: '22rem'}}>
							<img src="images/Esmilson.jpg" class="rounded-circle mb-3 w-50" alt="Esmilson Afonso"/>
							<h4 class="card-title mb-3">Esmilson Afonso</h4>
							<p class="card-text">"Without work we won't get there. This requires general mobilization and team spirit."
							</p>
							<a href="https://www.facebook.com/Esmilson.dagraca" rel="noreferrer" target="_blank"><i class="bi bi-facebook text-dark mx-1"></i></a> 
						</div>
					</div>
				</div>
				
				<div class="col-md-6 col-lg-3">
					<div class="card bg-light py-3">
						<div class="card-body text-center" style={{height: '22rem'}}>
							<img src="images/Euclides.jpg" class="rounded-circle mb-3  w-50" alt="Euclides Lisboa"/>
							<h4 class="card-title mb-3">Euclides Lisboa</h4>
							<p class="card-text">"I don't intend to sit idly by, seeing our future always postponed."
							</p>
							<a href="https://www.facebook.com/euclides.lisboa.1" rel="noreferrer" target="_blank"><i class="bi bi-facebook text-dark mx-1"></i></a> 
							<div id="contactos" class="marcador_escondido"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
}

export default Testimonials;
