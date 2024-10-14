import React from 'react'
import { CiHeart } from "react-icons/ci";
import { PiShareFatLight } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { GiStarsStack } from "react-icons/gi";
import { BsCalendar2Event } from "react-icons/bs";
import p1 from "../Asset/phone.png"
import p2 from "../Asset/watch.png"
import p3 from "../Asset/earp.png"
export default function Sidenav() {
  return (
    <>
      <div className="sidenav">
        <div className="side-card">
          <div className="Sidenav-header">
            <span><h6 style={{ fontWeight: "500", fontSize: "1em" }}>Free</h6><p className='share'><CiHeart /><PiShareFatLight /></p></span>
            <button>Registration closed</button>
          </div>
          <div className="registration-details">
            <ul>
              <li><span className="icon"><RiTeamLine /></span><span><p>Registered</p>102542</span></li>
              <li><span className="icon"><AiOutlineTeam /></span><span><p>Team Size</p>1 - 3 Members</span></li>
              <li><span className="icon"><GiStarsStack /></span><span><p>Impressions</p>102542</span></li>
              <li><span className="icon"><BsCalendar2Event /></span><span><p>Registeration Deadline</p>10 Aug 24, 01:00 AM IST</span></li>
            </ul>
          </div>
        </div>
        <div className="side-card">
          <div className='eligibilty' style={{ padding: "0% 2%" }}>
            <div className="elegible-header">
              <h6 style={{ fontWeight: "bold", fontSize: "1em", color: "#2d2c2cd6" }}>Eligibility</h6>
            </div>
            <ul>
              <li>Engineering Students</li>
              <li>Undergraduate</li>
              <li>Postgraduate</li>
            </ul>
            <span style={{}}>
              <h6 style={{ fontWeight: "bold", fontSize: "1em", color: "#2d2c2cd6", margin: "0" }}>Countries</h6>
              India
            </span>
          </div>
        </div>
        <div className="side-card">
          <div className="refer">
            <span>
              <h6 style={{ fontWeight: "bold", fontSize: "1em", color: "#2d2c2cd6" }}>Refer & Win</h6>
              <p style={{ fontSize: "12px" }}>
                MacBook, iPhone, Apple Watch,
                Cash and more!
              </p>
              <button>Refer now</button>
              <button>Know more</button>
            </span>
            <div class="scroll-container">
              <div class="scroll-content">
                <img id="watch" src={p1} alt="prize" />
                <img id="earp" src={p2} alt="prize" />
                <img id="phone" src={p3} alt="prize" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
