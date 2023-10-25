import React from "react";
import './Helps.css';
import { FaSearch } from "react-icons/fa";
import {MdOutlineSettingsSuggest} from "react-icons/md";
import {GrTroubleshoot} from "react-icons/gr";
import {VscCompassActive} from "react-icons/vsc";

function Help() {
    return(
        <div>
        <div className="help_bg">
            <div className="searchbar">
                <h1>Welcome! How can we help you..?</h1><br></br>
                <input className="search" type="text" placeholder="Search..."/>
                <span className="search_font"><FaSearch/></span>
            </div>

        </div>
            <div className="container"> 
            <div className="grid">  
                <div className="grid1">
                <MdOutlineSettingsSuggest size={70}/>
                    <h2>Key Features</h2>
                    <p>Explore the fundamentals of OMG feature by feature.</p>
                </div>
                <div className="grid2">
                <GrTroubleshoot size={56}/>
                    <h2>FAQ & Troubleshooting</h2>
                    <p>Have a question about something specific? Find the answer here.</p>
                </div>
                <div className="grid3">
                <VscCompassActive size={70}/>
                    <h2>Guide Center</h2>
                    <p>Ideas and the best practices for getting organized with OMG.</p>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="help_container">
            <h2>Can't Find What You're Looking For ?</h2>
            <h3>Reach Out With Questions or Feedback Any Time!</h3>
            <div className="ContactBtn">
            <button>
               <b>Contact Us</b> 
            </button>
        </div>
        </div>
        

        </div>
    );
}

export default Help;