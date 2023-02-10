import React from "react";
import "./newmovie.scss";
import { SideBarDash } from "../SideBarDash/SideBarDash";
import { NavBarDash } from "../NavbarDash/NavBarDash";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";

export const NewMovie = () => {
  return (
    <div className="newMovie">
      <SideBarDash />
      <div className="newContainer">
        <NavBarDash />
        <div className="top">
          <h1 className="title">Add New Movie</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://st4.depositphotos.com/3788621/24041/i/450/depositphotos_240418652-stock-photo-movie-time-concept-creative-template.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Title</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="Titanic..."
                />
              </div>
              <div className="formInput">
                <label>Poster</label>
                <label htmlFor="file">
                  <CreateNewFolderOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Banner</label>
                <label htmlFor="file">
                  <CreateNewFolderOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Score</label>
                <input
                  className="inputNM"
                  type="number"
                  placeholder="img url"
                />
              </div>
              <div className="formInput">
                <label>Overview</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="this movie is about..."
                />
              </div>
              <div className="formInput">
                <label>Review</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="what you think about this movie"
                />
              </div>
              <div className="formInput">
                <label>Status</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="already released or release soon?"
                />
              </div>
              <div className="formInput">
                <label>Production Companies</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="Warner Brothers..."
                />
              </div>
              <div className="formInput">
                <label>Runtime</label>
                <input
                  className="inputNM"
                  type="number"
                  placeholder="total length of the film"
                />
              </div>
              <div className="formInput">
                <label>Original Language</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="english..."
                />
              </div>
              <div className="formInput">
                <label>Genres</label>
                <input className="inputNM" type="text" placeholder="action" />
              </div>
              <div className="formInput">
                <label>Directors</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="Martin Scorcece..."
                />
              </div>
              <div className="formInput">
                <label>Actors</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="Leonardo Dicaprio..."
                />
              </div>
              <div className="formInput">
                <label>Video</label>
                <input
                  className="inputNM"
                  type="text"
                  placeholder="link of the vieo"
                />
              </div>
              <div className="formInput">
                <label>Classification</label>
                <input className="inputNM" type="text" placeholder="R or G ?" />
              </div>
              <div className="formInput">
                <label>Distributor</label>
                <input className="inputNM" type="text" placeholder="..." />
              </div>
              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMovie;
