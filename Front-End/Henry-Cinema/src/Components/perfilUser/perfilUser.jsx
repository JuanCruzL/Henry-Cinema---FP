import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./perfilUser.css";
import Footer from "../footer/footer";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { putUser } from "../../redux/actions";
import { logOut } from "../../redux/actions";
import { putAccount } from "../../redux/actions";
import { putName } from "../../redux/actions";
import { putImageUserP } from "../../redux/actions";
import Loader from "../Loader/Loader";

function PerfilUser() {
  const dispatch = useDispatch();
  const imageDefault = 'https://previews.123rf.com/images/kritchanut/kritchanut1308/kritchanut130800063/21738698-hombre-foto-de-perfil-de-la-silueta-con-el-signo-de-interrogaci%C3%B3n-en-la-cabeza-vector.jpg'

  let token = window.localStorage.getItem("loggedUser");
  let user = "";
  if (token === null) {
    user = "null";
  } else {
    user = jwt_decode(token);
  }

  const [nameEdit, setNameEdit] = useState("");
  const [form, setForm] = useState(false);
  const [password, setPassword] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState("");
  const [image, setImage] = useState(false);
  const [imageEdit, setImageEdit] = useState("");
  const [loader, setLoader] = useState(false);
  console.log(token);

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

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFileToBase(file);
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageEdit(reader.result);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log("funciona")
    console.log(e.target.name) */
    if (e.target.name === "form-name") {
      let newName = {
        userName: nameEdit,
      };
      dispatch(putName(user.id, newName));
      window.localStorage.removeItem("loggedUser");

      window.location.href = "/login";
    } else if (e.target.name === "form-password") {
      let newPassword = {
        password: passwordEdit,
      };
      dispatch(putUser(newPassword, token));
      console.log("form-password enviado");
    } else if (e.target.name === "form-image") {
      let newImage = {
        file: imageEdit,
      }
      dispatch(putImageUserP(user.id, newImage));
      window.localStorage.removeItem("loggedUser");

      window.location.href = "/login";
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
    } else if (e.target.name === "form-password"){
      setPassword(false);
      setPasswordEdit("");
    } else if (e.target.name === "edit-image") {
      setImage(false);
      setImageEdit("");
    }
  };

  const handleClickImageEdit = (e) => {
    setImage(true);
  }

  const handleLogOut = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.href = "/";
  };

  const handleClickAccount = (e) => {
    e.preventDefault();
    dispatch(putAccount(user.id));
    window.localStorage.removeItem("loggedUser");

    window.location.href = "/login";
  };
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
            <h1 className="title-my-account-disable">
              YOUR ACCOUNT IS DEACTIVATED
            </h1>

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
    <>
      {user === "null" ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="container-user">
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
              <h1 className="title-my-account">MY ACCOUNT</h1>

              <div className="container-user-information">
                <div className="background-container"></div>
                <div>
                  <div className="container-edit-profile">
                    <div className="information-head">
                      <img src={user.image ? user.image :imageDefault} className="image-icon-profile" />
                      <h3 className="title-user-name">{user.userName}</h3>
                      <div>
                      <button 
                      className="button-edit-profile"
                      onClick={handleClickImageEdit}
                      name="edit-image">
                        Edit Image
                      </button>
                    <div className="form-outline mb-4">
                      {image && (
                        <form
                        // className="form-image"
                        onSubmit={handleSubmit}
                        name="form-image">
                          <label className="form-label">
                            Edit your Image:
                          </label>
                          <input
                            type="file"
                            id="formupload"
                            name="edit-image"
                            onChange={handleImageChange}
                            // className="form-control"
                          />
                          <button
                            className="button-name-submit"
                            type="submit"
                            onClick={handleSubmit}
                            name="form-image"
                          >
                            Save
                          </button>
                          <button
                            className="button-name-cancel"
                            onClick={handleClickClose}
                            name="edit-image"
                          >
                            x
                          </button>
                          <img width="100px" src={imageEdit} />
                        </form>
                      )}
                      </div>
                    </div>
                    <img className="img-fluid" alt="" />
                    
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
                            name="edit-name"
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
      )}
    </>
  );
}
export default PerfilUser;
