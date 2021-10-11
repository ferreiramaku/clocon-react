import './aboutus.css';
import NavbarPages from "../../componentesEng/navbarPages/NavbarPages";
import Showcase2 from "../../componentesEng/showcase2/Showcase2";
import Newsletter from "../../componentesEng/newsletter/Newsletter";
import Footer from "../../componentesEng/footer/Footer";

const Aboutus = () => {
    return (
        <div>
            <NavbarPages/>
            <Showcase2/>
            <Newsletter/>
            <section className="pt-5 mt-5 pb-2">
                <h2 className="text-center">Know who we are</h2>
                <div className="container">
                    <hr/>
                    <div className="row align-items-center justify-content-between pt-4">
                        <div className="col-md embed-responsive embed-responsive-4by3">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/QqGpTnZvjsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-md">
                            <p>The association Clóçon Pôvô was created with the aim of:</p>
                            <ul>
                                <li type="circle" className="mb-2">Defending the the interests of the santomean diaspora in the spirit of unity.</li>
                                <li type="circle" className="mb-2">Helping santomeans to integrate into the society where they live and to contribute in the best way possible.</li>
                                <li type="circle" className="mb-2">Developing cultural actions that promote and value the Sao Tome identity.</li>
                                <li type="circle" className="mb-2">improving the technical and professional skills of santomeans in order to make them competitive in the international market.</li>
                                <li type="circle" className="mb-2">Helping to improve the income and quality of life of santomeans.</li>
                                <li type="circle">Supporting entrepreneurship through a specific action program.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mb-3  p-4">
                        <div className="col">
                            <ul>
                                <li type="circle" className="mb-2">Encouraging business partnerships.</li>
                                <li type="circle" className="mb-2">Making the santomeans in the diaspora become actors in the economic development of São Tomé and Príncipe and the countries where they reside.</li>
                                <li type="circle" className="mb-2">Supporting São Toméan associations, giving them assistance and guidance.</li>
                                <li type="circle" className="mb-2">Serving as a platform for the organization of reflection conferences.</li>
                                <li type="circle" className="mb-2">Positioning itself as a partner of state institutions and territorial collectivities in the implementation of policies and projects of interest to the santomean diaspora.</li>
                                <li type="circle" className="mb-2">Implementar programas que permitam a participação da diáspora em projetos de desenvolvimento de São Tomé e Príncipe.</li>
                                <li type="circle" className="mb-2">Supporting the implementation of a real democracy within the santomean society.</li>
                                <li type="circle">Strengthen the bonds of solidarity among santomeans, through the protection of their material and moral interests, the fight against all forms of discrimination and the defense of equal opportunities.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Aboutus;
