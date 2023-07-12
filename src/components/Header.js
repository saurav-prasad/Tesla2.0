import React, { useState } from 'react'
import { styled } from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/CarSlice';
import {useSelector} from 'react-redux'

function Header() {
    const [Nav, setNav] = useState(false)
    const cars = useSelector(selectCars)
    console.log(cars);
    return (
        <Container>
            <img src="/images/logo.svg" alt="" />
            <MidMenu>
                {
                    cars && cars.map((car,index)=>(
                        <p key={index}>{car}</p>
                    ))
                }
            </MidMenu>
            <RightMenu>
                <p>Shop</p>
                <p>Account</p>
                <p  onClick={()=>setNav(true)}>Menu</p>
            </RightMenu>
            <CustomMenuIcon onClick={()=>setNav(true)}/>
            <BurgerNav Nav={Nav}>
                <CustomCloseIcon  onClick={()=>setNav(false)}/>
                <ul>
                    <li><p>Existing Inventory</p></li>
                    <li><p>Used Inventory</p></li>
                    <li><p>Tade-in</p></li>
                    <li><p>Demo Drive</p></li>
                    <li><p>Insurance</p></li>
                    <li><p>Powerwall</p></li>
                    <li><p>Commercial Energy</p></li>
                    <li><p>Utilities</p></li>
                    <li><p>Charging</p></li>
                    <li><p>Find Us</p></li>
                    <li><p>Support</p></li>
                    <li><p>Investors Relations</p></li>
                    <li><p>Shop</p></li>
                </ul>
            </BurgerNav>
        </Container>
    )
}

export default Header
const Container = styled.div`
    user-select: none;
    ::-webkit-scrollbar {
      display: none;
    }
    position: fixed;
    top: 0;
    width: 100%;
    padding: 17px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    img{
        height: 20px;
        width: 100px
    }
`

const MidMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        margin: 0 4px;
        cursor: pointer;
        padding: 0 3px;
        font-weight: 550;
        font-size: 15px;
        color: #171a20;
    }
    @media(max-width:1000px){
        display:none;
    }
`

const RightMenu = styled(MidMenu)`
    display: flex;
    @media(max-width:800px){
      display:none;
    }

`
const CustomMenuIcon = styled(MenuIcon)`
    cursor: pointer;
    display: none !important;
    @media(max-width: 800px){
        display: block !important;
    }
`
const CustomCloseIcon = styled(CloseIcon)`
    position: fixed;
    right: 25px;
    top: 22px;
    cursor: pointer;
    z-index:30;
`

const BurgerNav = styled.div`
    transform: ${props => props.Nav ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.5s ease ;
    background-color: white;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    padding: 50px;
    z-index: 20;
    overflow-y: scroll;
    li{
        cursor: pointer;
        text-align: left;
        list-style:none;
    }
    p{
        margin: 35px 0;
    }
`