import './contribuir.css';
import NavbarPages from "../../componentes/navbarPages/NavbarPages";
import Showcase4 from "../../componentes/showcase4/Showcase4";
import Newsletter from "../../componentes/newsletter/Newsletter";
import ColaboratePages from "../../componentes/colaboratePages/ColaboratePages";
import FooterPaginas from '../../componentes/footerPaginas/FooterPaginas';

const Contribuir = () => {
    return (
        <div>
            <NavbarPages/>
            <Showcase4/>
            <Newsletter/>
            <ColaboratePages/>  
            <FooterPaginas/>
        </div>
    );
}

export default Contribuir;
