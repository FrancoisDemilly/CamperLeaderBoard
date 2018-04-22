import React, { Component } from 'react';
import  './Header.css';



class Header extends React.Component {


  render(){
    const alltimeButton = this.props.clickedAlltime ? "active" : "inactive";
    const recentButton = this.props.clickedRecent ? "active" : "inactive";

    return(
      <div>
        <div className="container headerTitle">
          <p>Camper Leader Board</p>
        </div>
        <div className="container headerBoard">
            <div>Avatar</div>
            <div className="headerUnit">User Name</div>
            <div className="headerUnit">Ranking Alltime
              <button className={alltimeButton} onClick={(e) => this.props.handleClickAlltime("alltime", e) }></button>
            </div>
            <div className="headerUnit">Ranking Recent
              <button className={recentButton} onClick={ (e) => this.props.handleClickRecent("recent", e)}></button>
            </div>
        </div>
      </div>
    )
  };


}//end of class Board


export default Header;
