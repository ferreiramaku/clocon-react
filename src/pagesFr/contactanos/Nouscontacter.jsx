import './nouscontacter.css';
import NavbarPages from "../../componentesFr/navbarPages/NavbarPages";
import Showcase3 from "../../componentesFr/showcase3/Showcase3";
import Newsletter from "../../componentesFr/newsletter/Newsletter";
import Contacts from '../../componentesFr/contacts/Contacts';
import FooterPages from '../../componentesFr/footerPages/FooterPages';

const Nouscontacter = () => {
    return (
        <div>
            <NavbarPages/>
            <Showcase3/>
            <Newsletter/>
            <Contacts/>
            <FooterPages/>
        </div>
    );
}

export default Nouscontacter;
