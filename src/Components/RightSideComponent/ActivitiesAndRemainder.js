import Card from "../Card/Card";
import './Styles/Schedule.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faUserGroup,faCalendar, faCommentSlash} from'@fortawesome/free-solid-svg-icons';




const Schedule=()=>
{


      const data=[{day:"Mon",height:"40px"},
      
      {day:"Tue",height:"60px"},
      {day:"Wed",height:"80px"},

      {day:"Thu",height:"30px"},
      {day:"Fri",height:"90px"},
      {day:"Sat",height:"70px"},
      {day:"Sun",height:"80px"}
      ]


      //to find current day name
      //new Date(dateString).toLocaleString('en-us', {weekday:'long'})
      const date = new Date();
      const today= (new Date(date).toLocaleString('en-us', {weekday:'short'}))

      
   

    return(
        <Card class="notifications">
          <div className="remainders">
                 
               <Card class="time">

                <FontAwesomeIcon className="timeicon" icon={faClock} size="2x"
                color="rgb(15,73,255)"></FontAwesomeIcon>
                <div>
                      <h3>13h</h3>
                      <p>Time</p>
                </div>
               </Card>
               <Card class="attended">
               <FontAwesomeIcon className="groupicon" icon={faUserGroup} size="2x"  color="rgb(34,186,155)" ></FontAwesomeIcon>
                <div>
                      <h3>188</h3>
                      <p>Attended</p>
                </div>
               </Card>
               <Card class="meeting">
               <FontAwesomeIcon className="calendaricon" icon={faCalendar} size="2x"
               color="rgb(110,91,196)"></FontAwesomeIcon>
                <div>
                      <h3>119</h3>
                      <p>Meetings</p>
                </div>
               </Card>
               <Card class="rejected">
               <FontAwesomeIcon  className="commneticon" icon={faCommentSlash} size="2x" color="rgb(252,84,35)"></FontAwesomeIcon>
                <div>
                      <h3>41</h3>
                      <p>Rejected</p>
                </div>
               </Card>

          </div>

          <div className="current-week">

              <div>
                  <h2>Current Week</h2>
               
              </div>
              <div className="parentday">


                  {
                        data.map(element=>
                              (
                                    <div className='days'  key={element.day}>
                                    <div className={element.day===today ? 'currentdayheight' : 'dayheight'}  style={{height:element.height}} ></div>
                                    <h6 className="dayname"> {element.day} </h6>
                                 </div>
                              ))
                  }
           
             </div>





          </div>

        </Card>
    )
}



export default Schedule