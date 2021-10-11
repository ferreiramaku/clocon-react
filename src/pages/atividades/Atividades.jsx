import './atividades.css';
import NavbarPages from "../../componentes/navbarPages/NavbarPages";
import Showcase3 from "../../componentes/showcase3/Showcase3";
import Newsletter from "../../componentes/newsletter/Newsletter";
import Footer from "../../componentes/footer/Footer";
import ActivitiesPages from '../../componentes/activitiesPages/ActivitiesPages';

const Atividades = () => {
    return (
        <div>
            <NavbarPages/>
            <Showcase3/>
            <Newsletter/>
            <ActivitiesPages/>
            <Footer/>
        </div>
    );
}

export default Atividades;
