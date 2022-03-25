import "./intro.css"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="about">
                    <h2>yo! it's</h2>
                    <h1>TonySMB</h1>
                </div>
            </div>
            <div className="i-middle">
                <div className="facts-wrapper">
                    <h2>on this website you can find:</h2>
                    <ul className="facts">
                        <li>my blog</li>
                        <li>facts about myself</li>
                        <li>my best video game achievements</li>
                        <li>where to contact me</li>
                        <li>where to support me</li>
                    </ul>
                </div>
            </div>
            <div className="i-right">
                <img src="../../img/me.png" alt=""/>
            </div>
        </div>
    )
}

export default Intro