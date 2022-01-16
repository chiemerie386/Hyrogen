import React from 'react'
import {Chart} from '../Chart'
import ToggleSwitch from "../ToggleSwitch";
import {FaTwitter, FaCrown, FaUser, FaFire, FaCloudRain, FaCompactDisc, FaInstagram, FaPaperPlane, FaAngleDown, FaBell} from "react-icons/fa"
import {Main, Header, ChartHeader, BottomSummary, ChartContainer, ChartList,  TopBar, ChartMonthly, PersonalImage, LogoText, 
        SmallButton, HeaderIcons, PersonalDetails, AccountDetails, BigText, TinyText, Summary, Tabs, MediumText, BottomNav, 
        SmallText, DashBoardBody, BottomCard, Card, CardImage, CardAmount, CardDescription, MainBody, Icons, AccountSummary,
         Logo, ProfileImage, NameText,OtherAccountDetails, Toggle, Details} from './styles'

export default function Dashboard() {
    return (
        <Main>
            <Header>
               <Logo><FaInstagram/> <LogoText>Hydrogen payroll</LogoText> </Logo> 
                <Details>
                    <Icons>
                        
                        <HeaderIcons><FaCompactDisc/></HeaderIcons>
                        <HeaderIcons><FaBell/></HeaderIcons>
                    </Icons>
                    <NameText>Fummi Temidayo</NameText>
                    <FaAngleDown/>
                    <ProfileImage src="assets/lady.jpg"/>
                </Details>
            </Header>
            <TopBar>
            <BottomNav>
                <Tabs active>Dashboard</Tabs> 
                <Tabs>Payslips</Tabs> 
            </BottomNav>
            </TopBar>
            <DashBoardBody>
                <MainBody>
                    <BigText>Welcome Back Timedayo</BigText>
                    <SmallText>You have 6 notifications and 2 messages</SmallText>
                </MainBody>
                <MediumText>Dashboard</MediumText>
                <Summary>
                    <AccountDetails>
                        <PersonalDetails>
                            <PersonalImage><FaUser/></PersonalImage>
                            <div>
                                <SmallText> <b>Temidayo</b> </SmallText>
                                <TinyText>Eviconlabs Ltd</TinyText>
                            </div>
                            <SmallButton>Details</SmallButton>
                        </PersonalDetails>
                        <OtherAccountDetails>
                            <div>
                                <TinyText>Account Linked <br/> <b> **** **** **** 4563 </b></TinyText> <br/><br/>
                                <TinyText>Account Balance <br/> ************ </TinyText>
                            </div>
                            <Toggle>
                                <ToggleSwitch/>
                            </Toggle>
                            
                        </OtherAccountDetails>
                    </AccountDetails>
                    <AccountSummary>
                        <Card bottom right>
                            <CardImage>
                            <FaCrown/>
                            </CardImage>
                            <div>
                                <CardAmount>N285,000.90</CardAmount>
                                <CardDescription>Total Gross Paid</CardDescription>
                            </div>
                        </Card>
                        <Card bottom right>
                            <CardImage>
                            <FaPaperPlane/>
                            </CardImage>
                            <div>
                                <CardAmount>N285,000.90</CardAmount>
                                <CardDescription>Total Gross Paid</CardDescription>
                            </div>
                        </Card>
                        <Card bottom >
                            <CardImage>
                            <FaCloudRain/>
                            </CardImage>
                            <div>
                                <CardAmount>N285,000.90</CardAmount>
                                <CardDescription>Total Gross Paid</CardDescription>
                            </div>
                        </Card>
                        <Card right>
                            <CardImage>
                            <FaTwitter />
                            </CardImage>
                            <div>
                                <CardAmount>N285,000.90</CardAmount>
                                <CardDescription>Total Gross Paid</CardDescription>
                            </div>
                        </Card>
                        <Card right>
                            <CardImage>
                            <FaFire/>
                            </CardImage>
                            <div>
                                <CardAmount>N285,000.90</CardAmount>
                                <CardDescription>Total Gross Paid</CardDescription>
                            </div>
                        </Card>
                       
                    </AccountSummary>
                </Summary>
                <ChartContainer>
                    <ChartHeader >
                        <p>Trends</p>
                        <ChartList >
                            <li>Daily</li>
                            <li>Weekly</li>
                            <ChartMonthly >Monthly</ChartMonthly>
                            <li>Yearly</li>
                        </ChartList>
                    </ChartHeader>
                    <Chart/>
                    <BottomSummary>
                        <BottomCard right>
                                <CardImage>
                                <FaCrown/>
                                </CardImage>
                                <div>
                                    <CardAmount>N285,000.90</CardAmount>
                                    <CardDescription>Total Gross Paid</CardDescription>
                                </div>
                        </BottomCard>
                        <BottomCard right>
                                <CardImage>
                                <FaCrown/>
                                </CardImage>
                                <div>
                                    <CardAmount>N285,000.90</CardAmount>
                                    <CardDescription>Total Gross Paid</CardDescription>
                                </div>
                        </BottomCard>
                        <BottomCard right>
                                <CardImage>
                                <FaCrown/>
                                </CardImage>
                                <div>
                                    <CardAmount>N285,000.90</CardAmount>
                                    <CardDescription>Total Gross Paid</CardDescription>
                                </div>
                        </BottomCard>
                        <BottomCard right>
                                <CardImage>
                                <FaCrown/>
                                </CardImage>
                                <div>
                                    <CardAmount>N285,000.90</CardAmount>
                                    <CardDescription>Total Gross Paid</CardDescription>
                                </div>
                        </BottomCard>
                        <BottomCard >
                                <CardImage>
                                <FaCrown/>
                                </CardImage>
                                <div>
                                    <CardAmount>N285,000.90</CardAmount>
                                    <CardDescription>Total Gross Paid</CardDescription>
                                </div>
                        </BottomCard>
                        </BottomSummary>
                </ChartContainer>
            </DashBoardBody>
        </Main>
    )
}
