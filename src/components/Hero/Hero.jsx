import React from 'react';
import './Hero.scss';
import Title from '../Title/Title';
import leaves from './assets/leaves.png';
import vegetables from './assets/vegetables.png';
import starIcon from './assets/starIcon.png';
import harvestIcon from './assets/harvestIcon.png';

const informDatas = [
  {iconClass: <i className="bi bi-person-fill"></i>, statis: '30K', statisName: 'User Order'},
  {iconClass: <img src={starIcon} alt="Star Icon" />, statis: '20K', statisName: 'Reviews(4.8)'},
  {iconClass: <img src={harvestIcon} alt="Harvest Icon" />, statis: '300', statisName: 'Items'},
];

export default function Hero() {
  return (
    <div className='heroContainer'>
        <img src={leaves} className='leavesImg' />

        <div className='titleBox'>
          <Title title={'Organic Fruit & Vegetables'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley..."}/>
        </div>

        <div className='orderBtnBox'>
          <p className='orderText'>Order Now</p>
          <button className='primaryArrowBtn'><i class="bi bi-arrow-right"></i></button>
        </div>

        <div className='vegetablesInformBox'>
          <img src={vegetables} className='vegetablesImg' />

          <div className='informBox'>
            {informDatas.map((item, index) => (
              <div className='informChildBox' key={index}>
                <div className='iconBox'>
                  {item.iconClass}
                </div>
                
                <div className='statisBox'>
                  <p className='statis'>{item.statis}</p>
                  <p className='statisName'>{item.statisName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
