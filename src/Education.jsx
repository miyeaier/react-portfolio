import React, { Component } from "react"
import axios from "axios"

class Education extends Component {
  constructor() {
    super();
    this.state = {
      Education: []
    };
  }

  render() {
    const Education = this.state.Education
    let EducationList

    if (Education.length > 0) {
      EducationList = Education.map(Education => {
        return (
          <div key={Education.id}>
            <h3 className="ui header">
              {Education.name}
            </h3>
          </div>
        )
      })
    }

        return (

      <div className="ui main container">
        <h1 className="ui header">My Education</h1>
        {EducationList}
      </div>

               )
  }
  componentDidMount() {
    axios.get('./src/data/Education.json')
      .then(response => {
        this.setState({
          Education: response.data
        })
      })
  }
};



export default Education