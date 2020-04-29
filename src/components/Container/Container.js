import React from 'react';
import './Container.scss';

const Container = ({header, children }) => (
        <div className=''>
        <div className='header'>{header}</div>
        <div className='content'> {children }</div>
        </div>
);

export default Container;
