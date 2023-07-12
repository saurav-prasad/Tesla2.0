import React from 'react'
import { styled } from 'styled-components'
import Section from './Section'
import Footer from './Footer'

function Home() {
    return (
        <Container>

            <Section description='Order Online for Touchless Delivery' rightBtnTxt='Explore Inventory'  leftBtnTxt='Custom Order' title='Model 3' backgroundImg='/images/model-3.jpg'/>

            <Section description='Leasing starting at $349/mo' rightBtnTxt='Explore Inventory'  leftBtnTxt='Custom Order' title='Model Y' backgroundImg='/images/model-y.jpg'/>
            
            <Section description='Order Online for Touchless Delivery' rightBtnTxt='Custom Order'  leftBtnTxt='Demo Drive' title='Model S' backgroundImg='/images/model-s.jpg'/>

            <Section description='Order Online for Touchless Delivery' rightBtnTxt='Custom Order'  leftBtnTxt='Demo Drive' title='Model X' backgroundImg='/images/model-x.jpg'/>

            <Section description='Schedule a Virtual Consultation' rightBtnTxt='Order Now'  leftBtnTxt='Learn More' title='Solar Panels' backgroundImg='/images/solar-panel.jpg'/>

            <Section description='Produce Clean Energy From Your Roof' rightBtnTxt='Order Now'  leftBtnTxt='Learn More' title='Solar Roof' backgroundImg='/images/solar-roof.jpg'/>

            <Section description='Produce Clean Energy From Your Roof'  leftBtnTxt='Shop Now' title='Solar Roof' backgroundImg='/images/accessories.jpg'/>

            <Footer/>
        </Container>
    )
}

export default Home
const Container = styled.div`
    height: 100vh;
`