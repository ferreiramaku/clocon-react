import './contactus.css';
import NavbarPages from "../../componentesEng/navbarPages/NavbarPages";
import Showcase3 from "../../componentesEng/showcase3/Showcase3";
import Newsletter from "../../componentesEng/newsletter/Newsletter";
import Contacts from '../../componentesEng/contacts/Contacts';
import FooterPages from '../../componentesEng/footerPages/FooterPages';

const Contactus = () => {
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

export default Contactus;
