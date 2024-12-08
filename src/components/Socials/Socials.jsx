import React from 'react';
import './Socials.scss';
import Title from '../Title/Title';
import phone from './assets/phone.png';
import appstore from './assets/appstore.png';
import googleplay from './assets/googleplay.png';

export default function Socials() {
  return (
    <div className='socialsContainer'>
        <div className="socialImgBox">
            <img src={phone} className="phoneImg" />
        </div>
        
        <div className="titlesContainer">
            <div className='downBtnTitleBox'>
                <button className='downloadBtn'>Download App</button>

                <Title title={'Simple Way To Order Your Organic Fruit '} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer..."}/>
            </div>

            <div className='socialBox'>
                <img src={appstore} className="socialImg" alt="App Store" />
                <img src={googleplay} className="socialImg" alt="Google Play" />
            </div>
        </div>
    </div>
  )
}
