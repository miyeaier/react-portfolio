import React, { Component } from "react"
import axios from "axios"
import EducationCard from "./EducationCard"

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
           <EducationCard Education={Education} />
          </div>
        
        )
      })
    }

        return (

      <div className="ui main container">
        <h1 className="ui header">My Education</h1>
        <div className="ui stackable four column grid">
        {EducationList}
        
        </div>
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
