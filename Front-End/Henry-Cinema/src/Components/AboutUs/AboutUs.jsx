import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../footer/footer";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import { textDescriptionApp } from "./Description/textDescription";
import logoHenry from "../../img/logoHenry.jpg";
import profilesTeam from "./ProfilesData/members";
import ProfileComponent from "./ProfileComponent/ProfileComponent";
import "./AboutUs.css";

function AboutUs() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [setTimeout]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="container-all-about">
      <Nav></Nav>
      <div className="About-container">
        <div className="container-text-app">
          <img src={logoHenry} alt={"Logo Henry"} className="logo-henry" />
          <div className="About-text">
            <h3>
              <p className="parrafo">
                Henry Cinema is a web application for purchasing cinema tickets
                that offers users a convenient and hassle-free experience. With
                a wide selection of movies and available showtimes, users can
                choose their favorite screenings and purchase their tickets
                quickly and easily. Additionally, they can also purchase
                complementary products such as popcorn, drinks, and various food
                items. Furthermore, movies currently showing can be rated,
                scored and commented on, allowing customers to fully enjoy their
                experience. Security and comfort are priorities for Henry
                Cinema, which is why the secure payment platform Mercado Pago is
                used to ensure that all transactions are carried out safely and
                smoothly. The booking and purchasing system is highly efficient,
                and the intuitive user interface makes navigation and schedule
                selection easy. In addition, Henry Cinema has an administrative
                panel where only administrator users can access to view
                statistics, graphics and metrics that show the app's movements
                and sales flow. They can also create new movies, functions,
                products, review and manage comments or simply delete them. In
                summary, this is a web application that provides users with a
                complete shopping experience. It is the perfect option for those
                seeking a personalized and immersive experience. This
                application was developed by Sebastian Novales, Emanuel Garcia,
                Deiby Orrego, Alfonso Pinto, Juan Cruz Laumann, Maria Paula
                Acosta and Samuel Salas, as part of a final project for the
                full-stack web developer course taught by Henry, where we had to
                put into practice everything we learned. The project was
                completed during February 2023 and has no commercial purposes.
              </p>
            </h3>
          </div>
        </div>
        <div className="title-team">
          <h1>Our team</h1>
          <p></p>
          <p></p>
        </div>
        <div className="container-about-us">
          {profilesTeam.map((p) => (
            <ProfileComponent
              name={p.name}
              gitName={p.gitName}
              gitLink={p.gitLink}
              gitImage={p.gitImage}
              linkedin={p.linkedin}
            />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AboutUs;
