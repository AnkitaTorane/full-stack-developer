import React from 'react'
import MainNavBar from '../commponents/MainNavBar'
import ServicesImage from "../Images/ServicesImage.png"
import logo from "../Images/footer.png"
import Location from "../Images/Location-icon.png"
import message from "../Images/Message-icon.png"
import call from "../Images/Call-icon.png"
import facebook from "../Images/facebook-icon.png"
import twiter from "../Images/twiter-icon.png"  
import instagram from "../Images/instagram-icon.png"
const Product = () => {
    return (
        <div>
            <div className="Container">
                <MainNavBar />
            </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

            <div className="Services-img-2">
                <img src={ServicesImage} className="services-hero-img" />
                <div className="services-hero-img-text">
                    <h2 className="Main-Contain">
                        <b>Services</b>
                    </h2>
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

export default Product


