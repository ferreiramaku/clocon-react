import './faq.css';

const Faq = () => {
    return (
        <section id="questions" className="p-5 mt-4">
            <h2 className="text-center mb-4">Questions fréquemment posées</h2>
            <div className="container">
                <hr/>
                <div className="accordion accordion-flush" id="perguntas">

                    <div className="accordion-item pt-3">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_um">
                                Pourquoi ce réseau d'associations a-t-il été créé ?
                            </button>
                        </h2>
                        <div id="pergunta_um" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
                            <div className="accordion-body">
                                Unir nos forces pour un changement effectif des mentalités, l'égalité des droits et des chances, 
                                l'adoption de principes et de valeurs démocratiques, la création d'une société fondée sur la 
                                connaissance, l'invocation, l'entrepreneuriat actif et dynamique et le développement.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_dois">
                                Comment adhérer individuellement ?
                            </button>
                        </h2>
                        <div id="pergunta_dois" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
                            <div className="accordion-body">
                                Vous pouvez rejoindre l'une de nos associations associées qui couvrent votre zone de résidence. Cependant, 
                                vous pouvez également vous inscrire en ligne en utilisant le formulaire disponible sur ce site.
                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_tres">
                                Comment enregistrer mon association ?
                            </button>
                        </h2>
                        <div id="pergunta_tres" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
                            <div className="accordion-body">
                                La procédure est simple : il suffit d'en faire la demande par écrit et de l'envoyer à notre adresse postale ou e-mail 
                                accompagnée du procès-verbal du conseil d'administration pour la décision d'adhésion.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_quatro">
                                Où est situé votre siège social ?
                            </button>
                        </h2>
                        <div id="pergunta_quatro" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
                            <div className="accordion-body">
                                Notre siège social est situé en France, en région parisienne, sur la commune de Rosny-sous-Bois.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_cinco">
                                Comment proposer un projet ou une initiative ?
                            </button>
                        </h2>
                        <div id="pergunta_cinco" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
                            <div className="accordion-body">
                                Pour cela, vous devez être membre d'une de nos associées. Les projets individuels doivent être soumis 
                                par l'intermédiaire de votre structure locale.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
