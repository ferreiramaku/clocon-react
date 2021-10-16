import './contribuir.css';
import NavbarPages from "../../componentes/navbarPages/NavbarPages";
import Showcase4 from "../../componentes/showcase4/Showcase4";
import Newsletter from "../../componentes/newsletter/Newsletter";
import Footer from "../../componentes/footer/Footer";
import ColaboratePages from "../../componentes/colaboratePages/ColaboratePages";

const Contribuir = () => {
    return (
        <div>
            <NavbarPages/>
            <Showcase4/>
            <Newsletter/>
            <ColaboratePages/>  
            <Footer/>
        </div>
    );
}

export default Contribuir;
