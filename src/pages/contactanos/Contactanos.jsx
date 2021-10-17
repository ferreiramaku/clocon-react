import './contactanos.css';
import NavbarPages from "../../componentes/navbarPages/NavbarPages";
import Showcase3 from "../../componentes/showcase3/Showcase3";
import Newsletter from "../../componentes/newsletter/Newsletter";
import Contacts from '../../componentes/contacts/Contacts';
import FooterPaginas from '../../componentes/footerPaginas/FooterPaginas';

const Contactanos = () => {
    return (
        <div>
            <NavbarPages/>
            <Showcase3/>
            <Newsletter/>
            <Contacts/>
            <FooterPaginas/>
        </div>
    );
}

export default Contactanos;
