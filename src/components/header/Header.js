import "./header.css";

import { Link } from 'react-router-dom'

// takes a single prop (title) and creates and returns a header component
function Header(props) {
    return (
        <div className="title">
            <p>
                <Link className="home" to="/"><strong>🏠home</strong></Link>
            </p>
            <h1 className="title-txt">
                { props.title }
            </h1>
        </div>
    );
}

export default Header