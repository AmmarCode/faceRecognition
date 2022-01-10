import React from 'react';
import Tilt from 'react-parallax-tilt';
import face from './face-recognition.png';
import "tachyons";

const Logo = () => {
	return (
		<div className='ma3 mt0'>
    	<Tilt className="Tilt shadow-5" options={{ max : 25 }} style={{ height: 150, width: 150, background:'linear-gradient(to left, #00ffcc 30%, #99ff99)' }} >
		 <div className="Tilt-inner"> <img src={face} style={{paddingLeft: "9px", paddingTop:"11px"}} alt='logo' /> </div>
		</Tilt>
		</div>
	)
}

export default Logo
