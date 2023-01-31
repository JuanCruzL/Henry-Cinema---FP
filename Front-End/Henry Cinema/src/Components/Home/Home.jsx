import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../Home/Home.css';
import {toggleDarkLight} from '../Utils/Switch'

export default function Home() {


    return (
        <div id="Switch" className="light-mode">
            <div className="navHome">
                <ul>
                    <li>CINEMAS</li>
                    <li>MOVIES</li>
                    <li>FOOD & DRINKS</li>
                    <li>About</li>
                </ul>
            </div>
            <button type="button" name="Switch" onClick={e=>toggleDarkLight(e)} title="Toggle dark/light mode">🌛</button>
            
        </div>
    )
}

