import React, {useState} from 'react'
import axios from 'axios';
import qs from 'qs'
import { useCookies } from "react-cookie";
import {useHistory} from 'react-router-dom';

import {FaTwitter, FaCrown, FaUser, FaFire, FaCloudRain, FaCompactDisc, FaInstagram, FaPaperPlane, FaAngleDown, FaBell} from "react-icons/fa"
import { Main, LoginLeft, LoginRight, LoginContent, InputFIeld, LabelText, PasswordBar, TinyText, CheckBox, LoginButton,
    RememberMe, SmallText, BigText, Overlay, LogoIcon, LogoText, BottomText, LeftContent, LeftText, BottomNav} from "./styles";

export default function Login() {
    const [token, setToken] = useCookies(["UserToken"]);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const url = "https://api.staging.hydrogenhr.com/api/v1/oauth/token"
    const History = useHistory()
    function handleEmailChange (e) {
        setEmail(e.target.value)
    }
    function handlePasswordChange (e) {
        setPassword(e.target.value)
    }

    async function handleLogin () {
        const data_info = {
            username:email,
            password,
            grant_type: "password"
        }
        const BasicAuth = {
            username:"hydrogenhr-hris-service",
            password:"password"
        }
        try{

            const res = await axios({
                method: 'post',
                url: url,
                data: qs.stringify({
                    username:email,
                    password,
                    grant_type: "password"
                }),
                auth: {
                    username:"hydrogenhr-hris-service",
                    password:"password"
                },
                headers: {
                  'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                }
              })


            setToken("UserToken", res.data.access_token, {
                maxAge: 186400,
                });
                History.push('/dashboard')
        }catch(err){
            console.log(err)
        }
    }
    return (
        <Main>
        <LoginLeft>
        
        <LeftContent>
            <LogoIcon><FaInstagram/></LogoIcon>
            <LogoText><b>Hydrogen Payroll</b></LogoText>
            <LeftText> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy
            </LeftText>
        </LeftContent>
        <BottomNav>
            <a href="/html/">Contact us</a> 
            <a href="/css/">Legal</a> 
            <a href="/js/">Privacy</a> 
        </BottomNav>
        <Overlay/>
        </LoginLeft>

        <LoginRight>
            <LoginContent>
                <div>
                    <BigText>Welcome back </BigText>
                    <SmallText> login into your hydorgen dashboard with your credentials</SmallText>

                    <LabelText> Email or Phonenumber</LabelText>
                    <InputFIeld type="text" onChange={(e)=> handleEmailChange(e)} placeholder="Enter your email address or phone Number"/>

                    <PasswordBar>
                    <LabelText>password</LabelText>
                    <TinyText primary >Forgot Password</TinyText>
                    </PasswordBar>
                    
                    <InputFIeld type="password" onChange={(e)=> handlePasswordChange(e)} placeholder="*************" />
                    <RememberMe>
                        <CheckBox type='checkbox'/>
                        <TinyText> Remember me</TinyText>
                    </RememberMe>
                    
                    <LoginButton onClick={(e)=>handleLogin(e)}> Login</LoginButton>
                </div>

                <BottomText>Don't have money yet? <BottomText primary> Join Hydrogen payroll</BottomText></BottomText>
                
                

            </LoginContent>
        </LoginRight>
    </Main>
    )
}


