import './showcase.css';

const Showcase = () => {
    return (
        <>
        <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h4>Welcome to the</h4>
                        <h1 className="text-warning">Clóçon Pôvô website</h1>
                        <p className="lead my-4">Clóçon Pôvô is an international network of santomeans associations throughout the world. Our main objective is to unite, strengthen and empower santomeans.
                        </p>
                        <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">Join now!</button>
                    </div>
                    <img className="img-fluid w-50 d-none d-sm-block" src="images/mulher_2.png" alt=""/> 
                </div>
            </div>
        </section>
        
        <div className="modal fade" id="enroll" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
		<div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="enrollLabel">Membership Form</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <p className="lead">Fill out this form and we will contact you shortly.</p>
                <form action="">
                    <div className="mb-3">
                        <label for="first-name" className="col-form-label">Name: </label>
                        <input type="text" className="form-control" id="first-name"/>
                    </div>
                    <div className="mb-3">
                        <label for="last-name" className="col-form-label">Surname: </label>
                        <input type="text" className="form-control" id="last-name"/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="col-form-label">E-mail: </label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="col-form-label">Phone: </label>
                        <input type="tel" className="form-control" id="phone"/>
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary">Send</button>
                </div>
            </div>
		</div>
	</div>
    </>
    );
}

export default Showcase;
