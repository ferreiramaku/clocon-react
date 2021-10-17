import React from 'react'

const Cidadania = () => {
    return (
        <div className="modal fade" id="cidadania" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Citizenship</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">The political turmoil of the last few years has many of us worried about the future of our country and our planet.</p>
                        <p className="lead">Being a citizen comes with rights, duties and privileges. With every right we are given comes the responsibility to exercise it in a fair manner and to work toward helping fellow citizens do the same.</p>
                        <p className="lead">Real citizenship is active! Citizenship demands participation, involvement, and contribution. No one makes a difference without being involved.</p>
                        <p className="lead">People have no choice about the family or country they are born into, but people do have a choice about whether to be responsible members of their families and communities.</p>
                        <p className="lead">Initiatives aimed at environmental protection, social solidarity, social and political responsibility will be part of the range of actions that Clóçon Pôvô must develop.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cidadania
