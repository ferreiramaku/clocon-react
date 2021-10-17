import './atividades.css';
import NavbarPages from "../../componentes/navbarPages/NavbarPages";
import Showcase3 from "../../componentes/showcase3/Showcase3";
import Newsletter from "../../componentes/newsletter/Newsletter";
import ActivitiesPages from '../../componentes/activitiesPages/ActivitiesPages';
import FooterPaginas from '../../componentes/footerPaginas/FooterPaginas';

const Atividades = () => {
    return (
        <div>
            <NavbarPages/>
            <Showcase3/>
            <Newsletter/>
            <ActivitiesPages/>
            <FooterPaginas/>
        </div>
    );
}

export default Atividades; 
