import React from 'react';
import './Special.scss';
import Title from '../Title/Title';
import vegetablesImg from './assets/vegetables.jpg';
import leaves from './assets/leaves.png';

export default function Special() {
  return (
    <div className='specialContainer'>
        <div>
            <img src={vegetablesImg} className='vegetablesImg' />
        </div>

        <div className="titlesContainer">
            <Title title={'Explor Our Special Items'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer..."}/>
            
            <div className="exploreBtnContainer">
                <div className="exploreBtnBox">
                    <p className="exploreText">Explor Now</p>
                    <button className='primaryArrowBtn'><i class="bi bi-arrow-right"></i></button>
                </div>

                <img src={leaves} className="leavesImg" />
            </div>
        </div>
    </div>
  )
}
