// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {CourseDetails} = props
  const {courseTitle, description, duration, tagsList} = CourseDetails
  return (
    <div className="course-container">
      <div className="title-duration-con">
        <h2 className="course-title">{courseTitle}</h2>
        <div className="clock-days-con">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(skills => (
          <li key={skills.id}>
            <p className="skill">{skills.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
