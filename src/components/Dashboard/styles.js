import styled from "styled-components";


export const Main = styled.main`
background-color: #F4F6FC;
width: 100vw;
font-family: 'Poppins', sans-serif;
box-sizing: border-box;
padding-bottom: 4%;
`
export const Header = styled.div`
height:50px;
background-color: #120C3E;
display:flex;
align-items: center;
justify-content: space-between;
padding: 10px 100px;
color: #ffffff;
`
export const TopBar = styled.div`
/* width:100%; */
height:70px;
background-color: #FFFFFF;
display:flex;
align-items: flex-end;
justify-content: space-between;
padding: 0px 15%;
/* color: #6554C0; */
`
export const BottomNav =styled.nav`
    display:flex;
    align-items: flex-end;
  
`
export const Tabs =styled.div`
    margin-right: 30px;
    padding: 7px 9px;
    color: ${props => props.active ? "#6554C0" : "#CCC"};
    border-bottom:${props => props.active ? "3px solid #6554C0" : ""}; ;
    display:flex;
    text-decoration:none;
    font-size:18px;
    font-weight: 600;
`
export const Logo = styled.div`
font-size: 40px;
display: flex;
justify-content: center;
align-items: center;
`
export const LogoText =styled.p`
margin-left:10px;
font-size: 17px;
font-weight: 600;
`
export const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    /* padding: 0px 10px; */
    border-right: 2px solid #ffffff;
    margin-right: 20px;
    height: 60%;

`
 export const HeaderIcons = styled.div`
  margin-right: 20px;
 `
export const Details = styled.div`
display: flex;
height: 100%;
align-items: center;
`

export const NameText = styled.div`
margin-right: 10px;
`
export const ProfileImage = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
/* background-image: url('assets/login.jpg'); */
margin-left: 15px;
`

export const DashBoardBody = styled.div`
/* width: 100%; */
margin: 1.5% 10% 1% 15%;
background-color: #F4F6FC;

`
export const MainBody = styled.div`
/* width: 100%; */
background-color: #6554C0;
color: #FFFFFF;
padding:  40px 20px;
border-radius: 5px;
`
export const BigText = styled.div`
margin-bottom: 10px;
font-weight : 600 ;
font-size: 30px;
`

export const MediumText = styled.div`
margin: 12px 0px;
font-weight : 600 ;
font-size: 24px;
`

export const SmallText = styled.div`
/* margin-bottom: 35px; */
font-size:15px;
`

export const Summary =styled.div`
width:100%;
display: flex;
`
export const AccountDetails =styled.div`
width:23%;
padding: 20px;
background-color: #120C3E;
color: #6554C0;
border-radius: 7px;
`
export const PersonalDetails = styled.div`
display:flex;
padding-bottom: 15px;
border-bottom: 1px solid #ccc;
margin-bottom: 15px;
color: #ffffff;
`

export const PersonalImage = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
background-color: #5949AD;
margin: 0px 10px;
display:flex;
justify-content: center;
align-items: center;
font-size: 35px;
color: #7E73BA;
`

export const TinyText = styled.span`
font-size:13px;
color: ${props => props.white ? "#FFFFFF" : "#696386"}
`

export const VerySmallText = styled.div`
padding-top: 10px;
font-size:10px;
color: #696386;
font-weight: 600;
`

export const SmallButton = styled.button`
border:none;
border-radius: 11px;
padding:6px;
height: 25px;
margin-left: 25px;
background-color: #ffffff;
color: #6554C0;
font-size: 12px;
`
export const AccountSummary = styled.div`
width:72%;
margin-left: 1%;
padding: 20px;
background-color: #FFFFFF;
color: #ffffff;
border-radius: 7px;
display: flex;
flex-wrap: wrap;
`
export const BottomSummary = styled.div`
width:100%;
padding-top: 3%;
margin-top: 3%;
/* padding: 20px; */
border-top: 1px solid #cbcbcf;
background-color: #FFFFFF;
color: #ffffff;
display: flex;
flex-wrap: wrap;
`
export const Card = styled.div`
padding: 20px 30px 0px 8px;
color:#A2AFBF;
display: flex;
/* border: 1px solid red; */
border-left: ${props => props.left ? "1px solid #cbcbcf" : ""}; 
border-right: ${props => props.right ? "1px solid #cbcbcf" : ""}; 
border-top: ${props => props.top ? "1px solid #cbcbcf" : ""}; 
border-bottom: ${props => props.bottom ? "1px solid #cbcbcf" : ""}; 
width: 28%
`
export const BottomCard = styled.div`
padding: 10px 10px 0px 20px;
color:#A2AFBF;
display: flex;
border-left: ${props => props.left ? "1px solid #cbcbcf" : ""}; 
border-right: ${props => props.right ? "1px solid #cbcbcf" : ""}; 
border-top: ${props => props.top ? "1px solid #cbcbcf" : ""}; 
border-bottom: ${props => props.bottom ? "1px solid ##cbcbcf" : ""}; 
width: 17%
`

export const CardImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
width: 50px;
border-radius: 50%;
background-color: #DFD9FE;
margin: 0px 10px;
font-size: 30px;
color: #6554C0;
`

export const CardAmount = styled.div`
font-weight: 800;
color:#000000;
`

export const CardDescription = styled.div`
font-size: 13px;
font-weight: 600;
`

export const ChartList = styled.ul`
    display: flex;
    >li{
        list-style-type:none ;
        margin-right: 20px;
        font-size: 14px;
        padding: 5px;
        border-radius: 4px;
    }
`

export const ChartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid #F5F5F7;
    margin-bottom: 10px;
`


export const ChartMonthly = styled.li`
    color: #ffffff;
    background-color: #6554C0;
`

export const ChartContainer = styled.div`
    background-color: #FFFFFF;
    margin-top: 25px;
    border-radius: 5px;
    padding:10px;
    padding-bottom:30px;
`

export const OtherAccountDetails =styled.div`
    display:flex;
    justify-content: space-between;
`

export const Toggle =styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`