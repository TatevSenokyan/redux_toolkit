import React from 'react';


const Footer = () => {
    return(
      <div className = 'footer'>
        <hr></hr>
        <div className = 'total'>
            <div className = 'footer-total'>Total</div>
            <div>0</div>
        </div>
        <button>Clear basket</button>
      </div>
    );
}

export default Footer;