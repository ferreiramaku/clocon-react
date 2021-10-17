import React from 'react'

const Desporto = () => {
    return (
        <div className="modal fade" id="desporto" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Desporto</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">Desporto e recreação não têm a ver com vencer, mas sim com ajudar a construir comunidades mais fortes, saudáveis, felizes e seguras. Nossa associação defende e apoia projetos para fortalecer as comunidades por meio do desporto e da recreação.</p>
                        <p className="lead">O desporto tem a capacidade de melhorar a saúde e o bem-estar de todos os participantes, independentemente de idade, habilidade, origem ou sexo.</p>
                        <p className="lead">Os benefícios do desporto vão muito além da saúde. Não podemos subestimar o impacto positivo que o desporto tem na nossa cultura, sociedade e economia. Nossas comunidades são fortalecidas quando nos reunimos para praticar desporto e construir um sentimento de pertença.</p>
                        <p className="lead">O desporto melhora a conectividade social e a inclusão. Ele constrói comunidades, possibilita a diversidade por meio de redes sociais maiores e cria amigos para a vida toda.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desporto
