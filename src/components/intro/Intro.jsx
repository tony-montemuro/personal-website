import "./intro.css"

import Popup from "../Popup/Popup"
import EmailPopup from "../EmailPopup/Popup"
import { useState } from 'react'
import { Link } from 'react-router-dom'

import YT from "../../img/yt.png"
import Twitch from "../../img/twitch.png"
import Discord from "../../img/discord.png"
import Email from "../../img/email.png"
import Bitcoin from "../../img/bitcoin.png"
import Ethereum from "../../img/ethereum.png"
import Paypal from "../../img/paypal.png"
import Me from "../../img/me.png"

const Intro = () => {
    const [btcButtonPopup, setBtcButtonPopup] = useState(false);
    const [ethButtonPopup, setEthButtonPopup] = useState(false);
    const [emailButtonPopup, setEmailButtonPopup] = useState(false);
    const btc = "Bitcoin";
    const eth = "Ethereum";
    const btcWallet = "1P4KZX5BNqHwhzJuaTxrDQ6G9UQ4QVoDmZ";
    const ethWallet = "0x62A3c8DA7371E496E8C276Db2c0E1D7E64497A4a";


    return (
        <div className="i">
            {/* LEFT */}
            <div className="i-left">
                <div className="about">
                    <h2>yo! it's</h2>
                    <h1>TonySMB</h1>
                </div>

                {/* shows user where they can watch me */}
                <div className="watch">
                    <div className="watch-text">
                        <h3>🎮 watch me play games good:</h3>
                    </div>
                    <div className="watch-icons">
                        <div className="yt">
                            <a 
                            href="https://www.youtube.com/channel/UCq90duYoh452H1K9-SDu78g" 
                            target="_blank"
                            rel="noreferrer">
                            <img src={YT} alt="" className="yt-img"/>
                            </a>
                        </div>
                        <div className="twitch">
                            <a 
                            href="https://www.twitch.tv/tony_smb"
                            target="_blank"
                            rel="noreferrer">
                            <img src={Twitch} alt="" className="twitch-img" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* shows user where they can contact me */}
                <div className="contact">
                    <div className="contact-text">
                        <h3>📨 get in touch with me:</h3>
                    </div>
                    <div className="contact-icons">
                        <div className="discord">
                            <a 
                            href="https://discord.gg/qwAY4ns3BH"
                            target="_blank"
                            rel="noreferrer">
                            <img src={Discord} alt="" className="discord-img"/>
                            </a>
                        </div>
                        <div className="email">
                            <button onClick={() => setEmailButtonPopup(true)} className="email-btn">
                                <img src={Email} alt="" className="email-img"/>
                            </button>
                        </div>
                        <EmailPopup trigger={emailButtonPopup} setTrigger={setEmailButtonPopup}></EmailPopup>
                    </div>
                </div>

                {/* show user where they can support me */}
                <div className="support">
                    <div className="support-txt">
                        <h3>🙏🏼 support me if you wish:</h3>
                    </div>
                    <div className="support-icons">
                        <div className="paypal">
                            <a
                            href="https://www.paypal.com/donate/?business=H4PG6V8NLSPC6&no_recurring=0&item_name=If+you+wish%2C+donate+to+me+to+support+me%21&currency_code=USD"
                            target="_blank"
                            rel="noreferrer">
                            <img src={Paypal} alt="" className="paypal-img"/>
                            </a>
                        </div>
                        <button onClick={() => setBtcButtonPopup(true)} className="bitcoin">
                            <img src={Bitcoin} alt="" className="bitcoin-img" />
                        </button>
                        <button onClick={() => setEthButtonPopup(true)} className="eth">
                            <img src={Ethereum} alt="" className="eth-img"/>
                        </button>
                        <Popup trigger={btcButtonPopup} setTrigger={setBtcButtonPopup} wallet={btcWallet} coin={btc}></Popup>
                        <Popup trigger={ethButtonPopup} setTrigger={setEthButtonPopup} wallet={ethWallet} coin={eth}></Popup>
                    </div>
                </div>
            </div>
            <hr></hr>

            {/* MIDDLE */}
            <div className="i-middle">
                <ul className="navbar-list">
                    <li className="middle-title">🔎explore:</li>
                    <li className="navbar-item">
                        <Link className="link" to="/about">about me</Link>
                    </li>
                    {/* <li className="navbar-item">
                        <Link className="link" to="/blog">blog</Link>
                    </li> */}
                    <li className="navbar-item">
                        <Link className="link" to="/achievements">gaming achievements</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="link" to="/projects">projects</Link>
                    </li>
                </ul>
            </div>

            {/* RIGHT */}
            <div className="i-right">
                <div className="right-bg">
                    <img src={Me} alt="" className="me-img"/>
                </div>
            </div>
        </div>
        
    )
}

export default Intro