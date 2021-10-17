import './activities.css';
import NavbarPages from "../../componentesEng/navbarPages/NavbarPages";
import Showcase3 from "../../componentesEng/showcase3/Showcase3";
import Newsletter from "../../componentesEng/newsletter/Newsletter";
import ActivitiesPages from '../../componentesEng/activitiesPages/ActivitiesPages';
import FooterPages from '../../componentesEng/footerPages/FooterPages';

const Activities = () => {
    return (
        <div>
            <NavbarPages/>
            <Showcase3/>
            <Newsletter/>
            <ActivitiesPages/>
            <FooterPages/>
        </div>
    );
}

export default Activities; 
