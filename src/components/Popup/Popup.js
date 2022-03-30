import React from 'react'
import "./popup.css"

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
          <button className="close" onClick={() => props.setTrigger(false)}>close</button>
          <p>{props.wallet}</p>
        </div>
    </div>
  ) : "";
}

export default Popup