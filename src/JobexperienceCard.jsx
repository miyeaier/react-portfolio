import React from "react"

const JobexperienceCard = (props) => {
  let Jobexperience = props.Jobexperience
  return (
    <>
      <div class="ui card">
        <div class="image">
        <a href={Jobexperience.link} target="_blank">
                <img src={Jobexperience.image} />
            </a>
        </div>
        <div class="content">
          <h3 class="ui header">{Jobexperience.name}</h3>

          <div class="description">
            {Jobexperience.description}
          </div>
        </div>
      </div>
    </>
  )
}

export default JobexperienceCard