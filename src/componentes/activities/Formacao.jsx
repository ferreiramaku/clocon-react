import React from 'react'

const Formacao = () => {
    return (
        <div className="modal fade" id="formacao" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Ações de formação</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">À medida que a tecnologia avança e os métodos e estratégias de trabalho melhoram, surge a necessidade de empregadores e funcionários se alinharem com essas mudanças em termos de conhecimento, competências, valores e habilidades. Uma das melhores maneiras de aumentar o conhecimento e as habilidades é por meio de formação. Elas podem ajudar as empresas a melhorar o desempenho e  os trabalhadores a aumentar de rendimentos.</p>
                        <p className="lead">Para além de conhecimentos técnicos da área de formação, algumas das coisas que os funcionários também podem aprender por meio das formações incluem ética no trabalho, relações humanas e segurança.</p>
                        <p className="lead">Os programas de formação também podem ajudar a preparar os funcionários que estão assumindo funções superiores e assumindo mais responsabilidades nas suas empresas. Esses programas os ajudarão a adquirir as competências necessárias para um funcionamento eficaz nos seus novos cargos. Por exemplo, eles podem ser formados em liderança ou num software específico que usarão na sua nova função.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formacao
