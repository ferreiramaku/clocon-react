import './contribuir.css';
import NavbarPages from "../../componentesFr/navbarPages/NavbarPages";
import Showcase4 from "../../componentesFr/showcase4/Showcase4";
import Newsletter from "../../componentesFr/newsletter/Newsletter";
import FooterPages from "../../componentesFr/footerPages/FooterPages";
import ColaboratePages from "../../componentesFr/colaboratePages/ColaboratePages";

const Contribuir = () => {
    return (
        <div>
            <NavbarPages/>
            <Showcase4/>
            <Newsletter/>
            <ColaboratePages/>  
            <FooterPages/>
        </div>
    );
}

export default Contribuir;
