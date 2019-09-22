import React from "react"

const EducationCard = (props) => {
  let Education = props.Education
  return (
    <>
      <div class="ui card">
        <div class="image">
        <a href={Education.link} target="_blank">
                <img src={Education.image} />
            </a>
        </div>
        <div class="content">
          <h3 class="ui header">{Education.name}</h3>

          <div class="description">
            {Education.description}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default EducationCard