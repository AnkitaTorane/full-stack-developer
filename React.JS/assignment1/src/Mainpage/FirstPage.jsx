import janjiraFort from "../images/janjiraFort.png"
import raigadfort from "../images/raigadfort.png"
import panhalaf from "../images/panhalaf.png"
import shivneriFort from "../images/shivneriFort.png"
import PointerCursorNew from "../images/PointerCursorNew.png"

const FirstPage = () => {
    return (
        <div className="Container First-Main-Container">
            <div className="row  ">
                <div className="row-image-text">
                    <div className="col-md-4 ">
                        <img src={janjiraFort} className="FirstPages-img" />
                    </div>
                    <div className="col-md-8">
                        <h1 className="Main-Hedding">Janjira Fort</h1>
                        <span className="fort-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                            Nam quis justo in augue auctor imperdiet.</span>
                    </div>
                </div>
            </div>
            <div className="row row-pointer-edit">
                <div className="row-image-text">
                    <div className="col-md-4  ">
                        <img src={raigadfort} className="FirstPages-img" />
                    </div>
                    <div className="col-md-8 ">
                        <h1 className="Main-Hedding">Raigad Fort</h1>
                        <span className="fort-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                            Nam quis justo in augue auctor
                            <img src={PointerCursorNew} className="pointer-cursor" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="row-image-text">
                    <div className="col-md-4 ">
                        <img src={panhalaf} className="FirstPages-img" />
                    </div>
                    <div className="col-md-8">
                        <h1 className="Main-Hedding">Panhala Fort</h1>
                        <span className="fort-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                            Nam quis justo in augue auctor imperdiet.</span>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="row-image-text">
                    <div className="col-md-4 ">
                        <img src={shivneriFort} className="FirstPages-img" />
                    </div>
                    <div className="col-md-8">
                        <h1 className="Main-Hedding">Shivneri Fort</h1>
                        <span className="fort-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                            Nam quis justo in augue auctor imperdiet.</span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default FirstPage
