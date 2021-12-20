import './homeEng.css';
import Navbar from "../../componentesEng/navbar/Navbar";
import Showcase from "../../componentesEng/showcase/Showcase";
import Newsletter from "../../componentesEng/newsletter/Newsletter";
import Activities from "../../componentesEng/activities/Activities";
import Colaborate from "../../componentesEng/colaborate/Colaborate";
import Faq from "../../componentesEng/faq/Faq";
import Contacts from "../../componentesEng/contacts/Contacts";
import Footer from "../../componentesEng/footer/Footer";
import WhoweareEng from '../../componentesEng/whoweare/WhoweareEng';

function HomeEng() {
    return (
      <div className="App">
        <Navbar/>
        <Showcase/>
        <Newsletter/>
        <WhoweareEng/>
        <Activities/>
        <Colaborate/>
        <Faq/>
        <Contacts/>
        <Footer/>
      </div>
    );
  }
  
  export default HomeEng;