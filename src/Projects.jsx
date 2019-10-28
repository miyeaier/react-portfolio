import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"


  class Projects extends Component {
      constructor() {
        super();
        this.state = {
          projects: [    ]
        };
      }
      

      render() {
        const projects = this.state.projects
        let projectsList

        if (projects.length > 0) {
          projectsList = projects.map(project => {
            return (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            )
          })
        }

        return (
          <div className="ui main container">
            <div className="ui stackable two column grid">
              <div className="center">
            </div>
              <div className="center">
              <div class="ui segment">
     <h2 class="ui center header">projekt</h2>
     <div class="ui clearing divider"></div>
     <p>Now is the third week of my study. These are the results of my work with my partners</p>
  </div>
   </div>
  </div>
  <div className="ui stackable four column grid">
    {projectsList}
     </div>
    </div>
        )
      }
      componentDidMount() {
        axios.get('./src/data/projects.json')
          .then(response => {
            this.setState({
              projects: response.data
            })
          })}
    }

export default Projects