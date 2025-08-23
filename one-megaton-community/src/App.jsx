import React, { useState } from 'react';
import footerImage from './assets/footer_image.png';
import RegistrationForm from './RegistrationForm';
import './App.css'

function App() {

  return (
    
    <>
    
     <div className="hero-section">
        <div className="hero-content">

          <h1>The One Megaton Community</h1>
            <div className="community-vision">
              <p> 
                  Reducing carbon emissions through individual
                  and collective action.
              </p>
              <p>
                  Launching soon in Chicago and Illinois!
              </p>
            </div>

            <div className="call-to-action">   
              <p>
                  Join a community of change-makers committed to
                  reduce carbon emmissions and building a sustainable future.
              </p>
              <p>
                  Our community provides the tools, resources and
                  connections you need to amplify your environmental impact.
              </p>
            </div>

        </div>

        <RegistrationForm />
      </div>


      <footer>
        <img src={footerImage} alt="Chicago cityscape" />
      </footer>


    </>
  )
}

export default App
