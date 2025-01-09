import theGrassland from "../images/theGrassland.png"
import ParadiseFound from "../images/ParadiseFound.png"
import smokeonthewater from "../images/smokeonthewater.png"
import lineoftress2 from "../images/lineoftress2.png"

const FirstPage = () => {
    return (
        // <div className="Container">
        < div className="First-Main-Container">
            <div className="col-md-4">
                <div className="row ">
                    <div className="col-md-3 ">
                        <img src={theGrassland} />
                    </div>
                    <div className="col-md-8">
                        <h1>The Grasslands</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing.
                            Nam quis justo in augue auctor imperdiet.</span>
                        < div className="row ">
                            <div className="col-md-3 ">
                                <img src={ParadiseFound} />
                            </div>
                            <div className="col-md-8">
                                <h1>Paradise Found</h1>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent euismod ultrices ante,
                                    ac laoreet nulla vestibulum adipiscing. Nam quis justo
                                    in augue auctor imperdiet.</span>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-md-3">
                                <img src={smokeonthewater} />
                            </div>
                            <div className="col-md-8">
                                <h1>Smoke On The Water</h1>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Praesent euismod ultrices ante,
                                    ac laoreet nulla vestibulum adipiscing. Nam quis justo
                                    in augue auctor imperdiet.</span>
                                <div className="row" >
                                    <div className="col-md-3">
                                        <img src={lineoftress2} />
                                    </div>
                                    <div className="col-md-8">
                                        <h1>Smoke On The Water</h1>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Praesent euismod ultrices ante,
                                            ac laoreet nulla vestibulum adipiscing. Nam quis justo
                                            in augue auctor imperdiet.</span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage
