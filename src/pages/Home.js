import React from 'react'
import Banner from '../components/Banner'
import Calculation from '../components/Calculation'
import Navbars from '../components/Navbars'
import Slider from '../components/Slider'


function Home() {
    return (
        <div>
            <Navbars></Navbars>
            <Banner></Banner>
            <Calculation></Calculation>
            <Slider/>
        </div>
    )
}

export default Home
