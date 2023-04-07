import React from 'react';
import freeclass from '../images/Free Live class.gif';
import '../Css/Registration.css';

function Registration() {
  return (
    <div>
      <div className="register">
        <img src={freeclass} />
      </div>

      <div className='register-form'>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfrXWpioMvcbBgGrkoOZSxWlAw3q7nzzUoe_3Pe-b-UIQVLqQ/viewform?embedded=true"
          width="1340"
          height="504"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Registration;
