import React from 'react';
import ReactDOM from 'react-dom';
var ReactTooltip = require("react-tooltip")

var MpStars = React.createClass({

  render: function() {

////////// score system
//---------------------------------
////////// 1-3 below average
////////// 4-7 average
////////// 8-10 above average
var tweetScore = parseFloat(this.props.mp.twitter_participation_score).toFixed(1)
var attendanceScore = parseFloat(this.props.mp.did_not_vote_score).toFixed(1)

  if (tweetScore === "NaN") {
    tweetScore = "0.0"
  }
      
      var tweetTag
        if (tweetScore < 2) {
            tweetTag = "one"
          } else if (tweetScore < 3){
            tweetTag = "two"
          } else if (tweetScore < 4){
            tweetTag = "three"
          } else if (tweetScore < 5){
            tweetTag = "four"
          } else if (tweetScore < 6){
            tweetTag = "five"
          } else if (tweetScore < 7){
            tweetTag = "six"
          } else if (tweetScore < 8){
            tweetTag = "seven"
          } else if (tweetScore < 9){
            tweetTag = "eight"
          } else if (tweetScore < 10){
            tweetTag = "nine"
          } else if (tweetScore < 11){
            tweetTag = "ten"
          }

        var attendanceTag
          if (attendanceScore < 2) {
              attendanceTag = "one"
            } else if (attendanceScore < 3){
              attendanceTag = "two"
            } else if (attendanceScore < 4){
              attendanceTag = "three"
            } else if (attendanceScore < 5){
              attendanceTag = "four"
            } else if (attendanceScore < 6){
              attendanceTag = "five"
            } else if (attendanceScore < 7){
              attendanceTag = "six"
            } else if (attendanceScore < 8){
              attendanceTag = "seven"
            } else if (attendanceScore < 9){
              attendanceTag = "eight"
            } else if (attendanceScore < 10){
              attendanceTag = "nine"
            } else if (attendanceScore < 11){
              attendanceTag = "ten"
            }

    return (
      <div className="row-container">
      <ReactTooltip data-multiline='true'/>


      <div className="score">
        <span>Twitter Participation Score</span>
        <svg viewBox='0 0 100 100' className="score-circle">
        <g>
          <circle cx='50' cy='50' r='45' id={tweetTag} transform="rotate(-90 50 50)"/>
        </g>
        </svg>
        <span data-multiline='true' data-tip="Does the MP use Twitter to engage with citizens, or just use a staffer to broadcast his platform? <br>A higher score means that this user is quite likely to engage in debates, or chat with people around the world! 
<br/>0-3: Not much engagement. 4-7: Some cross-talk 8-10: Loves to talk amongst the tweeple!" className={"score-num " + tweetTag}>{tweetScore}</span>
      <span className="score-desc">{(this.props.mp.twitter !== '') ? <a target="_blank" href={'http://twitter.com/' + this.props.mp.twitter}> <span className='icon icon-twitter-bird'></span> {this.props.mp.twitter}</a> : ''}</span>
      </div>

        <div className="score">
        <span>Attendance Score</span>
        <svg viewBox='0 0 100 100' className="score-circle">
        <g>
          <circle cx='50' cy='50' r='45' id={attendanceTag} transform="rotate(-90 50 50)"/>
        </g>
        </svg>
        <span data-multiline='true' data-tip="" className={"score-num " + attendanceTag}>{attendanceScore}</span>
        <span className="score-desc"><b>{this.props.mp.votes_missed_tally}</b> missed votes this session</span>
      </div>



      
       

      </div>

      
    )

  }

});

export default MpStars;