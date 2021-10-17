import './colaboratePages.css';

const ColaboratePages = () => {
    return (
        <section  className="p-5 text-light text-center text-sm-start">
            <div className="container">		
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h2 className="text-dark">How to contribute?</h2>
                        <h5 className="mt-4 text-warning">Donations</h5>
                        <p className="text-dark">
                            Choose a project or an initiative and make your donation responsibly and conscientiously. By donating 
                            to our projects and initiatives, you can benefit from tax reductions of up to 66% of the donated amount. 
                            Contact us for more detailed information.
                        </p>
                        <h5 className="mt-3 text-warning">Fundraising</h5>
                        <p className="text-dark">
                            As a fundraiser, you will participate in our fundraising campaigns aimed at making our projects and 
                            initiatives viable. There are several modalities foreseen for this type of collaboration.
                        </p>
                        <h5 className="mt-3 text-warning">Volunteering</h5> 
                        <p className="text-dark">
                            By becoming a volunteer you will be actively contributing to the materialization of our initiatives. 
                            Volunteers contribute with their know-how and experience in training projects, awareness raising, 
                            conferences, lectures and seminars, cooperation and social solidarity projects.
                        </p>
                        <a 
                            href="https://www.economie.gouv.fr/particuliers/prelevement-a-la-source-reductions-fiscales-dons-associations"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Access the French Ministry of Economy link for more information
                        </a>
                    </div>
                    
                    <div>
                        <img src="images/doacao.png" alt="" className="img-fluid d-none d-sm-block" />
                    </div>
                </div>
            </div>
	    </section>
    );
}

export default ColaboratePages;
