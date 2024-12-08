import React from 'react';
import './Title.scss';

export default function Title({title, description}) {
  return (
    <div className='titleContainer'>
        <h1 className='title'>{title}</h1>
        <p className='description'>{description}</p>
    </div>
  )
}
