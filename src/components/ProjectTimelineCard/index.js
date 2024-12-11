// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = projectDetails
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="project-duration-con">
        <h2 className="project-title">{projectTitle}</h2>
        <div className="project-days-con">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="website-link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
