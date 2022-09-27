import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear; 
    return <footer>
        <p>Copy Right © {currentYear}</p>
    </footer>
}

export default Footer;