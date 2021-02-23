import React, { Component } from 'react';
import Papa from 'papaparse';

var csvFilePath = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQrCVrfqa_sSywA2xGF4ODHIQlsetvUfN0zkrDd1np2WcbJhRHDAj0H0a-rvKSk2y7u1YlWclR1l25U/pub?output=csv"


class Leaderboard extends Component {

    constructor(props) {
        // Call super class
        super(props);

        // Bind this to function updateData (This eliminates the error)
        this.state = {
            data: [[0,0,0,0]]
        };
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        // Your parse code, but not seperated in a function
        // this.timerID = setInterval(
        //     () => this.fetch(),
        //     1000
        // );
        this.fetch()
    }
  
    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    updateData(result) {
        // Here this is available and we can call this.setState (since it's binded in the constructor)
        this.setState({data: result.data});
        console.log(result.data)
    }

    fetch(){
        Papa.parse(csvFilePath, {
          header: false,
          comments: true,
          download: true,
          // Here this is also available. So we can call our custom class method
          complete: this.updateData
        });
    }
    
    render() {
        return(
            <div id="piathon-leaderboard-wrapper">
                <p className="title is-2">
                    Leaderboard
                </p>
                <table className="table is-hoverable is-striped is-bordered" id="piathon-leaderboard">
                    <thead>
                        <tr>
                            <th>
                                Rank
                            </th>
                            <th>
                                Team Name
                            </th>
                            <th>
                                Tasks Submitted
                            </th>
                            <th>
                                Points
                            </th>
                        </tr>
                    </thead>
                    <tbody>{this.state.data.map(row => (
                        <tr key={row.id}>{row.map(col =>(
                            <td key={col.id}>{col}</td>
                        ))
                        }
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
                <br></br>
                <p classname="subtitle is-5">
                    Top 5 scoring teams are shown on leaderboard.
                    <br></br>
                    Leaderboard is updated daily at 12:00AM EST.
                </p>
                <hr className="piathon-wrapper-2-hr"></hr>
            </div>
        );
    }
}
  
export default Leaderboard;