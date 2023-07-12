import React from 'react'
import { styled } from 'styled-components'

function Footer() {
    return (
        <Container>
            <ul>
                <li>Tesla © 2023</li>
                <li>Privacy & Legal</li>
                <li>Vehicle Recalls</li>
                <li>Get Updates</li>
                <li>Contact</li>
                <li>News</li>
            </ul>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    padding-bottom:25px;
    ul{     
        display:flex;
        align-items:center;
        flex-direction: column;
        justify-content: center;
        @media(min-width:800px){
            flex-direction: row;
        }
    }
    li{
        font-weight:450;
        font-size:13px;
        padding:3px;
        margin:5px;
        list-style:none;
    }
`
