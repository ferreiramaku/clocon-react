import './quisommesnous.css';
import NavbarPages from "../../componentesFr/navbarPages/NavbarPages";
import Showcase2 from "../../componentesFr/showcase2/Showcase2";
import Newsletter from "../../componentesFr/newsletter/Newsletter";
import FooterPages from "../../componentesFr/footerPages/FooterPages";

const Quisommesnous = () => {
    return (
        <div>
            <NavbarPages/>
            <Showcase2/>
            <Newsletter/>
            <section className="pt-5 mt-5 pb-2">
                <h2 className="text-center">Qui sommes nous?</h2>
                <div className="container">
                    <hr/>
                    <div className="row align-items-center justify-content-between pt-4">
                        <div className="col-md embed-responsive embed-responsive-4by3">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/QqGpTnZvjsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md">
                            <p>L'association Clóçon Pôvô a été créée dans le but de:</p>
                            <ul>
                                <li type="circle" className="mb-2">Défendre les intérêts de la diaspora santoméenne dans un esprit d'unité.</li>
                                <li type="circle" className="mb-2">Aider les santoméens à s'intégrer dans la société où ils vivent et à contribuer de la meilleure façon possible.</li>
                                <li type="circle" className="mb-2">Développer des actions culturelles qui valorisent et promeuvent l'identité santoméenne.</li>
                                <li type="circle" className="mb-2">Améliorer les compétences technico-professionnelles des santoméens(-ennes) afin de les rendre compétitifs sur le marché international.</li>
                                <li type="circle" className="mb-2">Aider à améliorer les revenus et la qualité de vie des santoméens(-ennes).</li>
                                <li type="circle">Soutenir l'entrepreneuriat sur la base d'un programme d'action spécifique.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mb-3  p-4">
                        <div className="col">
                            <ul>
                                <li type="circle" className="mb-2">Encourager les partenariats d'affaires.</li>
                                <li type="circle" className="mb-2">Faire de la diaspora de santoméenne des acteurs du développement économique de Sao Tomé et Principe et des pays où ils résident.</li>
                                <li type="circle" className="mb-2">Soutenir les associations de santoméens, en les aidant et en les guidant à concretiser leurs projets.</li>
                                <li type="circle" className="mb-2">Servir de plate-forme pour l'organisation de conférences de réflexion.</li>
                                <li type="circle" className="mb-2">Se positionner comme partenaire des institutions de l'État et des collectivités territoriales dans la mise en œuvre des politiques et projets d'intérêt pour la diaspora santoméenne.</li>
                                <li type="circle" className="mb-2">Mettre en œuvre des programmes permettant la participation de la diaspora aux projets de développement à São Tomé et Príncipe.</li>
                                <li type="circle" className="mb-2">Soutenir la mise en place d'une véritable démocratie au sein de la société santoméenne.</li>
                                <li type="circle">Renforcer les liens de solidarité entre les santoméens, par la défense de leurs intérêts matériels et moraux, la lutte contre toutes les formes de discrimination et la défense de l'égalité des chances.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <FooterPages/>
        </div>
    );
}

export default Quisommesnous;
