import React from 'react'

const Cidadania = () => {
    return (
        <div className="modal fade" id="cidadania" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Citoyenneté</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">Les troubles politiques de ces dernières années nous ont laissés inquiets pour l'avenir de notre pays et de notre planète.</p>
                        <p className="lead">Être citoyen s'accompagne de droits, de devoirs et de privilèges. Chaque droit que nous recevons s'accompagne d'une responsabilité de l'exercer équitablement et de travailler pour aider les autres citoyens à faire de même.</p>
                        <p className="lead">La vraie citoyenneté est active ! La citoyenneté exige la participation, l'implication et la contribution. Personne ne fait la différence sans être impliqué.</p>
                        <p className="lead">Les gens n'ont pas le choix de leur famille ou de leur pays de naissance, mais ils peuvent choisir s'ils veulent être des membres responsables de leur famille et de leur communauté.</p>
                        <p className="lead">Des initiatives visant la protection de l'environnement, la solidarité sociale, la responsabilité sociale et politique feront partie de la palette d'actions que Clóçon Pôvô doit développer.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cidadania
