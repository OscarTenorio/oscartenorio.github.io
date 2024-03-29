import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import User from './user';
import UserContext from "./userContext";

function NavBar() {
  // navbar tab states, used to render which is active
  const [homeIsActive, setHomeIsActive]       = React.useState(true);
  const [depwithIsActive, setDepwithIsActive] = React.useState(false);
  const [historyIsActive, setHistoryIsActive] = React.useState(false);
  const [alldatagradeIsActive, setAlldatagradeIsActive] = React.useState(false);


  // sorry it's a bit hardcoded, running into too-many-re-render errors so had to try this
  function toggleHomeActive(){
    setHomeIsActive(true);
    setDepwithIsActive(false);
    setHistoryIsActive(false);
    setAlldatagradeIsActive(false);
  }

  function toggleDepwithActive(){
    setHomeIsActive(false);
    setDepwithIsActive(true);
    setHistoryIsActive(false);
    setAlldatagradeIsActive(false);
  }

  function toggleHistoryActive(){
    setHomeIsActive(false);
    setDepwithIsActive(false);
    setHistoryIsActive(true);
    setAlldatagradeIsActive(false);
  }

  function alldatagradeActive(){
    setHomeIsActive(false);
    setDepwithIsActive(false);
    setHistoryIsActive(false);
    setAlldatagradeIsActive(true);
  }

  function className(state){
    return state ? "nav-link active" : 'nav-link';
  }

  return(
    <>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className={className(homeIsActive)} name="Home" aria-current="page" href="#" onClick={toggleHomeActive}>Bad Bank Home</a>
          </li>
          <li className="nav-item">
            <a className={className(depwithIsActive)} name="DepWith" href="#/depositwithdraw/" onClick={toggleDepwithActive}>Deposit/Withdraw</a>
          </li>
          <li className="nav-item">
            <a className={className(historyIsActive)} name="History" href="#/balancehistory/" onClick={toggleHistoryActive}>All Data</a>
          </li>
          <li className="nav-item">
            <a className={className(alldatagradeIsActive)} name="alldatagrade" href="#/alldatagraderequirement/" onClick={alldatagradeActive}>All Data (Grade Requirement)</a>
          </li>
        </ul>      
      <User/>
    </>
  );
}

export default NavBar;