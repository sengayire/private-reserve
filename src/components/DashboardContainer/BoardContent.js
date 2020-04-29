import React from 'react';
import CreateAd from '../CreateAd';

const BoardContent = ({ activeItem }) => (
                <div className='board-content'>
                <div className='board-content-header'>Create New Ad</div>
                <div className='board-content-item'>
                {activeItem === 'create ads' && <CreateAd />}
                {activeItem === 'premier services' && <div>shipment here</div> }
                {activeItem === 'pricing' && <div>awaiting delivery</div> }
                {activeItem === 'watchlist' && <div>awaiting payment</div> }
                {activeItem === 'create via Bitcoins' && <div>awaiting delivery</div> }
                {activeItem === 'link exchange' && <div>awaiting delivery</div> }
                {activeItem === 'manage my card' && <div>awaiting delivery</div> }
                {activeItem === 'upload document' && <div>awaiting delivery</div> }
                {activeItem === 'account & setting' && <div>awaiting delivery</div> }
                {activeItem === 'contact & support' && <div>awaiting delivery</div> }
                {activeItem === 'logout' && <div>awaiting delivery</div> }
                </div>
                </div>
);

export default BoardContent;
