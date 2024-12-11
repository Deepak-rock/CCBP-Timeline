// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineView = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} CourseDetails={item} />
  }

  return (
    <div className="timeline-app-container">
      <div className="responsive-container">
        <h1 className="app-header">
          MY JOURNEY OF
          <br />
          <span className="ccbp-heading">CCBP 4.0</span>
        </h1>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachItem => renderTimeLineView(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
