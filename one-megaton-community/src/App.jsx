import React, { useState } from 'react';
import footerImage from './assets/footer_image.png';
import RegistrationForm from './RegistrationForm';
import './App.css'

function App() {

  return (
    
    <>
     <div className="hero-section">
          <article>
          <div className='main-heading'>
            The One Megaton Community
          </div>
          <p>
            Reducing carbon emissions through individual
            and collective action.
            Join a community of change-makers committed to
            reduce carbon emmissions and building a sustainable future.
            Our community provides the tools, resources and
            connections you need to amplify your environmental impact.
          </p>
            
          </article>
          <RegistrationForm />
      </div>

      <footer>
        <img src={footerImage} alt="Chicago cityscape" />
      </footer>
    </>
  )
}

export default App
