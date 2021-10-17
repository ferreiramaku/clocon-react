import React from 'react'

const Emprego = () => {
    return (
        <div className="modal fade" id="emprego" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Employment</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">We will make available and maintain a job vacancy database. We will send personalized job offers to our members based on their professional and training profiles.</p>
                        <p className="lead">We are also available to mediate contracting and contract negotiation processes.</p>
                        <p className="lead">We will provide coaching actions aimed at increasing the degree of preparation and effectiveness of our members in the process of finding and obtaining employment.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emprego
