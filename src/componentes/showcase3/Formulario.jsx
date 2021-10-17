import React from 'react';

const Formulario = () => {


    return (
        <div className="modal fade" id="enroll" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="enrollLabel">Formulário de Adesão</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">Preencha esse formulário que será em breve contactado. Todos os campos são obrigatórios.</p>
                        <form id="contactForm" className="row g-2">
                            <div className="col-md-6">
                                <label htmlfor="first-name" className="col-form-label">Nome: </label>
                                <input type="text" className="form-control" id="first-name" name="first-name" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlfor="second-name" className="col-form-label">Apelido: </label>
                                <input type="text" className="form-control" id="second-name" name="second-name" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlfor="email" className="col-form-label">E-mail: </label>
                                <input type="email" className="form-control" id="email" name="email" data-sb-validations="required, email" />
                            </div>
                            <div className="col-md-6">
                                <label htmlfor="phone" className="col-form-label">Telemóvel: </label>
                                <input type="tel" className="form-control" id="phone" name="phone" required/>
                            </div>
                            <div className="col-12">
                                <label htmlfor="address" className="col-form-label">Endereço: </label>
                                <input type="text" className="form-control" id="address" name="address" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlfor="city" className="col-form-label">Cidade: </label>
                                <input type="text" className="form-control" id="city" name="city" required/>
                            </div>
                            <div className="col-md-2">
                                <label htmlfor="code" className="col-form-label">Código: </label>
                                <input type="text" className="form-control" id="code" name="code" required/>
                            </div>
                            <div className="col-md-4">
                                <label htmlfor="country" className="col-form-label">País: </label>
                                <input type="text" className="form-control" id="country" name="country" required/>
                            </div>
                            <div class="col-12">
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario
