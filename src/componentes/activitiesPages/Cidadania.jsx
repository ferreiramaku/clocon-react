import React from 'react'

const Cidadania = () => {
    return (
        <div className="modal fade" id="cidadania" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Cidadania</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">A turbulência política dos últimos anos tem nos deixado preocupados com o futuro do nosso país e do nosso planeta.</p>
                        <p className="lead"> Ser cidadão vem com direitos, deveres e privilégios. Com cada direito que recebemos, vem a responsabilidade de exercê-lo de maneira justa e de trabalhar para ajudar outros cidadãos a fazer o mesmo.</p>
                        <p className="lead">A verdadeira cidadania é ativa! A cidadania exige participação, envolvimento e contribuição. Ninguém faz diferença sem estar envolvido.</p>
                        <p className="lead">As pessoas não têm escolha sobre a família ou o país onde nasceram, mas podem escolher se desejam ser membros responsáveis de suas famílias e comunidades.</p>
                        <p className="lead">Iniciativas que visam a proteção ambiental, a solidariedade social, a responsabilidade social e política farão parte do leque de ações que a Clóçon Pôvô deve desenvolver.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cidadania
