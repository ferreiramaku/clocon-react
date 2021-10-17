import React from 'react'

const Emprego = () => {
    return (
        <div className="modal fade" id="emprego" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Emploie</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">Nous mettrons à disposition et maintiendrons une base de données des offres d'emploi. Nous enverrons des offres d'emploi personnalisées à nos membres, en fonction de leurs profils professionnels et de formation.</p>
                        <p className="lead">Nous sommes également disponibles pour arbitrer les processus de passation de marchés et de négociation de contrats.</p>
                        <p className="lead">Nous proposerons des actions de coaching visant à augmenter le degré de préparation et d'efficacité de nos membres dans le processus de recherche et/ou d'obtention d'un emploi.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emprego
