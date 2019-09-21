import React, { Component } from "react"
import axios from "axios"

class Jobexperience extends Component {
  constructor() {
    super();
    this.state = {
      Jobexperience: []
    };
  }

  render() {
    const Jobexperience = this.state.Jobexperience
    let JobexperienceList

    if (Jobexperience.length > 0) {
      JobexperienceList = Jobexperience.map(Jobexperience => {
        return (
          <div key={Jobexperience.id}>
            <h3 className="ui header">
              {Jobexperience.name}
            </h3>
          </div>
        )
      })
    }


    return (

      <div className="ui main container">
        <h1 className="ui header">Jobexperience</h1>
        {JobexperienceList}
      </div>

    )
  }
  componentDidMount() {
    axios.get('./src/data/Jobexperience.json')
      .then(response => {
        this.setState({
          Jobexperience: response.data
        })
      })
  }
};

export default Jobexperience