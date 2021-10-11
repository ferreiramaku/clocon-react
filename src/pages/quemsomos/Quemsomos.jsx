import './quemsomos.css';
import NavbarPages from "../../componentes/navbarPages/NavbarPages";
import Showcase2 from "../../componentes/showcase2/Showcase2";
import Newsletter from "../../componentes/newsletter/Newsletter";
import Footer from "../../componentes/footer/Footer";

const Quemsomos = () => {
    return (
        <div>
        <NavbarPages/>
        <Showcase2/>
        <Newsletter/>

        <section className="pt-5 mt-5 pb-2">
            <h2 className="text-center">Saiba quem somos</h2>
            <div className="container">
                <hr/>
                <div className="row align-items-center justify-content-between pt-4">
                    <div className="col-md embed-responsive embed-responsive-4by3">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QqGpTnZvjsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-md">
                        <p>A associação Clóçon Pôvô foi criada com o intuito de:</p>
                        <ul>
                            <li type="circle" className="mb-2">Defender os interesses da diáspora são-tomense no espírito de unidade.</li>
                            <li type="circle" className="mb-2">Ajudar os são-tomenses a se integrarem na sociedade onde residem e nela contribuir da melhor forma.</li>
                            <li type="circle" className="mb-2">Desenvolver ações culturais que promovam e valorizem a identidade sãotomense.</li>
                            <li type="circle" className="mb-2">Melhorar as competências técnico-profissionais dos sãotomenses de forma a torná-los competitivos no mercado internacional.</li>
                            <li type="circle" className="mb-2">Ajudar a melhorar os rendimentos e a qualidade de vida dos são-tomenses.</li>
                            <li type="circle">Apoiar o empreendedorismo através de um programa específico de ação.</li>
                        </ul>
                    </div>
                </div>
                <div className="row mb-3  p-4">
                    <div className="col">
                        <ul>
                            <li type="circle" className="mb-2">Incentivar as parcerias de negócios.</li>
                            <li type="circle" className="mb-2">Fazer com que os são-tomenses da diáspora sejam atores do desenvolvimento económico de São Tomé e Príncipe e dos países onde residem.</li>
                            <li type="circle" className="mb-2">Apoiar as associações dos são-tomenses, dando-lhes assistência e orientação.</li>
                            <li type="circle" className="mb-2">Servir de plataforma para a organização de conferências de reflexão.</li>
                            <li type="circle" className="mb-2">Posicionar-se como parceira das instituições do estado e das coletividades territoriais na concretização de políticas e projetos de interesse da diáspora são-tomense.</li>
                            <li type="circle" className="mb-2">Implementar programas que permitam a participação da diáspora em projetos de desenvolvimento de São Tomé e Príncipe.</li>
                            <li type="circle" className="mb-2">Apoiar a implementação de uma democracia real no seio da sociedade são-tomense.</li>
                            <li type="circle">Reforçar os laços de solidariedade entre os são-tomenses, através da defesa dos seus interesses materiais e morais, pela luta contra todas as formas de discriminação e pela defesa da igualdade de oportunidades.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        </div>
    );
}

export default Quemsomos;
