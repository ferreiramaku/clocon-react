import './colaborate.css';

const Colaborate = () => {
    return (
        <section  class="mt-5 p-5 bg-fundo-2 text-light text-center text-sm-start">
            <div class="container">		
                <div class="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h2>Como contribuir</h2>
                        <h5 class="mt-4 text-warning">Doações</h5>
                        <p>
                            Escolha um projeto ou uma iniciativa e faz a sua doação de forma responsável e consciente. Doando para os nossos
                            projetos e iniciativas você poderá beneficiar de reduções fiscais até 66% do valor doado. Consulte-nos para obter
                            informações mais detalhadas.
                        </p>
                        <h5 class="mt-3 text-warning">Angariação de fundos</h5>
                        <p>
                            Como angariador(a) de fundos, você participará nas nossas campanhas de mobilização de fundos que visem viabilizar 
                            os nossos projetos e iniciativas. Existem várias modalidades previstas para esse tipo de colaboração.
                        </p>
                        <h5 class="mt-3 text-warning">Voluntariado</h5>
                        <p>
                            Tornando-se voluntário(a) você estará a contribuir de forma ativa para a materialização das nossas iniciativas. 
                            O voluntário contribui com o seu know-how e experiência em projetos de formação, de sensibilização, de animação de 
                            conferências, palestras e seminários, em projetos de cooperação e de solidariedade social.
                        </p>
                        <a href="colaborate.html" class="btn btn-light">
                            <i class="bi bi-chevron-right"></i> Leia mais
                        </a>
                    </div>
                    
                    <div>
                        <img src="images/man_1.png" alt="" class="img-fluid d-none d-sm-block" />
                    </div>
                </div>
            </div>
	    </section>
    );
}

export default Colaborate;
