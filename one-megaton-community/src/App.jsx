import React, { useState } from 'react';

import footerImage from './assets/footer_image.png';
import RegistrationForm from './RegistrationForm';

import black_woman from './assets/black_woman.png';
import man2 from './assets/man2.png';
import './App.css'

function App() {

  return (
    
    <>
    <div className='page-wrapper'>
     <div className="hero-section">
        <div className='main-heading'>
          The One Megaton Community
        </div>
        <div className='article'>
          Reducing carbon emissions through individual
          and collective action.
          Join a community of change-makers committed to
          reduce carbon emmissions and building a sustainable future.
          Our community provides the tools, resources and
          connections you need to amplify your environmental impact.
        </div>
     
        <div className='registration-form'>
          <RegistrationForm />
        </div>

      </div>

      <footer>
        <div className='footer-bg'>
          <img src={footerImage} alt="Chicago cityscape"/>
        </div>
        <div className='community-image' >
          <img src={man2} alt="A white man with beard and glasses" />
          <img src={black_woman} alt="A black woman raising her hand"/>
        </div>
      </footer>

    </div>
    </>
  )
}

export default App
