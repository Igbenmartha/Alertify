import React, { useState } from 'react';
import './Description.css';

const Description = () => {
  const [description, setDescription] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;

    if (newValue.length <= 30) {
      setDescription(newValue);
    }
  };

  return (
    <div className='description-container'>
      <div className='text-con'>
        <p>Briefly describe the situation you are in under <span className='words'>(30 characters)</span></p>
        <input
          type='text'
          placeholder='Description'
          className='description-inp'
          value={description}
          onChange={handleChange}
        />
        {/* <p>Character count: {description.length} / 30</p> */}
        <div>
          <button className='btn-btn-description'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
