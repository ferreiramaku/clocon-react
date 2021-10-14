import './contacts.css';

const Contacts = () => {
    return (
        <section className="p-5 mt-5 mb-4">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md">
                        <h2 className="text-center mb-3">Contacts</h2>
                        <hr/>
                        <ul className="list-group list-group-flush lead pt-3">
                            <li className="list-group-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-pin-map-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                                    <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                                </svg> : 4ter, rue Saint-Denis, 93110 Rosny-sous-Bois, France
                            </li>
                            <li className="list-group-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-phone-vibrate-fill" viewBox="0 0 16 16">
                                    <path d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0zM1.807 4.734a.5.5 0 1 0-.884-.468A7.967 7.967 0 0 0 0 8c0 1.347.334 2.618.923 3.734a.5.5 0 1 0 .884-.468A6.967 6.967 0 0 1 1 8c0-1.18.292-2.292.807-3.266zm13.27-.468a.5.5 0 0 0-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A7.967 7.967 0 0 0 16 8a7.967 7.967 0 0 0-.923-3.734zM3.34 6.182a.5.5 0 1 0-.93-.364A5.986 5.986 0 0 0 2 8c0 .769.145 1.505.41 2.182a.5.5 0 1 0 .93-.364A4.986 4.986 0 0 1 3 8c0-.642.12-1.255.34-1.818zm10.25-.364a.5.5 0 0 0-.93.364c.22.563.34 1.176.34 1.818 0 .642-.12 1.255-.34 1.818a.5.5 0 0 0 .93.364C13.856 9.505 14 8.769 14 8c0-.769-.145-1.505-.41-2.182z"/>
                                </svg> : 06 95 72 27 41
                            </li>
                            <li className="list-group-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-at" viewBox="0 0 16 16">
                                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
                                </svg> : diasporasantomeennecloconpovo@gmail.com
                            </li>
                        </ul>
                        <img src="images/mapa.jpg" className="mt-3 mapa-dim" alt=""/>
                    </div>

                    <div className="col-md">
                        <h2 className="text-center mb-3">Formulaire de contact</h2>
                        <hr/>
                        <form id="contactForm" className="pt-5">

                            <div className="mb-4">
                                <label className="form-label fw-bold" htmlFor="name">Prénom et Nom:</label>
                                <input className="form-control" id="name" type="text" placeholder="Prénom et Nom" data-sb-validations="required" />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-bold" htmlFor="emailAddress">Email:</label>
                                <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-bold" htmlFor="message">Message:</label>
                                <textarea className="form-control" id="message" type="text" placeholder="Message" style={{height: '10rem'}} data-sb-validations="required"></textarea>
                            </div>

                            <div className="d-grid">
                                <button className="btn btn-primary btn-lg" type="submit">Envoyer</button>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
