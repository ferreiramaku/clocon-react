import './newsletter.css';

const Newsletter = () => {
    return (
        <section className="cor-fundo-1 text-light p-5 mb-2">
            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h3 className="mb-3 mb-md-0">Subscribe to our newsletter</h3>
                    <div className="input-group news-input">
                        <input type="text" className="form-control" placeholder="Enter your email"/>
                        <button className="btn btn-dark btn-lg" type="button">Send</button>
                        <div id="quemsomos" className="marcador_escondido"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;