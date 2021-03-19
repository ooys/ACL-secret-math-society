import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faUser, faTasks, faUsers } from '@fortawesome/free-solid-svg-icons'



function Closing(){
    return(
        <div id="closing">
            <div className="piathon-winner-top">
                Pi-a-thon 2021 Winners
            </div>
            <div>
                <img src="/piathon/2021winner.svg" id="piathon-winner-image"></img>
            </div>
            <div className="piathon-winner-top">
                In Pi-a-thon 2021, we had...
                <br></br>
                <div className="columns is-desktop" id="piathon-winner-columns">
                    <div className="column is-quarter">
                        <span className="icon">
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </span>
                        <br></br>
                        <span className="piathon-column-header">
                            Registrations
                        </span>
                        <br></br>
                        <span className="piathon-column-data">
                            102
                        </span>
                    </div>
                    <div className="column is-quarter">
                        <span className="icon">
                            <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                        </span>
                        <br></br>
                        <span className="piathon-column-header">
                            Teams
                        </span>
                        <br></br>
                        <span className="piathon-column-data">
                            36
                        </span>
                    </div>
                    <div className="column is-quarter">
                        <span className="icon">
                            <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
                        </span>
                        <br></br>
                        <span className="piathon-column-header">
                            Tasks Completed
                        </span>
                        <br></br>
                        <span className="piathon-column-data">
                            546
                        </span>
                    </div>
                    <div className="column is-quarter">
                        <span className="icon">
                            <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon>
                        </span>
                        <br></br>
                        <span className="piathon-column-header">
                            Prizes Awarded
                        </span>
                        <br></br>
                        <span className="piathon-column-data">
                            $830.00
                        </span>
                    </div>
                </div>
            </div>
            <hr className="piathon-wrapper-2-hr"></hr>
        </div>
    )
}

export default Closing;
