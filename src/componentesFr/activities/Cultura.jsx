import React from 'react'

const Cultura = () => {
    return (
        <div className="modal fade" id="cultura" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Culture</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">La culture est le reflet d'une communauté ou d'une nation. Cela fait de la culture un facteur vital et déterminant dans la façon dont la communauté réagit, réagit et grandit. La culture joue un rôle important dans la vie de chacun en société. La culture vous donne un sentiment d'appartenance.</p>
                        <p className="lead">Nous avons un pays multiculturel et insulaire. Nous devons assumer cette diversité culturelle comme un atout pour surmonter les contraintes de l'insularité.</p>
                        <p className="lead">Selon l'UNESCO, la culture est considérée comme une dimension fondamentale du processus de développement. Le développement durable ne peut être assuré qu'en intégrant des facteurs culturels dans les stratégies pour y parvenir.</p>
                        <p className="lead">Dans ce contexte, Clóçon Pôvô agira avec un intérêt particulier pour l'interaction et la promotion culturelle, en promouvant des initiatives qui élargissent l'horizon culturel santoméen et servent à stimuler le développement social et économique des santoméens.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cultura
