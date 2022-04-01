import "./intro.css"

import Popup from "../Popup/Popup"
import { useState } from 'react';

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
    const btc = "Bitcoin";
    const eth = "Ethereum";
    const btcWallet = "1P4KZX5BNqHwhzJuaTxrDQ6G9UQ4QVoDmZ";
    const ethWallet = "0xC114836F49D3C7Ac67B83077D31F5031A20c5BB2";


    return (
        <div className="i">
            <div className="i-left">
                <div className="about">
                    <h2>yo! it's</h2>
                    <h1>TonySMB</h1>
                </div>

                {/* shows user where they can watch me */}
                <div className="watch">
                    <div className="watch-text">
                        <h3>watch me play games good:</h3>
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
                        <h3>get in touch with me:</h3>
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
                            <a href="https://www.google.com"
                            target="_blank"
                            rel="noreferrer">
                                <img src={Email} alt="" className="email-img"/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* show user where they can support me */}
                <div className="support">
                    <div className="support-txt">
                        <h3>support me if you wish:</h3>
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
            <div className="i-middle">
                <div className="facts-wrapper">
                    <h2>on this website you can find:</h2>
                    <ul className="facts">
                        <li>my blog</li>
                        <li>facts about myself</li>
                        <li>my best video game achievements</li>
                        <li>future projects</li>
                    </ul>
                </div>
            </div>
            <div className="i-right">
                <img src={Me} alt="" className="me-img"/>
            </div>
        </div>
        
    )
}

export default Intro