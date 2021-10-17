import './contribuir.css';
import NavbarPages from "../../componentesEng/navbarPages/NavbarPages";
import Showcase4 from "../../componentesEng/showcase4/Showcase4";
import Newsletter from "../../componentesEng/newsletter/Newsletter";
import ColaboratePages from "../../componentesEng/colaboratePages/ColaboratePages";
import FooterPages from '../../componentesEng/footerPages/FooterPages';

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
