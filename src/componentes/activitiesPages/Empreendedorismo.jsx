import React from 'react'

const Empreendedorismo = () => {
    return (
        <div className="modal fade" id="empreendedorismo" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Empreendedorismo</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">Uma grande percentagem de famílias são-tomenses residentes em São Tomé e Príncipe ainda se encontra dependente das remessas de dinheiro de seus familiares da diáspora. Nesse contexto, a melhoria do nível de vida dos santomenses da diáspora tem impactos diretos e positivos para o desenvolvimento de São Tomé e Príncipe.</p>
                        <p className="lead">Muitos são-tomenses da diáspora ainda não abraçaram o empreendedorismo por falta de informações e formações específicas. Muitos ainda não sabem como tirar proveito de vários planos de estímulo ao desenvolvimento do empreendedorismo existentes nos países onde residem.</p>
                        <p className="lead">O empreendedorismo requere uma mudança de mentalidade e de postura. Empreender significa assumir responsabilidades acrescidas e os riscos inerentes ao sector de atividades.</p>
                        <p className="lead">A Clóçon Pôvô pretende desenvolver programas específicos e combinados com o intuíto de oferecer aos são-tomenses oportunidades de empreendedorismo ajustadas aos seus interesses.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Empreendedorismo
