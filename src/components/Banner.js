import React from 'react'
import { Button } from 'react-bootstrap'


function Banner() {
    return (
        <div style={{background:"#0B172E"}}>
            <div className="container">
                <div className="row " >
                    <div className="mt-5 mb-5" style={{ color:"#fff",display:'flex',justifyContent: 'center', flexDirection:'column', alignItems:'center'}}>
                    <h1 className=""style={{color:"#fff"}}>Create Digital Items, Sell Them <br/>
                    Yourself Or Keep Collecting</h1>
                    <p className="pt-3 pb-3"style={{}}>The world is clear. Our aim is to become the first NFT generator on the<br/>
                    Binance Smart Chain & Ethereum Blockchain.</p>
                    <Button variant="primary" style={{width: '150px'}}>BUY$TRAP</Button>{' '}
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Banner
