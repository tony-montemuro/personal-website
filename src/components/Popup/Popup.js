import React from 'react'
import "./popup.css"
import XButton from "../../img/x.png"

// takes four props (trigger, setTrigger, coin, wallet), and uses this information to
// show a popup with one of my crypto wallets, which can be used to pay me in crypto
function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
          <button className="close" onClick={() => props.setTrigger(false)}>
            <img src={XButton} alt="" className="x-img"/>
          </button>
          <h2>{props.coin} wallet:</h2>
          <p>{props.wallet}</p>
        </div>
    </div>
  ) : "";
}

export default Popup