import React from 'react';
import './Saying.scss';
import Title from '../Title/Title';
import stars from './assets/stars.png';
import men from './assets/men.png';
import users from './assets/users.png';

export default function Saying() {
  return (
    <div className='sayingContainer'>
        <div className="titlesContainer">
            <Title title={'What Our Customers About Us saying'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis"}/>

            <div>
                <p className='sayerName'>Ahmed Hridoy</p>
            </div>

            <div className='starArrowBox'>
                <img src={stars} alt="" />

                <div className='arrowsBtnsBox'>
                    <button className='leftArrowBtn'><i class="bi bi-arrow-left-short"></i></button>
                    <button className='primaryArrowBtn'><i class="bi bi-arrow-right-short"></i></button>
                </div>
            </div>
        </div>

        <div className="menUsersContainer">
            <img src={men} className="menImg" />

            <div className='usersImgBox'>
                <img src={stars} className="starImg" />
                <img src={users} className="usersImg" />
            </div>
        </div>
    </div>
  )
}