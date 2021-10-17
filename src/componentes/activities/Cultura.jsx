import React from 'react'

const Cultura = () => {
    return (
        <div className="modal fade" id="cultura" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Cultura</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">A cultura é o reflexo de uma comunidade ou nação. Isso torna a cultura um fator determinante e vital da forma como a comunidade reage, responde e cresce. A cultura desempenha um papel importante na vida de todos na sociedade. A cultura lhe fornece um sentimento de pertença.</p>
                        <p className="lead">Nós temos um país multicultural e insular. Devemos assumir essa diversidade cultural como uma mais valia para ultrapassar os constrangimentos da insularidade.</p>
                        <p className="lead">De acordo com a UNESCO, a cultura é tida como uma dimensão fundamental do processo de desenvolvimento. O desenvolvimento sustentável só pode ser garantido integrando fatores culturais às estratégias para alcançá-lo.</p>
                        <p className="lead">Nesse contexto, a Clóçon Pôvô agirá com especial interesse na interação e na promoção cultural, promovendo iniciativas que ampliem o horizonte cultural são-tomense e que sirvam para impulsionar o desenvolvimento social e económico dos são-tomenses.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cultura
