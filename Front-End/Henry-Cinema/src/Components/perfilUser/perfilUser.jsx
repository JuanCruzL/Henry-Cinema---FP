import React from "react";
import Nav from "../Nav/Nav";
import "./perfilUser.css";
import Footer from "../footer/footer";

function PerfilUser() {
  return (
    <div className="container-user">
      <Nav />
      <div className="container-perfil">
        <div className="container-settings-user">
          <h2>User Settings</h2>
          <div className="settings-user">
            <div>My Account</div>
            <div>History</div>
            <div>Log Out</div>
          </div>
        </div>
        <div className="container-account-user">
          <h1 className="title-my-account">MY ACCOUNT</h1>

          <div className="container-user-information">
            <div className="background-container"></div>
            <div>
              <div className="container-edit-profile">
                <div className="information-head">
                  <h3>Your User Name </h3>
                  <button>Edit User Profile</button>
                </div>
                <div className="user-email">
                  <div className="edit-username">
                    <div>
                      <h3>USERNAME</h3>
                      <h4>USERNAME EXAMPLE</h4>
                    </div>
                    <botton>Edit</botton>
                  </div>
                  <div className="edit-email">
                    <div>
                      <h3>EMAIL</h3>
                      <h4>emailExample@gmail.com</h4>
                    </div>
                    <button>Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-password">
            <h3>PASSWORD</h3>
            <button>CHANGE PASSWORD</button>
          </div>
          <div className="container-account">
            <h3>ACCOUNT</h3>
            <div>
              <button>DISSABLE ACCOUNT</button>
              <button>DELETE ACCOUNT</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default PerfilUser;
