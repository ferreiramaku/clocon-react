import './activities.css';
import Cidadania from './Cidadania';
import Cultura from './Cultura';
import Desporto from './Desporto';
import Empreendedorismo from './Empreendedorismo';
import Emprego from './Emprego';
import Formacao from './Formacao';

const Activities = () => {
    return (
        <>
        <section  className="p-5"> 
            
            <div className="container">
                <h2 className="text-center">Áreas de atividade</h2>
                <hr />
                
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">

                    <div class="col ">
                        <div className="card bg-fundo-3 text-dark" >
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                    <i className="bi bi-easel"></i>
                                </div>
                                <h3 className="card-title mb-3 text-dark">
                                    Ações de formação
                                </h3>
                                <p className="card-text">
                                    As nossas formações visam o crescimento técnico-profissional dos nossos membros. 
                                    Elaboramos para você um plano de desenvolvimento profissional de forma a maximizar o
                                    seu potencial e rendimento.
                                </p>
                                <a href="o.html" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#formacao">Leia mais</a>
                            </div>
                        </div>
                    </div> 

                    <div class="col ">
                        <div className="card bg-fundo-5 text-dark" >
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                    <i className="bi bi-file-bar-graph"></i>
                                </div>
                                <h3 className="card-title mb-3 text-dark">
                                    Empreendedorismo
                                </h3>
                                <p className="card-text">
                                    Chegou a hora de você empreender de forma responsável e sustentável. O nosso programa de empreendedorismo
                                    lhe ajudará a identificar a sua área de atividade, a elaborar o seu plano de negócios, a gerir a sua empresa
                                    e a procurar financiamentos. 
                                </p>
                                <a href="o.html" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#empreendedorismo">Leia mais</a>
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
                                    Emprego
                                </h3>
                                <p className="card-text">
                                    A nossa bolsa de emprego está disponível para todos os nossos membros. Além disso, disponibilizaremos
                                    vários tipos de formações específicas para lhe ajudar a se preparar para as entrevistas e a negociar condições laborais.
                                </p>
                                <a href="o.html" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#emprego">Leia mais</a>
                            </div>
                        </div>
                    </div>
                        
                    <div class="col">    
                        <div className="card bg-fundo-5 text-dark">
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                    <i className="bi bi-music-note-list"></i>
                                </div>
                                <h3 className="card-title mb-3 text-dark">
                                    Cultura
                                </h3>
                                <p className="card-text">
                                    A cultura não é estática. Ela deve evoluir e refinar-se. Ela deve ter qualidade suficiente para ser consumida por qualquer
                                    pessoa, independentemente da sua origem. É essa a nossa aposta. Pretendemos promover a identidade cultural são-tomense.
                            
                                </p>
                                <a href="a.html" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#cultura">Leia mais</a>
                            </div>
                        </div>
                    </div>

                    <div class="col ">
                        <div className="card bg-fundo-3 text-dark" >
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                    <i className="bi bi-trophy"></i>
                                </div>
                                <h3 className="card-title mb-3 text-dark">
                                    Desporto
                                </h3>
                                <p className="card-text">
                                    Pretendemos criar torneios/campeonatos desportivos ao nível local, regional, nacional e internacional.
                                    Para além dos benefícios do convívio intergeracional, também estaremos a descobrir e a promover novos valores e talentos.
                                </p>
                                <a href="a.html" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#desporto">Leia mais</a>
                            </div>
                        </div>
                    </div>

                    <div class="col ">
                        <div className="card bg-fundo-5 text-dark" >
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                    <i className="bi bi-lightbulb"></i>
                                </div>
                                <h3 className="card-title mb-3 text-dark">
                                    Cidadania
                                </h3>
                                <p className="card-text">
                                    Nessa área incluímos ações de cooperação, de solidariedade social, do reforço dos princípios e valores
                                    democráticos, da convivência pacífica, ordeira e saudável entre os cidadãos, da participação ativa em ações de desenvolvimento da nossa comunidade.
                                </p>
                                <a href="a.html" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#cidadania">Leia mais</a>
                                <div id="colaborar" className="marcador_escondido"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
	    </section>
        <Formacao/>
        <Empreendedorismo/>
        <Emprego/>
        <Cultura/>
        <Desporto/>
        <Cidadania/>

        </>
    );
}

export default Activities; 
