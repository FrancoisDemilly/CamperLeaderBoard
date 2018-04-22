import React, { Component } from 'react';
//import logo from './logo.svg';
import  './App.css';
import Board from './Board.js';
import Header from './Header.js';


const API ="https://fcctop100.herokuapp.com/api/fccusers/top/"

class App extends Component {
 constructor() {
    super();

    this.state = {
      isLoading: false,
      error: null,
      posts: [],
      query: "alltime",
      clickedAlltime: true,
      clickedRecent: false
    };

    this.handleClickAlltime = this.handleClickAlltime.bind(this);
    this.handleClickRecent = this.handleClickRecent.bind(this);
    this.loadApiData = this.loadApiData.bind(this);
  }




  loadApiData(url) {
    console.log("load api triger")
    fetch(API + url)
      .then(response => {
        if(response.ok){
          return response.json()
        }else{
          throw new Error("Something went wrong...")
        }

      })
      .then(data => {
        return this.setState({isLoading: false, posts: data, query: url})
      })
      .catch(error => this.setState({error, isLoading: false}));
  }

  componentDidMount(){

    this.setState({isLoading: true})
    this.loadApiData(this.state.query)
    console.log("componentDidMount")
    }

  handleClickAlltime(url, e){
    e.preventDefault();
    this.loadApiData(url);
    this.setState({clickedAlltime: true, clickedRecent: false})
    }

  handleClickRecent(url, e){
    e.preventDefault();
    this.loadApiData(url)
    this.setState({clickedAlltime: false, clickedRecent: true})
    }

    /*test to understand the life cycle*/
    shouldComponentUpdate(){
      console.log("shouldComponentUpdate")
      //always return true so the component will update
      return true
    }
    componentWillReceiveProps(){
      console.log("componentWillReceiveProps")
    }

    componentWillUpdate(){
      console.log("componentWillUpdate")
    }

    componentDidUpdate(){
      console.log("componentDidUpdate")
    }

    componentWillMount(){
      console.log("componentWillMount")
    }



    componentWillUnmount(){
      console.log("componentWillUnmount")
    }







  render() {
    return (
      <div>
        <Header
        //passsing props and states to the Header componants
                handleClickAlltime={this.handleClickAlltime}
                handleClickRecent={this.handleClickRecent}
                loadApiData={this.loadApiData}
                clickedAlltime ={this.state.clickedAlltime}
                clickedRecent = {this.state.clickedRecent}
                />

        <Board
        //passsing props and states to the Board  componants
                posts={this.state.posts}
                isLoading = {this.state.isLoading}
                error = {this.state.error}
                />
      </div>
    );


  }
} // end of App

export default App;
