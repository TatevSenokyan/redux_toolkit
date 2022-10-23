import React from 'react';


const Footer = () => {
    return(
      <div className = 'footer'>
        <hr></hr>
        <div className = 'total'>
            <div>Total</div>
            <div>0</div>
        </div>
        <button>Clear basket</button>
      </div>
    );
}

export default Footer;