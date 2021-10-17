import React from 'react'

const Empreendedorismo = () => {
    return (
        <div className="modal fade" id="empreendedorismo" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Entrepreneurship</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">A large percentage of São Toméan families residing in São Tomé and Príncipe are still dependent on remittances from their diaspora family members. In this context, the improvement in the standard of living of the São Toméans in the diaspora has direct and positive impacts on the development of São Tomé and Príncipe.</p>
                        <p className="lead">Many São Tomeans in the diaspora have not yet embraced entrepreneurship due to a lack of specific information and training. Many still do not know how to take advantage of various plans to encourage the development of entrepreneurship existing in the countries where they live.</p>
                        <p className="lead">Entrepreneurship requires a change of mindset and attitude. Entrepreneurship means taking on increased responsibilities and the risks inherent in the sector of activities.</p>
                        <p className="lead">Clóçon Pôvô intends to develop specific and combined programs with the aim of offering santomeans entrepreneurship opportunities tailored to their interests.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Empreendedorismo
