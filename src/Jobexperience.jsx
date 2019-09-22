import React, { Component } from "react"
import axios from "axios"
import JobexperienceCard from "./JobexperienceCard"

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
           <JobexperienceCard Jobexperience={Jobexperience} />,
           
          
          </div> 
        
        )
      })
    }


    return (

      <div className="ui main container">

<a href="https://www.instagram.com/lovalotofficial/?igshid=s6sl7cwzc00p "class="ui medium image">
<img src="https://github.com/miyeaier/react-portfolio/blob/master/Img/FullSizeRender-2.jpeg?raw=true"> 
</img> </a>
        ,
<a href="https://www.instagram.com/cafekoyastockholm/?igshid=12p8a2nkw69tp "class="ui medium image">
<img src="https://github.com/miyeaier/react-portfolio/blob/master/Img/FullSizeRender-1.jpeg?raw=true"> 
</img> </a>,
<a href="https://instagram.com/miyessarrr?igshid=1aykyk8hqgrnk "class="ui medium image">
<img src="https://github.com/miyeaier/react-portfolio/blob/master/Img/FullSizeRender.jpeg?raw=true"> 
</img> </a>,
      <h1 className="ui header">Jobexperience</h1>
      <div className="ui stackable four column grid">
      {JobexperienceList}
</div>
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