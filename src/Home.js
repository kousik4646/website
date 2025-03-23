import React from 'react';
import './Home.css'; // Make sure to create this CSS file for styling
import logo from './/images/logo.gif';
import img from './images/new-braDDDDDnches-09172014-1533793555.jpg';
import { Link } from 'react-router-dom';



function Home() {
    return (
        <div className='header'>
            <div className="log">
            <img src={logo} className='img1'/>
            <img src={img}/>
            
            </div>
            <div className='cont1'>
                <div className='sub-div1'>
                    <h3 className='skk'>Call: Soumya@1 8977w2e242</h3>
                </div>
                <div className='buttons'>
                <Link to='/Login'><button>Login</button></Link>
                <button>Register</button>
                <button>Subscribe</button>
                </div>
                <div className='sub'>
                    
                    <button >Click Here</button>                    
                </div>
            </div>
            

           
        </div>
    );
}

export default Home;