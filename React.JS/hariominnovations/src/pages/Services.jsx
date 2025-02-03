import MainNavBar from "../commponents/MainNavBar"
import ServicesImage from "../Images/ServicesImage.png"
import logo from "../Images/footer.png"
import Location from "../Images/Location-icon.png"
import message from "../Images/Message-icon.png"
import call from "../Images/Call-icon.png"
import facebook from "../Images/facebook-icon.png"
import twiter from "../Images/twiter-icon.png"
import instagram from "../Images/instagram-icon.png"
import ServicesWD from "../Images/ServicesWD.png"
import ServicesWD2 from "../Images/ServicesWD2.png"
import ServicesWD3 from "../Images/ServicesWD3.png"
import ContactUsDash from "../Images/ContactUsDash.png"
import ServicesWDCheckMark from "../Images/ServicesWDCheckMark.png"
import AppDevArrow from "../Images/AppDevArrow.png"
import AppDevComputer from "../Images/AppDevComputer.png"
import AppDevInternet from "../Images/AppDevInternet.png"
import AppDevStar from "../Images/AppDevStar.png"
const Services = () => {
    return (
        <div>
            <div className="Container">
                <MainNavBar />


            </div>

            <div className="Services-img-2">
                <img src={ServicesImage} className="services-hero-img" />
                <div className="services-hero-img-text">
                    <h2 className="Main-Contain">
                        <b>Services</b>
                    </h2>
                </div>
            </div>

            <div className="Main-WD-Container">
                <div className="row box-row-icon-text">
                    <div className="col-md-8">
                        <div>
                            <img src={ContactUsDash} /> <span className="span-class">About Service</span>
                        </div>
                        <div className="WD-row-text-para">
                            <h1 className="Wd-Heading">Websites  Development</h1>
                            <p className="WD-para">No one loves, seeks, or desires pain simply for the sake of pain. However, there are times when effort and pain can lead to significant pleasure.</p>
                            <p className="WD-para">Lorem ipsum dolor sit amet consectetur. Erat dolor volutpat tincidunt odio donec fermentum donec. Massa justo amet venenatis duis ornare ut leo ut vitae.</p>
                            <p className="WD-para">Lorem ipsum dolor sit amet consectetur. Mollis ut mattis venenatis suspendisse ipsum turpis at nam fringilla. Eu et aenean tortor imperdiet. At amet platea donec sit blandit purus vitae dignissim. Adipiscing nunc ac nibh nullam ut viverra lorem blandit amet.</p>
                            <p className="WD-para">Lorem ipsum dolor sit amet consectetur. Mollis ut mattis venenatis suspendisse ipsum turpis at nam fringilla. Eu et aenean tortor imperdiet. At amet platea donec sit blandit purus vitae dignissim. Adipiscing nunc ac nibh nullam ut viverra lorem blandit amet.</p>
                        </div>
                    </div>
                    <div className="col-md-4 row-icon">
                        <img src={ServicesWD} className="Services-WD-images" />
                    </div>
                </div>

                <div className="row box-row-icon-text">
                    <div className="col-md-8 row-icon">
                        <img src={ServicesWD2} className="Services-WD-images-second" />
                    </div>
                    <div className="col-md-4 ">
                        <div className="WD-row-text-para-two">
                            <p className="WD-para">No one loves, seeks, or desires pain simply for the sake of pain. However, there are times when effort and pain can lead to significant pleasure.</p>
                            <p className="WD-para">No one loves, seeks, or desires pain simply for the sake of pain. However, there are times when effort and pain can lead to significant pleasure.</p>
                            <p className="WD-para">Lorem ipsum dolor sit amet consectetur. Mollis ut mattis venenatis suspendisse ipsum turpis at nam fringilla. Eu et aenean tortor imperdiet. At amet platea donec sit blandit purus vitae dignissim. Adipiscing nunc ac nibh nullam ut viverra lorem blandit amet.</p>
                            <p className="WD-para">Lorem ipsum dolor sit amet consectetur. Mollis ut mattis venenatis suspendisse ipsum turpis at nam fringilla. Eu et aenean tortor imperdiet. At amet platea donec sit blandit purus vitae dignissim. Adipiscing nunc ac nibh nullam ut viverra lorem blandit amet.</p>
                            <img src={ServicesWDCheckMark} className="Check-mark" /> <span className="span-check-text">Assess your position relative to your competitors</span><br />
                            <img src={ServicesWDCheckMark} className="Check-mark" /> <span className="span-check-text">Gather insights to determine what works.</span><br />
                            <img src={ServicesWDCheckMark} className="Check-mark" /> <span className="span-check-text">Make changes based on data-driven insights.</span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="WD-bg-color">
                <div className="WD-last-Para-img">
                    <div className="row ">
                        <div className="col-md-8">
                            <div className="">



                                <div className="main-div-img-text">
                                    <div className="img-div">
                                        <img src={AppDevArrow} className="app-dev-icons" />
                                    </div>
                                    <div className="text-div">
                                        <h4 className="app-dev-hedding">
                                            Application Development
                                        </h4>
                                        <p className="WD-para">
                                            No one loves, seeks, or desires pain simply for the
                                            sake of pain. However, there are times when effort and
                                            pain can lead to significant pleasure.
                                        </p>
                                    </div>
                                </div>
                                <div className="main-div-img-text">
                                    <div className="img-div">
                                        <img src={AppDevComputer} className="app-dev-icons" />
                                    </div>
                                    <div className="text-div">
                                        <h4 className="app-dev-hedding">
                                            Application Development
                                        </h4>
                                        <p className="WD-para">
                                            Lorem ipsum dolor sit amet consectetur. Mollis ut mattis venenatis suspendisse ipsum turpis at nam fringilla. Eu et aenean tortor imperdiet.
                                        </p>
                                    </div>
                                </div>
                                <div className="main-div-img-text">
                                    <div className="img-div">
                                        <img src={AppDevInternet} className="app-dev-icons" />
                                    </div>


                                    <div className="text-div">
                                        <h4 className="app-dev-hedding">
                                            Application Development
                                        </h4>
                                        <p className="WD-para">
                                            Lorem ipsum dolor sit amet consectetur. Mollis ut mattis venenatis suspendisse ipsum turpis at nam fringilla. Eu et aenean tortor imperdiet.
                                        </p>
                                    </div>
                                </div>
                                <div className="main-div-img-text">
                                    <div className="img-div">
                                        <img src={AppDevStar} className="app-dev-icons" />
                                    </div>


                                    <div className="text-div">
                                        <h4 className="app-dev-hedding">
                                            Application Development
                                        </h4>
                                        <p className="WD-para">
                                            Lorem ipsum dolor sit amet consectetur. Mollis ut mattis venenatis suspendisse ipsum turpis at nam fringilla. Eu et aenean tortor imperdiet.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 row-icon">
                            <img src={ServicesWD3} className="Services-WD-images-last" />
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div>
                    <h1 className="web-design-hedding">Our Web Design & Development Process</h1>
                    <h6 className="web-design-span">Crafting Exceptional Digital Experience: A Seamless Journey from Concept to Completion</h6>
                </div>

                <div className="Main-Container">
                    <div className="row web-design-container">
                        <div className="col-md-6 ">
                            <div className="web-design-box">
                                <h3 className="web-design-hedding-box">1.Information Gathering </h3>
                                <div className="web-design-box-text">
                                    <p >Lorem ipsum dolor sit amet consectetur. Mollis ut mattis venenatis suspendisse ipsum turpis at nam fringilla. Eu et aenean tortor imperdiet.sanket</p>
                                    <p >Lorem ipsum dolor sit amet consectetur. Mollis ut mattis venenatis suspendisse ipsum turpis at nam fringilla. Eu et aenean tortor imperdiet.sanket</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="web-design-box">
                                <h3 className="web-design-hedding-box">2.Design</h3>
                                <div className="web-design-box-text">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ipsum tempor venenatis convallis tincidunt arcu tellus. Sagittis nunc risus habitasse velit ullamcorper montes adipiscing phasellus. Adipiscing eget platea at risus in tempus. Erat id sit gravida posuere a proin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row web-design-container">
                        <div className="col-md-6 ">
                            <div className="web-design-box">
                                <h3 className="web-design-hedding-box">3.Content Writing</h3>
                                <div className="web-design-box-text">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ipsum tempor venenatis convallis tincidunt arcu tellus. Sagittis nunc risus habitasse velit ullamcorper montes adipiscing phasellus. Adipiscing eget platea at risus in tempus. Erat id sit gravida posuere a proin.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="web-design-box">
                                <h3 className="web-design-hedding-box">4.Coding</h3>
                                <div className="web-design-box-text">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ipsum tempor venenatis convallis tincidunt arcu tellus. Sagittis nunc risus habitasse velit ullamcorper montes adipiscing phasellus. Adipiscing eget platea at risus in tempus. Erat id sit gravida posuere a proin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row web-design-container">
                        <div className="col-md-6 ">
                            <div className="web-design-box">
                                <h3 className="web-design-hedding-box">5.Maintenance</h3>
                                <div className="web-design-box-text">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ipsum tempor venenatis convallis tincidunt arcu tellus. Sagittis nunc risus habitasse velit ullamcorper montes adipiscing phasellus. Adipiscing eget platea at risus in tempus. Erat id sit gravida posuere a proin.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="web-design-box">
                                <h3 className="web-design-hedding-box">6.Custom Software Development </h3>
                                <div className="web-design-box-text">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ipsum tempor venenatis convallis tincidunt arcu tellus. Sagittis nunc risus habitasse velit ullamcorper montes adipiscing phasellus. Adipiscing eget platea at risus in tempus. Erat id sit gravida posuere a proin.</p>
                                </div>
                            </div>
                        </div>
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
export default Services