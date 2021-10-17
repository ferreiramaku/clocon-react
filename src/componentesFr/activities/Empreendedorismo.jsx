import React from 'react'

const Empreendedorismo = () => {
    return (
        <div className="modal fade" id="empreendedorismo" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Entrepreneuriat</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">Un grand pourcentage de familles sao toméennes résidant à São Tomé et Príncipe dépendent toujours des envois de fonds des membres de leur famille de la diaspora. Dans ce contexte, l'amélioration du niveau de vie des São Toméens de la diaspora a des impacts directs et positifs sur le développement de São Tomé et Príncipe.</p>
                        <p className="lead">Plusieurs santoméens de la diaspora n'ont pas encore embrassé l'entrepreneuriat en raison du manque d'informations et de formations spécifiques. Beaucoup ne savent toujours pas comment profiter des divers plans pour encourager le développement de l'entrepreneuriat existant dans les pays où ils vivent.</p>
                        <p className="lead">L'entrepreneuriat nécessite un changement de mentalité et d'attitude. Entreprendre, c'est assumer des responsabilités accrues et les risques inhérents au secteur d'activités.</p>
                        <p className="lead">Clóçon Pôvô mettra en place des programmes spécifiques et combinés dans le but d'offrir des opportunités d'entrepreneuriat sao toméen adaptées à leurs intérêts.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Empreendedorismo
