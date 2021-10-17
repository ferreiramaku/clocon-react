import React from 'react'

const Desporto = () => {
    return (
        <div className="modal fade" id="desporto" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="enrollLabel">Sports</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">Sport and recreation is not about winning, it's about helping build stronger, healthier, happier, and safer communities. Our association advocates and supports projects to strengthen communities through sport and recreation.</p>
                        <p className="lead">Sport has the ability to improve the health and wellbeing of all that participate regardless of age, ability, background or gender.</p>
                        <p className="lead">The benefits of sport go well beyond just health. You can't underestimate the positive impact sport has on our culture, society and economy. Our communities are strengthened when we come together to play sport and building a sense of belonging.</p>
                        <p className="lead">Sport improves social connectivity and inclusion. It builds communities, enables diversity through larger social networks and creates friends for life.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desporto 
