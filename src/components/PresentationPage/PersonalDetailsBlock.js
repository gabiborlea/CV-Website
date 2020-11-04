import {PresentationItems} from './PresentationItems'
import React from "react";
import './PersonalDetailsBlock.css';
function PersonalDetailsBlock(){
    return (

        <div className="personal-details-block">
            <img  className="personal-photo" src={ PresentationItems.personal_photo_source } alt="Avatar" />
            <div>
                <h1>Mihai-Gabriel Borlea</h1>
                <h2>Computer Science Student</h2>
            </div>
        </div>
    );
}

export default PersonalDetailsBlock;