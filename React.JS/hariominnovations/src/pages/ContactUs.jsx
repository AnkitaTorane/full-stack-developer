import MainNavBar from "../commponents/MainNavBar"
import logo from "../Images/footer.png"
import Location from "../Images/Location-icon.png"
import message from "../Images/Message-icon.png"
import call from "../Images/Call-icon.png"
import facebook from "../Images/facebook-icon.png"
import twiter from "../Images/twiter-icon.png"
import instagram from "../Images/instagram-icon.png"
import ContactUsImage from "../Images/ContactUsImage.png"
import contactUsCall from "../Images/contactUsCall.png"
import ContactUsMessage from "../Images/ContactUsMessage.png"
import ContactUsLocation from "../Images/ContactUsLocation.png"
import contactLinkedin from "../Images/contactLinkedin.png"
import followusInstagram from "../Images/followusInstagram.png"
import followUsFacebook from "../Images/followUsFacebook.png"
import followUsTwiter from "../Images/followUsTwiter.png"
import ContactUsDash from "../Images/ContactUsDash.png"
import Button from 'react-bootstrap/Button';
import ContactusArrow from "../Images/ContactusArrow.png"

const ContactUs = () => {

    return (
        <div>
            <div className="Container">
                <MainNavBar />


            </div>
            <div className="hero-img-div">
                <img src={ContactUsImage} className="hero-img" />
                <div className="hero-img-text-div">
                    <h2 className="text-white text-center"><b>Contact Us</b></h2>
                </div>
            </div>
            <div className="container py-5 my-5">

                <div className="row text-center ">
                    <div className="col-md-12">
                        <img src={ContactUsDash} /> <span className="sub-title">Get In Touch </span>
                        <h3 className="title-section">Hey! Let’s Talk</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <input type="text" placeholder="Name" className="contact-form-input" />
                        <br />
                        <input type="email" placeholder="Email" className="contact-form-input" />
                        <br />
                        <input type="phone" placeholder="Phone" className="contact-form-input" />
                        <br />
                        <textarea placeholder="Your message" className="contact-form-input" />
                        <div>
                            <Button className="contactus-button">Send Now<img src={ContactusArrow}/></Button>
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="row box-row-icon-text">
                            <div className="col-md-4 row-icon">
                                <img src={contactUsCall} className="ContactUs-icons" />
                            </div>
                            <div className="col-md-8">
                                <p className="box-row-title">Call Anytime</p>
                                <span className="box-row-sub-title">
                                    + 91 23678 27867
                                    + 91 67678 92878</span>
                            </div>
                        </div>
                        <div className="row box-row-icon-text">
                            <div className="col-md-4 row-icon">
                                <img src={ContactUsMessage} className="ContactUs-icons" />
                            </div>
                            <div className="col-md-8">
                                <p className="box-row-title">Send Email</p>
                                <span className="box-row-sub-title">connect@itfirms.com
                                    hello@itfirms.com</span>
                            </div>
                        </div>
                        <div className="row box-row-icon-text">
                            <div className="col-md-4 row-icon">
                                <img src={ContactUsLocation} className="ContactUs-icons" />
                            </div>
                            <div className="col-md-8">
                                <p className="box-row-title">Visit Us</p>
                                <span className="box-row-sub-title">20 Island Park Road,
                                    New Jearsy, New York, USA</span>
                            </div>


                            <div className="row">
                                <div className="col-md-12 ">
                                    <div>
                                        <h3 className="contacus-last-hedding">Follow us</h3>
                                    </div>
                                    <br />
                                    <div>
                                        <img src={contactLinkedin} className="followUs-icon" />
                                        <img src={followusInstagram} className="followUs-icon" />
                                        <img src={followUsFacebook} className="followUs-icon" />
                                        <img src={followUsTwiter} className="followUs-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.4565993667647!2d74.22187720000001!3d17.3194702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc17f03509738b1%3A0x576f02648d3bb018!2sHari%20Om%20Innovations!5e1!3m2!1sen!2sin!4v1735748730545!5m2!1sen!2sin"
                width="600"
                height="500"
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
export default ContactUs
