import styled from "styled-components";
import image from '../../ovie.jpeg'

export const Main = styled.main`
display: flex;
height: 100vh;
font-family: 'Poppins', sans-serif;
`

export const LoginLeft = styled.div`
width: 45%;
/* background-color: aquamarine; */
height: 100%;
display:flex;
justify-content: center;
align-items: center;
text-align:center;
background-image:url(${image})
`

export const LeftContent = styled.div`
width: 60%;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #FFFFFF;
`

export const LoginRight = styled.div`
width:55%;
height: 100%;
padding: 11% 17% 2% 12%;
box-sizing: border-box;


`
export const LoginContent =styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
justify-content: space-between;
z-index: 1;
`
export const SmallText = styled.div`
margin-bottom: 35px;
font-size:16px;
`
export const BottomText = styled.span`
margin-bottom: 35px;
font-weight : 500 ;
font-size: 16px;
color: ${props => props.primary ? "#A899F2" : "black"};
`
export const LogoIcon = styled.div`
font-size: 60px;
font-weight: 900;
z-index: 1;
`
export const LogoText = styled.div`
font-size: 40px;
font-weight: 900;
z-index: 1;
`
export const BigText = styled.div`
margin-bottom: 18px;
font-weight : 300 ;
font-size: 35px;
`

export const LabelText = styled.div`
font-size: 17px;
font-weight: 600;
color: black;
`
export const PasswordBar =styled.div`
display:flex;
justify-content: space-between;
align-items:flex-end;
padding-right: 5px;
`
export const RememberMe = styled.div`
display:flex;
align-items:center;
`
export const LeftText = styled.span`
font-size:14px;
font-weight: 600;
/* color: #FFFFFF; */
z-index: 1;
color: ${props => props.primary ? "#A899F2" : "#FFFFFF"};
`

export const TinyText = styled.span`
font-size:13px;
color: ${props => props.primary ? "#907DEE" : "black"};
`
export const LoginButton = styled.button`
width:100%;
border:none;
font-size: 18px;
color: white;
padding: 11px;
font-weight:500;
border-radius: 5px;
background-color: #6554C0;
margin-top: 25px
`
export const CheckBox = styled.input`
width: 14px;
height: 14px;
margin-right: 20px;
border-radius: 10px;
border: 2px solid #E9E9F4;
outline: none;
background-color: #F5F6FA;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none; 
`

export const InputFIeld =styled.input`
width:93%;
    height: 22px;
    border: 2px solid #E9E9F4;
    font-size: 14px;
    color: #AEACC0;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    background-color: #f5f6fa;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none; 
    margin: 14px 1px;
    &:focus {
            outline: none;
            box-shadow: none;
            background-color: #f5f6fa;
    }
    &:active {
            outline: none;
            box-shadow: none;
            background-color: #f5f6fa;
    }
`
export const Overlay =styled.div`
height:100%;
width:45%;
position:absolute;
background-color: rgb(0,0,0, 0.6);
z-index: 0.2;
`
export const BottomNav =styled.nav`
    position: absolute;
    left: 11px;
    bottom:11px;
    z-index: 1;
    >a{
        color:black;
        margin: 0px 5px;
        text-decoration:none;
        font-size:12px;
        color: #FFFFFF;
        z-index: 1;
    }
`