import './colaborate.css';

const Colaborate = () => {
    return (
        <section className="mt-5 p-5 bg-fundo-2 text-light text-center text-sm-start">
            <div className="container" id="colaborar">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h2>Comment contribuer?</h2>
                        <h5 className="mt-4 text-warning">Les dons</h5>
                        <p>
                            Choisissez un projet ou une initiative et faites votre don de manière responsable et consciencieuse. 
                            En faisant un don à nos projets et initiatives, vous pouvez bénéficier de réductions d'impôts allant 
                            jusqu'à 66% du montant du don. Contactez-nous pour des informations plus détaillées.
                        </p>
                        <h5 className="mt-3 text-warning">Collecte de fonds</h5>
                        <p>
                            En tant que collecteur de fonds, vous participerez à nos campagnes de collecte de fonds visant à rendre viables 
                            nos projets et initiatives. Plusieurs modalités sont prévues pour ce type de collaboration.
                        </p>
                        <h5 className="mt-3 text-warning">Le bénévolat</h5>
                        <p>
                            En devenant bénévole, vous contribuerez activement à la concrétisation de nos initiatives. 
                            Les bénévoles apportent leur savoir-faire et leur expérience dans des projets de formation, de 
                            sensibilisation, des conférences et des séminaires, des projets de coopération et de 
                            solidarité sociale.
                        </p>
                        <a href="ola.html" className="btn btn-light">
                            <i className="bi bi-chevron-right"></i> Lire la suite
                        </a>
                    </div>
                    
                    <div>
                        <img src="images/man_1.png" alt="" className="img-fluid d-none d-xl-block"/>
                    </div>
                </div>
            </div>
	    </section>
    );
}

export default Colaborate;
