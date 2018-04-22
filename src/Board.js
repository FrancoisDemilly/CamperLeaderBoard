import React, { Component } from 'react';
import  './Board.css';


class Board extends React.Component {
  render(){
    const posts = this.props.posts;
    const isLoading = this.props.isLoading;
    const error = this.props.error;

    if(error){
      return <p>{error.message}</p>
    }

    if(isLoading){
        return <p>Loading...</p>
      }

    return(
      <div>
        <div>
          {posts.map((post, i )=>
            <div className="containerBoard" key={i}>
              <img src = {post.img} alt={post.username}></img>
              <div className="unit"> {post.username} </div>
              <div className="unit"> {post.alltime} </div>
              <div className="unit"> {post.recent} </div>
            </div>
            )}
        </div>
      </div>
    )
  };


}//end of class Board


export default Board;
