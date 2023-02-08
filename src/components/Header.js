import React  from "react";

function Header ({onDarkModeClick, colorMode}) {
    return (
        <header>
           <h2>Shopstar</h2>
            <button onClick={onDarkModeClick}>{colorMode ? "Light" : "Dark"} Mode</button>
        </header>
    );
}

export default Header;