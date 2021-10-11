import './faq.css';

const Faq = () => {
    return (
        <section id="questions" className="p-5 mt-4">
            <h2 className="text-center mb-4">Questões colocadas com frequência</h2>
            <div className="container">
                <hr/>
                <div className="accordion accordion-flush" id="perguntas">

                    <div className="accordion-item pt-3">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_um">
                            Por que motivo foi criada essa rede de associações?
                            </button>
                        </h2>
                        <div id="pergunta_um" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
                            <div className="accordion-body">
                                Para unirmos as nossas forças em prol de uma efetiva mudança de mentalidades, da igualdade de direitos e de oportunidades, 
                                da adopção de princípios e valores democráticos, da criação de uma sociedade baseada no conhecimento, da invoção, do empreendedorismo 
                                ativo e dinâmico e do desenvolvimento.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_dois">
                            Como aderir individualmente?
                        </button>
                        </h2>
                        <div id="pergunta_dois" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
                            <div className="accordion-body">
                                Pode aderir uma das nossas associadas que cobre a sua área de residência. Entretanto, poderá também fazer a sua inscrição online através do formulário disponível nesse website.
                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_tres">
                            Como inscrever a minha associação? 
                        </button>
                        </h2>
                        <div id="pergunta_tres" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
                            <div className="accordion-body">
                                O procedimento é simples: Basta formular o pedido por escrito e enviar para o nosso endereço postal ou eletrónico acompanhado da ata da reunião de direção de decisão de adesão.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_quatro">
                            Onde estão localizados?
                        </button>
                        </h2>
                        <div id="pergunta_quatro" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
                            <div className="accordion-body">
                                A nossa sede está localizada em França, na região parisiense, no Município de Rosny-sous-Bois.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pergunta_cinco">
                            Como apresentar um projeto ou iniciativa?
                        </button>
                        </h2>
                        <div id="pergunta_cinco" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#perguntas">
                            <div className="accordion-body">
                                Para o efeito deverá ser membro de uma das nossas associadas. Projetos individuais devem ser apresentados através da sua estrutura local.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
