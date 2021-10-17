import React from 'react'

const Formacao = () => {
    return (
        <div className="modal fade" id="formacao" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Actions de formation</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">À mesure que la technologie progresse et que les méthodes et stratégies de travail s'améliorent, les employeurs et les employés doivent s'aligner sur ces changements en termes de connaissances, de compétences, de valeurs et de compétences. La formation est l'un des meilleurs moyens d'accroître ses connaissances et ses compétences. Ils peuvent aider les entreprises à améliorer leurs performances et les travailleurs à augmenter leurs revenus.</p>
                        <p className="lead">En plus des connaissances techniques du domaine de formation, certaines des choses que les employés peuvent également apprendre grâce à la formation comprennent l'éthique du travail, les relations humaines et la sécurité.</p>
                        <p className="lead">Les programmes de formation peuvent également aider à préparer les employés qui assument des rôles plus élevés et assument davantage de responsabilités dans leur entreprise. Ces programmes les aideront à acquérir les compétences nécessaires pour fonctionner efficacement dans leurs nouveaux rôles. Par exemple, ils peuvent être formés au leadership ou à des logiciels spécifiques qu'ils utiliseront dans leur nouveau rôle.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formacao
