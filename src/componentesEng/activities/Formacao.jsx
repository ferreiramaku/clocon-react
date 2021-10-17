import React from 'react'

const Formacao = () => {
    return (
        <div className="modal fade" id="formacao" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Training</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">As technology advances and workplace methods and strategies improve, there comes a need for employers and employees to align with these changes in terms of knowledge, skills, values and abilities. One of the best ways to enhance knowledge and skills is through training. Getting employees exposed to relevant and consistent training can help companies improve performance and increase results in the workplace.</p>
                        <p className="lead">Employee training programs help improve the knowledge and skills of employees to match the various changes in the industry. These improvements will positively affect the productivity of workers, which can increase the profits and efficiency of an organization. Some of the things employees may learn through training include work ethics, human relations and safety.</p>
                        <p className="lead">Training programs can also help prepare employees who are moving into higher roles and taking on more responsibilities in an organization. These programs will help them learn the skills that are required to function effectively in their new positions. For example, they may be trained in leadership skills or in a specific software they will use in their new role.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formacao;
