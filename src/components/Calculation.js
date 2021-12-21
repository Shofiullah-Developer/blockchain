import React from 'react'

function Calculation() {
    return (
        <div style={{background:'#26324B'}}>
            <div className="container">
                <div className='row pt-5 pb-3'>
                    <div className='col-md-3 text-light'>
                        <h5 className='font-weight-bold'>$0.000000000631452</h5>
                        <p><small>TrapCardz (TRAP/BNB)</small> </p>
                    </div>
                    <div className='col-md-3 text-light'>
                        <h5 className='font-weight-bold'>$20,864,001.22</h5>
                        <p><small>Market Cap</small> </p>
                    </div>
                    <div className='col-md-3 text-light'>
                        <h5 className='font-weight-bold'>$171,938.52</h5>
                        <p><small>Sales Volume (24h)</small> </p>
                    </div>
                    <div className='col-md-3 text-light'>
                        <h5 className='font-weight-bold'>696</h5>
                        <p><small>Total Sales (24h)</small> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculation
