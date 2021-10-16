import './newsletter.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Newsletter = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('cloconMessage', 'template_n4ljw3o', form.current, 'user_T9KziHzx2loqJ0rpXnAY0')
        .then((result) => {
            alert('Subscrição efetuada com sucesso! :)'); 
        }, (error) => {
            alert(error.message);
        });
        e.target.reset(); 
    };

    return (
        <section className="cor-fundo-1 text-light p-5 mb-2">
            <div className="container">
                <div className="d-flex align-items-center row text-center">
                    <div className="col-md-5 mb-3 mb-md-0">
                        <h3>Subscreva o nosso boletim de informações:</h3>
                    </div>
                    <div className="col-md-7 news-input">
                        <form id="contactForm" onSubmit={sendEmail} ref={form}>
                            <div class="input-group">
                                <input id="emailAddress" type="email"  className="form-control" placeholder="Insira o seu e-mail" data-sb-validations="required, email" name="email"/>
                                <button className="btn btn-dark btn-lg" type="submit">Enviar</button>
                            </div>
                        </form>
                        <div id="quemsomos" className="marcador_escondido"></div>
                    </div>
                </div>
            </div>
	    </section> 
    );
} 

export default Newsletter;
