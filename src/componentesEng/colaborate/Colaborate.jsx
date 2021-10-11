import { Link } from 'react-router-dom';
import './colaborate.css';

const Colaborate = () => {
    return (
        <section  className="mt-5 p-5 bg-fundo-2 text-light text-center text-sm-start">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between p-0">
                    <div>
                        <h2>How to contribute?</h2>
                        <h5 className="mt-4 text-warning">Donations</h5>
                        <p>
                            Choose a project or an initiative and make your donation responsibly and conscientiously. By donating 
                            to our projects and initiatives, you can benefit from tax reductions of up to 66% of the donated amount. 
                            Contact us for more detailed information.
                        </p>
                        <h5 className="mt-3 text-warning">Fundraising</h5>
                        <p>
                            As a fundraiser, you will participate in our fundraising campaigns aimed at making our projects and 
                            initiatives viable. There are several modalities foreseen for this type of collaboration.
                        </p>
                        <h5 className="mt-3 text-warning">Volunteering</h5>
                        <p>
                            By becoming a volunteer you will be actively contributing to the materialization of our initiatives. 
                            Volunteers contribute with their know-how and experience in training projects, awareness raising, 
                            conferences, lectures and seminars, cooperation and social solidarity projects.
                        </p>
                        <Link to="/colaborate" className="btn btn-light">
                            <i className="bi bi-chevron-right"></i> Read more
                        </Link>
                    </div>
                    
                    <div>
                        <img src="images/man_1.png" alt="" className="img-fluid d-none d-sm-block p-0"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Colaborate;
