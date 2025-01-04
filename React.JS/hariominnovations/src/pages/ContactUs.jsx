import MainNavBar from "../commponents/MainNavBar"
import logo from "../Images/footer.png"
import Location from "../Images/Location-icon.png"
import message from "../Images/Message-icon.png"
import call from "../Images/Call-icon.png"
import facebook from "../Images/facebook-icon.png"
import twiter from "../Images/twiter-icon.png"
import instagram from "../Images/instagram-icon.png"
const ContactUs = () => {

    return (
        <div>
            <div className="Container">
                <MainNavBar />
                <h1>form</h1>
                <h1>form</h1>
                <h1>form</h1>
                <h1>form</h1>
                <h1>form</h1>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.4565993667647!2d74.22187720000001!3d17.3194702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc17f03509738b1%3A0x576f02648d3bb018!2sHari%20Om%20Innovations!5e1!3m2!1sen!2sin!4v1735748730545!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{
                    border: 0,
                    width: "100%",
                    heigh: "500px",
                }}
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">

            </iframe>
            <footer>
                <div className="Container">
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
                        <div className="col-md-3">
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
                        <div className="col-md-2">

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
                            <img src={twiter} className="social-icon-footer"/>
                            <img src={instagram}className="social-icon-footer" />
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    )
}
export default ContactUs