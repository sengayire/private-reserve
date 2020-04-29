import React, { useState } from 'react';
import { TextField, MenuItem, Button } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import { Add } from '@material-ui/icons';
import singleProfile from '../../assets/images/single-profile.png';
import multiProfile from '../../assets/images/multi-profile.png';

const currencies = [
  {
    value: 'newProfile',
    label: 'Add new Profile',
  },
  {
    value: 'accountHolder',
    label: 'Account Holder Personal',
  },
  {
    value: 'test',
    label: 'test',
  },
];

const CreateAdForm = () => {
  const [currency, setCurrency] = useState('EUR');
  const [selected, setSelected] = useState(false);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
        <form className='create-ad-form'>
        <div className='select-profile-type'>
        <span>Select profile type</span>
         <div className='profile-type'>
           <div className='profile-type-info'>
             <div className='profile-type-image'>
               <img src={singleProfile}/>
             </div>
             <div className='profile-type-description'>
               <span>Single profile</span>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                 <span>1 personal on the ad</span>
                 <span>Animated photos</span>
                 <span>Further enhanced</span>
                 <span>Verified</span>
                 <span>VIP option</span>
               </div>
             </div>
           </div>
           <div className='profile-type-info'>
             <div className='profile-type-image'>
               <img src={multiProfile}/>
             </div>
             <div className='profile-type-description'>
               <span>Single profile</span>
               <div style={{ display: 'flex', flexDirection: 'column' }}>
                 <span>1 personal on the ad</span>
                 <span>Animated photos</span>
                 <span>Further enhanced</span>
                 <span>Verified</span>
                 <span>VIP option</span>
               </div>
             </div>
           </div>
         </div>
         <div style={{ display: 'flex', justifyContent: 'space-between', }}>
           <div style={{ width: '40%' }}> <TextField
          id="filled-select-currency"
          select
          label="Please select a profile for this ad"
          value={currency}
          onChange={handleChange}
          variant="filled"
          style={{ width: '100%' }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
           <div style={{ width: '40%' }}> <TextField id="standard-basic" label="Profile" style={{ width: '85%' }}/>
            <span><ToggleButton
  value="add"
  selected={selected}
  onChange={() => {
    setSelected(!selected);
  }}
  style={{ backgroundColor: '#efbe00' }}
>
  <Add />
</ToggleButton></span></div>
         </div>
         <div style={{ display: 'flex', justifyContent: 'flex-end' }}> <Button variant="outlined">Next Step</Button></div>
      </div>
      </form>
  );
};

export default CreateAdForm;
