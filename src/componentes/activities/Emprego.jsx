import React from 'react'

const Emprego = () => {
    return (
        <div className="modal fade" id="emprego" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Emprego</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">Disponibilizaremos e manteremos uma base de dados de oferta de empregos. Enviaremos propostas de emprego personalizadas aos nossos membros, baseadas nos seus perfis profissionais e de formação.</p>
                        <p className="lead">Estamos também disponíveis para intermediar processos de contratação e de negociação de contratos.</p>
                        <p className="lead">Disponibilizaremos ações de coaching que visem aumentar o grau de preparação e de eficácia dos nossos membros em processos de procura e/ou obtenção de emprego.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emprego
