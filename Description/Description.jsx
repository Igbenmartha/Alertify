import React, { useState } from 'react';
import './Description.css';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';


const Description = ({setPopupVisible}) => {
  const [description, setDescription] = useState("");
  const [loading,setLoading] = useState(false)


  const handleChange = (event) => {
    const newValue = event.target.value;

    if (newValue.length <= 250) {
      setDescription(newValue);
    }
  };

  const token = useSelector((state) => state.user.token)
  const requestBody = {
    description: description 
  };

  // const Describe = (e)=>{
  //   e.preventDefault();
  //   setLoading(true)
  //   fetch(`https://alertify-9tr5.onrender.com/api/v1/user/submit-description`, {  
  //     method: "POST",  
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${token}`, 
  //     },
  //     body: JSON.stringify(requestBody)

  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data.message); 
  //     setLoading(false) 
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);  
  //     setLoading(false)
  //   });
  // }

const Describe = (e) => {
  e.preventDefault();

  const requestBody = {
    description: description,
  };
setLoading(true)
  fetch('https://alertify-9tr5.onrender.com/api/v1/user/submit-description', {  
    method: 'POST',  
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(requestBody),
  })
  .then(response => {
    if (!response.ok) {
      return response.json().then(error => {
        throw new Error(error.message || 'Error submitting description');
      });
    }
    return response.json();
  })
  .then(data => {
    Swal.fire({
      title: 'Success!',
      text: data.message,
      icon: 'success',
      confirmButtonText: 'OK'
    });
    setLoading(false)
    setPopupVisible(false)
  })
  

  .catch(error => {
    Swal.fire({
      title: 'Error!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Try Again'
    });
  });
};


  return (
    <div className='description-container'>
      <div className='text-con'>
        {/* <p>Briefly describe the situation you are in under <span className='words'>(30 characters)</span></p> */}
        <p>Briefly describe the situation you are in under <span className='words'>{description.length}/250</span></p>
        <textarea
          type='text'
          placeholder='Description'
          className='description-inp'
          value={description}
          onChange={handleChange}
        />
        {/* <p>Character count: {description.length} / 250</p> */}
        <div className='description-btnDiv'>
          <button className='btn-btn-description' onClick={Describe}>{!loading? "Send" : "Loading"}</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
