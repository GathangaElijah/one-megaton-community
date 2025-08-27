import React from "react";
import blackWoman from './assets/black-woman.png';
import man2 from './assets/man2.png';

import './CommunityImages.css';

function CommunityImages(){
    return (
        <>
        
    
         <div className="container">
            <div className="image-box">
                <img src={man2} alt="A white man with beard and glasses" />
            </div>
            <div className="image-box">
                <img src={blackWoman} alt="A black woman raising her hand" />
            </div>
         </div>

        </>
    )

}
export default CommunityImages;