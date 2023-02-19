import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./perfilUser.css";
import Footer from "../footer/footer";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { putUser } from "../../redux/actions";
import { logOut } from "../../redux/actions";
import { putAccount } from "../../redux/actions";

function PerfilUser() {
  const dispatch = useDispatch();
  let token = window.localStorage.getItem("loggedUser");
  let user = jwt_decode(token);
  const [nameEdit, setNameEdit] = useState("");
  const [form, setForm] = useState(false);
  const [password, setPassword] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState("");

  const userToken = useSelector((state) => state.currentUser);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "edit-name") {
      setNameEdit(e.target.value);
      console.log(nameEdit);
    } else {
      setPasswordEdit(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log("funciona")
    console.log(e.target.name) */
    if (e.target.name === "form-name") {
      let newName = {
        userName: nameEdit,
      };
      dispatch(putUser(newName, token));
    } else if (e.target.name === "form-password") {
      let newPassword = {
        password: passwordEdit,
      };
      dispatch(putUser(newPassword, token));
      console.log("form-password enviado");
    }
  };

  const handleClickEdit = (e) => {
    if (e.target.name === "edit-name") {
      setForm(true);
    } else {
      setPassword(true);
    }
  };
  const handleClickClose = (e) => {
    if (e.target.name === "edit-name") {
      setForm(false);
      setNameEdit("");
    } else {
      setPassword(false);
      setPasswordEdit("");
    }
  };
  const handleLogOut = () => {
    window.location.href = "/";
    window.localStorage.removeItem("loggedUser");
    dispatch(logOut());
    swal({
      title: `Logged Out Succesfully`,
      icon: "success",
      button: true,
    });
  };

  const handleClickAccount = (e) => {
    e.preventDefault();
    dispatch(putAccount(user.id));
    window.location.href = "/";
    window.localStorage.removeItem("loggedUser");
    dispatch(logOut());
    swal({
      title: `Logged Out Succesfully`,
      icon: "success",
      button: true,
    });
  }
  if (user.activated === false) {
    return (
      <div>
        <Nav />
        <div className="container-perfil">
          <div className="container-settings-user">
            <h2 className="title-settings">USER SETTINGS</h2>
            <div className="settings-user">
              <div className="my-account-setting">MY ACCOUNT</div>
              <div className="log-out-setting" onClick={handleLogOut}>
                LOG OUT
              </div>
            </div>
          </div>
          <div className="container-account-user">
            <h1 className="title-my-account-disable">YOUR ACCOUNT IS DEACTIVATED</h1>

           
          <button
                className="button-change-disable"
                name={"edit-password"}
                onClick={handleClickAccount}
              >
                {" "}
                REACTIVATE ACCOUNT
              </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container-user">
      <Nav />
      <div className="container-perfil">
        <div className="container-settings-user">
          <h2 className="title-settings">USER SETTINGS</h2>
          <div className="settings-user">
            <div className="my-account-setting">MY ACCOUNT</div>
            <div className="history-setting">HISTORY</div>
            <div className="log-out-setting" onClick={handleLogOut}>
              LOG OUT
            </div>
          </div>
        </div>
        <div className="container-account-user">
          <h1 className="title-my-account">MY ACCOUNT</h1>

          <div className="container-user-information">
            <div className="background-container"></div>
            <div>
              <div className="container-edit-profile">
                <div className="information-head">
                  <img src={user.image} className="image-icon-profile" />
                  <h3 className="title-user-name">{user.userName}</h3>
                  <button className="button-edit-profile">Edit Image</button>
                </div>
                <div className="user-email">
                  <div className="edit-username">
                    <div className="container-username">
                      <h3 className="username-text">USERNAME</h3>
                      <h4 className="username-profile">{user.userName}</h4>
                    </div>
                    <button
                      className="button-edit-username"
                      onClick={handleClickEdit}
                      name={"edit-name"}
                    >
                      Edit
                    </button>
                  </div>
                  {form && (
                    <form
                      className="form-name"
                      onSubmit={handleSubmit}
                      form="form-name"
                    >
                      <label className="label-name-edit">
                        Edit Your Name :
                      </label>
                      <input
                        type="text"
                        className="input-name-edit"
                        value={nameEdit}
                        name={"edit-name"}
                        autoComplete="off"
                        onChange={handleChange}
                      />
                      <button
                        className="button-name-submit"
                        type="submit"
                        onClick={handleSubmit}
                        name="form-name"
                      >
                        Save
                      </button>
                      <button
                        className="button-name-cancel"
                        onClick={handleClickClose}
                        name={"edit-name"}
                      >
                        x
                      </button>
                    </form>
                  )}
                  <div className="edit-email">
                    <div className="edit-email-profile">
                      <h3 className="email-text">EMAIL</h3>
                      <h4 className="email-profile">{user.email}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {user.password && (
            <div className="container-password">
              <h3>PASSWORD</h3>
              <button
                className="button-change"
                name={"edit-password"}
                onClick={handleClickEdit}
              >
                {" "}
                CHANGE PASSWORD
              </button>
            </div>
          )}
          {password && (
            <form
              className="form-password"
              onSubmit={handleSubmit}
              form="form-password"
            >
              <label className="label-password-edit">
                Edit Your Password :
              </label>
              <input
                type="text"
                className="input-password-edit"
                value={passwordEdit}
                name={"edit-password"}
                autoComplete="off"
                onChange={(e) => handleChange(e)}
              />
              <button
                className="button-password-submit"
                type="submit"
                name={"password-form"}
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                className="button-password-cancel"
                onClick={handleClickClose}
                name={"form-password"}
              >
                x
              </button>
            </form>
          )}
          <div className="container-account">
            <h3>ACCOUNT</h3>
            <div>
              <button
                className="button-delete"
                onClick={handleClickAccount}
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
