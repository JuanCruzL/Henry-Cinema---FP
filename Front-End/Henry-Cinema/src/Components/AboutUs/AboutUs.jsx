import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../footer/footer";
import {textDescriptionApp} from "./Description/textDescription"
import logoHenry from "../../img/logoHenry.jpg"
import profilesTeam from './ProfilesData/members'
import ProfileComponent from './ProfileComponent/ProfileComponent'
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="container-all-about">
      <Nav></Nav>
      <div className="container-border">
      <div className="container-text-app">
        <img src = {logoHenry} alt={'Logo Henry'} className="logo-henry"/>
        <div>
          <h3>
           {textDescriptionApp}
          </h3>
        </div>
      </div>
      </div>
      
      <div className="title-team">
        <h1>Our team</h1>
      </div>
      <div className="container-about-us">
        {profilesTeam.map(p => (
          <ProfileComponent
            name = {p.name}
            gitName = {p.gitName}
            gitLink = {p.gitLink}
            gitImage = {p.gitImage}
            linkedin = {p.linkedin}
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AboutUs;
