import React from 'react'
import './Header.css'
import './App.css'
import './index.css'

function Header(props) {

    return (<header className="header">
        <h2>{props.name}</h2>
    </header>);
}

export default Header;