import React from 'react'
import { Button, Carousel } from 'react-bootstrap'

function Slider() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img style={{height: '550px'}}
      className="d-block w-100"
      src="./img/banner.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="">The Best Place to Collect NFs</h1>
      <p className="pt-2 pb-2">Nulla vitae elit libero, a pharetra augue mollis interdum.<br/>Nulla vitae elit libero pharetra augue mollis interdum.<br/>Nulla vitae elit libero, a pharetra augue mollis.</p>
      
      <Button className="me-2 ps-4 pe-4"variant="primary">Create</Button>{' '}
      <Button className="text-light"variant="outline-primary">Connect Wallet</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '550px'}}
      className="d-block w-100"
      src="./img/banner.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>The Best Place to Collect NFT</h1>
      <p className="pt-2 pb-2">Nulla vitae elit libero, a pharetra augue mollis interdum.<br/>Nulla vitae elit libero pharetra augue mollis interdum.<br/>Nulla vitae elit libero, a pharetra augue mollis.</p>
      <Button className="me-2 ps-4 pe-4"variant="primary">Create</Button>{' '}
      <Button className="text-light"variant="outline-primary">Connect Wallet</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '550px'}}
      className="d-block w-100"
      src="./img/banner.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>The Best Place to Collect NFT</h1>
      <p className="pt-2 pb-2">Nulla vitae elit libero, a pharetra augue mollis interdum.<br/>Nulla vitae elit libero pharetra augue mollis interdum.<br/>Nulla vitae elit libero, a pharetra augue mollis.</p>
      <Button className="me-2 ps-4 pe-4" variant="primary"> Create </Button>{' '}
      <Button className="text-light"variant="outline-primary">Connect Wallet</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Slider
