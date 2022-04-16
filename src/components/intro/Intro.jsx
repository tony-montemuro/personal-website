import "./intro.css"

import Popup from "../Popup/Popup"
import EmailPopup from "../EmailPopup/Popup"
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

            {/* MIDDLE */}
            <div className="i-middle">
                <div className="mid-body-wrapper">
                    <h2 className="mid-title">quick facts about myself:</h2>
                    <ul className="mid-points">
                        <li>i am a 21 years old male</li>
                        <li>
                            i am currently a computer science major,<br/>
                            as well as a mathematics minor<br/>
                        </li>
                        <li>my favorite artist is porter robinson</li>
                        <li>my favorite game is mario kart wii</li>
                        <li>
                            my favorite overwatch league team is the<br/> 
                            philadelphia fusion #FusionFighting<br/>
                        </li>
                    </ul>
                </div>
                <div className="mid-body-wrapper">
                    <h2 className="mid-title">top 5 video game achievements:</h2>
                    <ol className="mid-points">
                        <li>
                            mario kart wii: gcn waluigi stadium (glitch)<br/>
                            1:45.860 (previous WR)
                            <a className="vid-link"
                            target="_blank"
                            href="https://youtu.be/3Pfn1HvmVBw"
                            rel="noreferrer"> 📹</a><br/>

                        </li>
                        <li>
                            super monkey ball 2: punched seesaws 33,330<br/>
                            (current WR)
                            <a className="vid-link"
                            target="_blank"
                            href="https://youtu.be/ZeC-Jn6Ky5s?t=408"
                            rel="noreferrer"> 📹</a>
                        </li>
                        <li>
                            super monkey ball 1: e40 5,000 (tied WR)
                            <a className="vid-link"
                            target="_blank"
                            href="https://youtu.be/t_DHMziQwI0"
                            rel="noreferrer"> 📹</a>
                        </li>
                        <li>overwatch: 3602 sr on support (masters rank)</li>
                        <li>
                            super monkey ball 2: air hockey 15,550
                            <a className="vid-link"
                            target="_blank"
                            href="https://youtu.be/wAnuhpsxcOk?t=391"
                            rel="noreferrer"> 📹</a>
                        </li>
                    </ol>
                </div>
                <div className="mid-body-wrapper">
                    <h2 className="mid-title">future project ideas:</h2>
                    <ul className="mid-points">
                        <li>super monkey ball il website</li>
                        <li>super monkey ball il discord bot</li>
                        <li>expanding this website</li>
                    </ul>
                    <p className="pls-contact">
                        (please feel free to contact me if you wish to<br/>
                        help with these!)
                    </p>
                </div>
            </div>


            <div className="i-right">
                <div className="right-bg">
                    <img src={Me} alt="" className="me-img"/>
                </div>
            </div>
        </div>
        
    )
}

export default Intro