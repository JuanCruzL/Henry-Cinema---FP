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
          <h2 className="title-settings">USER SETTINGS</h2>
          <div className="settings-user">
            <div className="my-account-setting">MY ACCOUNT</div>
            <div className="history-setting">HISTORY</div>
            <div className="log-out-setting">LOG OUT</div>
          </div>
        </div>
        <div className="container-account-user">
          <h1 className="title-my-account">MY ACCOUNT</h1>

          <div className="container-user-information">
            <div className="background-container"></div>
            <div>
              <div className="container-edit-profile">
                <div className="information-head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/44/44091.png"
                    className="image-icon-profile"
                  />
                  <h3 className="title-user-name">
                    {" "}
                    EXAMPLE FIRST NAME / LAST NAME{" "}
                  </h3>
                  <button className="button-edit-profile">
                    Edit User Profile
                  </button>
                </div>
                <div className="user-email">
                  <div className="edit-username">
                    <div className="container-username">
                      <h3 className="username-text">USERNAME</h3>
                      <h4 className="username-profile">USERNAME EXAMPLE</h4>
                    </div>
                    <botton className="button-edit-username">Edit</botton>
                  </div>
                  <div className="edit-email">
                    <div className="edit-email-profile">
                      <h3 className="email-text">EMAIL</h3>
                      <h4 className="email-profile">emailExample@gmail.com</h4>
                    </div>
                    <button className="button-edit-email">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-password">
            <h3>PASSWORD</h3>
            <button className="button-change"> CHANGE PASSWORD</button>
          </div>
          <div className="container-account">
            <h3>ACCOUNT</h3>
            <div>
              <button className="button-dissable">DISSABLE ACCOUNT</button>

              <button
                className="button-delete"
                onClick={() => console.log("delete account")}
              >
                DELETE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default PerfilUser;
