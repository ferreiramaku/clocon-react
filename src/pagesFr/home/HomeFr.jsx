import './homeFr.css';
import Navbar from "../../componentesFr/navbar/Navbar";
import Showcase from "../../componentesFr/showcase/Showcase";
import Newsletter from "../../componentesFr/newsletter/Newsletter";
import Activities from "../../componentesFr/activities/Activities";
import Colaborate from "../../componentesFr/colaborate/Colaborate";
import Faq from "../../componentesFr/faq/Faq";
import Testimonials from "../../componentesFr/testimonials/Testimonials";
import Contacts from "../../componentesFr/contacts/Contacts";
import Footer from "../../componentesFr/footer/Footer";
import WhoweareFr from '../../componentesFr/whoweare/WhoweareFr';

function HomeFr() {
    return (
      <div className="App">
        <Navbar/>
        <Showcase/>
        <Newsletter/>
        <WhoweareFr/>
        <Activities/>
        <Colaborate/>
        <Faq/>
        <Testimonials/>
        <Contacts/>
        <Footer/>
      </div>
    );
  }
  
  export default HomeFr;