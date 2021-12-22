import React from 'react'
import Banner from '../components/Banner'
import Calculation from '../components/Calculation'
import Navbars from '../components/Navbars'
import Populer from '../components/Populer'
import Slider from '../components/Slider'


function Home() {
    return (
        <div>
            <Navbars></Navbars>
            <Banner></Banner>
            <Calculation></Calculation>
            <Populer/>
            <Slider/>
        </div>
    )
}

export default Home
