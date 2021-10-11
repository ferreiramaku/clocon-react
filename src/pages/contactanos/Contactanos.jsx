import './contactanos.css';
import NavbarPages from "../../componentes/navbarPages/NavbarPages";
import Showcase3 from "../../componentes/showcase3/Showcase3";
import Newsletter from "../../componentes/newsletter/Newsletter";
import Footer from "../../componentes/footer/Footer";
import Contacts from '../../componentes/contacts/Contacts';

const Contactanos = () => {
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

export default Contactanos;
