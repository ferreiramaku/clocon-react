import './faq.css';

const Faq = () => {
    return (
        <section id="questions" className="p-5 mt-4">
		<h2 className="text-center mb-4">Frequently Asked Questions (FAQ)</h2>
		<div className="container">
			<hr/>
			<div className="accordion accordion-flush" id="perguntas">

				<div className="accordion-item pt-3">
				  <h2 className="accordion-header" id="flush-headingOne">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_um">
						Why was this network of associations created?
					</button>
				  </h2>
				  <div id="pergunta_um" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
					<div className="accordion-body">
						To join forces for an effective change of mindsets, equal rights and opportunities, the adoption of 
						democratic principles and values, the creation of a society based on knowledge, invocation, active and 
						dynamic entrepreneurship and development.
					</div>
				  </div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="flush-headingOne">
					  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_dois">
						How to join individually?
					  </button>
					</h2>
					<div id="pergunta_dois" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
					    <div className="accordion-body">
						You can join one of our associates who cover your area of residence. However, you can also register 
						online using the form available on this website.
					    </div>
				    </div>
                </div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="flush-headingOne">
					  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_tres">
						How to register my association? 
					  </button>
					</h2>
					<div id="pergunta_tres" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
					  <div className="accordion-body">
						The procedure is simple: Just make the request in writing and send it to our postal or e-mail address 
						together with the minutes of the board meeting for the decision to join.
					  </div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="flush-headingOne">
					  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_quatro">
						Where are you located?
					  </button>
					</h2>
					<div id="pergunta_quatro" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
					  <div className="accordion-body">
						Our headquarters are located in France, in the Paris region, in the municipality of Rosny-sous-Bois.
					  </div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="flush-headingOne">
					  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_cinco">
						How to present a project or initiative?
					  </button>
					</h2>
					<div id="pergunta_cinco" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
					  <div className="accordion-body">
						For this purpose you must be a member of one of our associates. Individual projects must be submitted through your local structure.
					  </div>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
}

export default Faq;
