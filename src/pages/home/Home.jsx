import './home.css';
import Navbar from "../../componentes/navbar/Navbar";
import Showcase from "../../componentes/showcase/Showcase";
import Newsletter from "../../componentes/newsletter/Newsletter";
import Whoweare from "../../componentes/whoweare/Whoweare";
import Activities from "../../componentes/activities/Activities";
import Colaborate from "../../componentes/colaborate/Colaborate";
import Faq from "../../componentes/faq/Faq";
import Contacts from "../../componentes/contacts/Contacts";
import Footer from "../../componentes/footer/Footer";

function Home() {
    return (
      <div>
        <Navbar/>
        <Showcase/>
        <Newsletter/>
        <Whoweare/>
        <Activities/>
        <Colaborate/>
        <Faq/>
        <Contacts/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;