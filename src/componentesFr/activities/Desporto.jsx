import React from 'react'

const Desporto = () => {
    return (
        <div className="modal fade" id="desporto" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Sport</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">Le sport et les loisirs ne visent pas à gagner, mais à aider à bâtir des collectivités plus fortes, plus saines, plus heureuses et plus sûres. Notre association défend et soutient des projets visant à renforcer les communautés par le sport et les loisirs.</p>
                        <p className="lead">Le sport a la capacité d'améliorer la santé et le bien-être de tous les participants, quels que soient leur âge, leurs capacités, leur origine ou leur sexe.</p>
                        <p className="lead">Les bienfaits du sport vont bien au-delà de la santé. Nous ne pouvons pas sous-estimer l'impact positif du sport sur notre culture, notre société et notre économie. Nos communautés sont renforcées lorsque nous nous réunissons pour faire du sport et développer un sentiment d'appartenance.</p>
                        <p className="lead">Le sport améliore la connectivité sociale et l'inclusion. Il construit des communautés, permet la diversité à travers des réseaux sociaux plus larges et crée des amis pour la vie.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desporto
