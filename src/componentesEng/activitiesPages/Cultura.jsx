import React from 'react'

const Cultura = () => {
    return (
        <div className="modal fade" id="cultura" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Culture</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">Culture is a reflection of a community or nation. This makes culture a vital and important determining factor of how the community reacts, responds, and grows. Culture plays a major role in the lives of everyone in the society. Culture gives you a sense of belonging.</p>
                        <p className="lead">We have a multicultural and insular country. We must assume this cultural diversity as an asset to overcome the constraints of insularity.</p>
                        <p className="lead">According to UNESCO, Culture is taken as a fundamental dimension of the development process. Sustainable development can only be ensured by integrating cultural factors into the strategies to achieve it.</p>
                        <p className="lead">In this context, Clóçon Pôvô will act with special interest in interaction and cultural promotion, promoting initiatives that broaden the cultural horizon of Sao Tome and serve to boost the social and economic development of Sao Tome.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cultura
