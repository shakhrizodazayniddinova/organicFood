import React, { useEffect, useState } from 'react';
import "./Header.scss";
import logo from './assets/logo.png';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);

    return() => {
        window.removeEventListener('scroll', handleScroll);
    }
  });

  const headerClass = scrollPosition > 50 ? 'headerPosition' : '';

  return (
    <div className={`headerContainer ${headerClass}`}>
        <div className="navBox">
            <nav>
                <ul>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>

        <span>
            <img src={logo} alt="logo" className='logoImg'/>
        </span>

        <div className="headerBtns">
            <button className='circleBtn'><i className="bi bi-search"></i></button>
            <button className='circleBtn'><i class="bi bi-cart2"></i></button>
            <button className='regBtn'>Regestar Now</button>
        </div>
    </div>
  )
}
