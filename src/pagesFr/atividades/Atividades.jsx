import './atividades.css';
import NavbarPages from "../../componentesFr/navbarPages/NavbarPages";
import Showcase3 from "../../componentesFr/showcase3/Showcase3";
import Newsletter from "../../componentesFr/newsletter/Newsletter";
import FooterPages from "../../componentesFr/footerPages/FooterPages";
import Activities from '../../componentesFr/activities/Activities';

const Atividades = () => {
    return (
        <div>
            <NavbarPages/>
            <Showcase3/>
            <Newsletter/>
            <Activities/>
            <FooterPages/>
        </div>
    );
}

export default Atividades; 
