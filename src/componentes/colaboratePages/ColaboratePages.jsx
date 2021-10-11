import './colaboratePages.css';

const ColaboratePages = () => {
    return (
        <section  className="p-5 text-light text-center text-sm-start">
            <div className="container">		
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h2 className="text-dark">Como contribuir</h2>
                        <h5 className="mt-4 text-warning">Doações</h5>
                        <p className="text-dark">
                            Escolha um projeto ou uma iniciativa e faz a sua doação de forma responsável e consciente. Doando para os nossos
                            projetos e iniciativas você poderá beneficiar de reduções fiscais até 66% do valor doado. Consulte-nos para obter
                            informações mais detalhadas.
                        </p>
                        <h5 className="mt-3 text-warning">Angariação de fundos</h5>
                        <p className="text-dark">
                            Como angariador(a) de fundos, você participará nas nossas campanhas de mobilização de fundos que visem viabilizar 
                            os nossos projetos e iniciativas. Existem várias modalidades previstas para esse tipo de colaboração.
                        </p>
                        <h5 className="mt-3 text-warning">Voluntariado</h5>
                        <p className="text-dark">
                            Tornando-se voluntário(a) você estará a contribuir de forma ativa para a materialização das nossas iniciativas. 
                            O voluntário contribui com o seu know-how e experiência em projetos de formação, de sensibilização, de animação de 
                            conferências, palestras e seminários, em projetos de cooperação e de solidariedade social.
                        </p>
                        <a 
                            href="https://www.economie.gouv.fr/particuliers/prelevement-a-la-source-reductions-fiscales-dons-associations"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Aceda ao link do Ministério da Economia Francês para mais informações
                        </a>
                    </div>
                    
                    <div>
                        <img src="images/doacao.png" alt="" className="img-fluid d-none d-sm-block" />
                    </div>
                </div>
            </div>
	    </section>
    );
}

export default ColaboratePages;
