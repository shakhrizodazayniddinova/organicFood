import React from 'react';
import './AboutUs.scss';
import vector from './assets/vector.png';
import Title from '../Title/Title';
import deliverymanIcon from './assets/deliverymanIcon.png';
import shoppingIcon from './assets/shoppingIcon.png';
import clockIcon from './assets/clockIcon.png';
import men from './assets/men.png';

const serviceData = [
  {icon: deliverymanIcon, name: 'Fasted delivery Service'},
  {icon: shoppingIcon, name: 'Online order Service'},
  {icon: clockIcon, name: '24/8 Service'},
]

export default function AboutUs() {
  return (
    <div className='aboutUsContainer'>
      <img src={vector} className='vectorImg' />

      <div className='titlesBox'>
        <Title title={'Why We Aer The Best?'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley..."}/>

        <div className="serviceContainer">
          {serviceData.map((item, index) => (
            <div className="serviceBox" key={index}>
              <div className='serviceChildBox'>
                <div className="iconBox">
                  <img src={item.icon}/>
                </div>

                <div className="aboutTextBox">
                  <p className="serviceName">{item.name}</p>
                  <p className="serviceAbout">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          ))}

          <i className="bi bi-arrow-down errowDownIcon"></i>
        </div>
      </div>

      <img src={men} className='menImg'/>

    </div>
  )
}
