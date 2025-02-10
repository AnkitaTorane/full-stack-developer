import React from 'react'
import logo from "../Images/footer.png"
import Location from "../Images/Location-icon.png"
import message from "../Images/Message-icon.png"
import call from "../Images/Call-icon.png"
import facebook from "../Images/facebook-icon.png"
import twiter from "../Images/twiter-icon.png"
import instagram from "../Images/instagram-icon.png"
import MainNavBar from '../commponents/MainNavBar'
import AboutUsImage from "../Images/AboutUsImage.png"
import AboutUsMainImg from "../Images/AboutUsMainImg.png"
import ContactUsDash from "../Images/ContactUsDash.png"
import AboutPagDash from "../Images/AboutPagDash.png"
import AboutRqustImg from "../Images/AboutRqustImg.png"
import ReqstQuote from "../Images/ReqstQuote.png"
import OurMission1 from "../Images/OurMission1.png"
import OurMission2 from "../Images/OurMission2.png"


const AboutUs = () => {
    return (
        <div>
            <div className='container'>
                <MainNavBar />

            </div>


            <div className="About-img-2">
                <img src={AboutUsImage} className="About-hero-img" />
                <div className="About-hero-img-text">
                    <h2 className="about-Main-Contain">
                        <b>About Us</b>
                    </h2>
                </div>
            </div>

            <div className='Container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={AboutUsMainImg} className='about-main-img'/>
                    </div>
                    <div className='col-md-6'>
                        <div className="about-main-para">
                        <div>
                            <img src={ContactUsDash} />
                            <span class="span-class">About Service</span>
                        </div>
                        <div>
                            <h1 className="about-main-hedding">Websites  that tell your
                                brand’s story</h1>
                            <p className="about-para">We create websites that beautifully tell your brand’s story, blending captivating design with compelling narratives. Every element, from visuals to content, is thoughtfully crafted to reflect your identity.</p>
                            <p className="about-para">We create websites that beautifully tell your brand’s story, blending captivating design with compelling narratives. Every element, from visuals to content, is thoughtfully crafted to reflect your identity.</p>
                            <p className="about-para">We create websites that beautifully tell your brand’s story, blending captivating design with compelling narratives. Every element, from visuals to content, is thoughtfully crafted to reflect your identity.</p>
                            <img src={AboutPagDash} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className='about-container'>
                <div className='row'>
                    <div className='sub-about-container'>
                    <div className='col-md-4'>
                        <div className='first-about-contain'>
                        <div className='ourmission-img'>
                            <img src={OurMission1} className='ourmission-img' />
                        </div>
                        <div>
                            <h1 className='Ourmission-hedding'>Our Mission</h1>
                            <p className='Ourmission-para'>At Hariom, we will act as client's trusted advisor specializing in areas of technology and digital services to help achieve their business success.</p>
                        </div>
                    </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='second-about-contain'>
                    <div>
                            <img src={OurMission2} className='ourmission-img'/>
                        </div>
                        <div className=''>
                            <h1 className='Ourmission-hedding-two'>Our Mission</h1>
                            <p className='Ourmission-para-two'>At Hariom, we will act as client's trusted advisor specializing in areas of technology and digital services to help achieve their business success.</p>
                        </div>

                    </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='second-about-contain'>
                    <div>
                            <img src={OurMission2} className='ourmission-img'/>
                        </div>
                        <div>
                            <h1 className='Ourmission-hedding-two'>Our Mission</h1>
                            <p className='Ourmission-para-two'>At Hariom, we will act as client's trusted advisor specializing in areas of technology and digital services to help achieve their business success.</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className='about-sub-container'>
                <div className='row main-box'>
                    <div className='col-md-6'>
                        <img src={ReqstQuote} />
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <h1 className='sub-contain-hedding'>Intrested In Working Together </h1>
                        </div>
                        <img src={AboutRqustImg} />
                    </div>

                </div>

            </div>

            <footer>
                <div className="Container">
                    <div className="footer-first-container">
                        <div className="row py-5">
                            <div className="col-md-4">
                                <img src={logo} />
                                <p className="my-5" >
                                    Innovation is the driving force behind progress,
                                    transforming ideas into impactful solutions that address modern challenges.
                                    Innovation is the driving force behind progress, transforming ideas into impactful solutions that address.
                                </p>
                                <ul>
                                    <li>
                                        <img src={Location} className="footer-icons" />1234 Elm Street, Springfield, IL 62704,
                                        New York
                                    </li>
                                    <li>
                                        <img src={message} className="footer-icons" />supporthariom@gmail.com
                                    </li>
                                    <li>
                                        <img src={call} className="footer-icons" />(212) 555-7890
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2">
                                <h6>Company </h6>
                                <ul>
                                    <li> About us</li>
                                    <li>Careers</li>
                                    <li> Case Studies</li>
                                    <li> Testimonials</li>
                                </ul>
                                <br />
                                <br />
                                <h6>Industry </h6>
                                <ul>
                                    <li>Education & Learning</li>
                                    <li>Food & Hospitality</li>
                                    <li> Health & Fitness</li>
                                    <li>Finance & Marketing</li>
                                    <li>Real Estate</li>
                                    <li>Retail & Ecommerce</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h6>Services </h6>
                                <ul>
                                    <li>
                                        Al Enabled Application
                                    </li>
                                    <li>ERP Consulting and</li>
                                    <li>Development</li>
                                    <li>Frontend Development</li>
                                    <li>Web Development</li>
                                    <li>Microsoft Technologies</li>
                                    <li>Mobile Development</li>
                                    <li>Data Visualizaton</li>
                                    <li> Devops Development</li>
                                    <li>Enterprise Portals</li>
                                    <li>Dedicated Development Team</li>
                                    <li>UI/UX Design</li>
                                    <li>Database Consulting</li>
                                    <li> Open Source CMS & E-</li>
                                    <li>QA and Testing</li>
                                </ul>
                            </div>
                            <div className="col-md-3">

                                <h6>Technology </h6>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Jquery</li>
                                    <li>Bootstrap</li>
                                    <li>ReactJS</li>
                                    <li>Angular</li>
                                    <li>Azure AI</li>
                                    <li>Open AI</li>
                                    <li>ASPNET Core</li>
                                    <li>ASP.NET.MVC</li>
                                    <li>PHP</li>
                                    <li>NodeJS</li>
                                    <li>Python</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="pb-3 copy-right-div">
                            <span>Copyright: © 2024 By Hariom Innovations</span>
                            <div>
                                <img src={facebook} className="social-icon-footer" />
                                <img src={twiter} className="social-icon-footer" />
                                <img src={instagram} className="social-icon-footer" />
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

        </div>
    )
}

export default AboutUs
