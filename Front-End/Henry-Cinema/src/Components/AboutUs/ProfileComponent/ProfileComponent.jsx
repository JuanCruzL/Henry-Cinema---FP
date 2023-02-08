import React from "react";
import imageGit from '../../../img/git.png'
import imageLinkedin from '../../../img/linkedin.png'
import './ProfileComponent.css'

function ProfileComponent({name,gitName,gitLink,gitImage,linkedin}) {
    const handleClickGithub = () => {
        window.open(gitLink,"_blank");
    }
    const handleClickLinkedin = () => {
        window.open(linkedin,"_blank");
    }

  return (
    <div className="container-profile">
      <img className="image-profile" src={gitImage}/>
      <div className="text-profile">
        <h1 className="name-profile">{name}</h1>
      </div>
      <div className="buttons-profile">
        <img onClick={handleClickGithub} className="git-link" src={imageGit}/>
        <img onClick = {handleClickLinkedin} className="linkedin-link" src={imageLinkedin}/>
      </div>
    </div>
  );
}

export default ProfileComponent;
