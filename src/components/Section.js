import React from 'react'
import { styled } from 'styled-components'
import { Fade, Slide } from "react-awesome-reveal";

function Section({ backgroundImg, title, leftBtnTxt, rightBtnTxt, description }) {
    console.log(backgroundImg);
    return (
        <Wrap bgImg={backgroundImg} fraction={1} cascade>
            <Fade direction='top'>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <div>
                <ItemButton>
                    {
                        rightBtnTxt &&
                        <RightButton>
                            {rightBtnTxt}
                        </RightButton>
                    }

                    <LeftButton>
                        {leftBtnTxt}
                    </LeftButton>
                </ItemButton>
                <DownArrow src='/images/down-arrow.svg' />
            </div>
        </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${props => props.bgImg});
`

const ItemText = styled.div`
    padding-top: 12vh;
    p{
        padding-top: 15px;
    }
`

const ItemButton = styled.div`
    user-select: none;
    display: flex;
    @media (max-width: 600px){
        flex-direction: column;
    }
    
    @media (min-width: 600px){
        justify-content: center;
        margin-bottom: 1.5vh;
    }
    justify-content: space-between;
    align-items: center;
`

const RightButton = styled.div`
    cursor: pointer;
    font-weight: 550;
    font-size: 1.01rem;
    border-radius: 5px;
    padding: 11px 10px;
    background-color: rgb(244 244 244 / 65%); /* white */
    width: 90%;
    margin-bottom: 20px;
    color: #393c41;
    
    @media (min-width: 600px){
        max-width: 300px;
        margin: 0 20px;
    }
`

const LeftButton = styled(RightButton)`
    background-color: rgb(23 26 32 / 65%); /* black */
    color: #f5f5f5;
`

const DownArrow = styled.img`
    user-select: none;
    width: 45px;
    opacity: 0.8;
    animation: animateDown infinite 1.7s;
    margin-bottom: 1vh;
`