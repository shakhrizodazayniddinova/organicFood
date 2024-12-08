import React from 'react';
import './Footer.scss';
import logo from './assets/logo.png';

const footerNavData = [
    {
        title: 'Navigation',
        links: ['About Us', 'Service', 'Menu'],
    },
    {
        title: 'Resources',
        links: ['Reviews', 'Blog', 'Update News'],
    },
    {
        title: 'Contact Us',
        links: ['Email: oyasim@email.com'],
        icons: [<i class="bi bi-facebook"></i>, <i class="bi bi-twitter"></i>, <i class="bi bi-instagram"></i>],
    },
]

export default function Footer() {
  return (
    <div className='footerContainer'>
        <div className="logoAboutBox">
            <img src={logo} alt="logo" className='logoImg'/>
            <p className='aboutText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...</p>
        </div>

        <div className='navBox'>
            {footerNavData.map((section, index) => (
                <div className="footerSection" key={index}>
                    <p className="footerTitle">{section.title}</p>

                    <ul className="footerLinks">
                        {section.links.map((link, i) => (
                            <li key={i}>
                                {link}
                            </li>
                        ))}
                        
                        {section.icons && (
                            <div className="footerIcons">
                                {section.icons.map((icon, i) => (
                                    <span key={i} className="icon">{icon}</span>
                                ))}
                            </div>
                        )}
                    </ul>

                </div>
            ))}
        </div>
    </div>
  )
}
