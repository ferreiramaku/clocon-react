import './contactus.css';
import NavbarPages from "../../componentesEng/navbarPages/NavbarPages";
import Showcase3 from "../../componentesEng/showcase3/Showcase3";
import Newsletter from "../../componentesEng/newsletter/Newsletter";
import Footer from "../../componentesEng/footer/Footer";
import Contacts from '../../componentesEng/contacts/Contacts';

const Contactus = () => {
    return (
        <div>
            <NavbarPages/>
            <Showcase3/>
            <Newsletter/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default Contactus;
