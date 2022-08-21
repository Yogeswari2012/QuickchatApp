import { useSelector, useDispatch } from "react-redux"
import Card from '../Card/Card';
import './Styles/currentReceiver.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faUserCircle , faBoxArchive} from'@fortawesome/free-solid-svg-icons'
import { archiveUser } from "../../Redux-Store/UserData/userActionsType";
import { changeCurrentUSer } from "../../Redux-Store/CurrentReceiver/currentUserActionType";

const CurrentReceiver=()=>
{

const dispatch=useDispatch();
    const values=useSelector((state)=>
    {
        return{
            currentUser: state.currentUser.currentUser,
            userdata: state.users.userdata,
        }
    })

    let index= values.currentUser.name.lastIndexOf(" ");
  const receiverName= values.currentUser.name.charAt(0) + values.currentUser.name.charAt(index+1);

const archivedUser = values.userdata.filter(ele=> ele.id===values.currentUser.id)






    return(
        <Card class="receiver-container">
          
          <div className="receiver-name">
                {receiverName}
          </div>
          <div className="email">
            <span style={{margin:"2px"}}> 
            <FontAwesomeIcon icon={faEnvelope} color="rgb(59,78,98)" ></FontAwesomeIcon> </span>
            <p >{values.currentUser.emailId}</p>
           
          </div>
          <div className="name">
          <span style={{margin:"2px"}}> 
       <FontAwesomeIcon icon={faUserCircle} color="rgb(59,78,98)"></FontAwesomeIcon></span>
       <p>{values.currentUser.name}</p>
          </div>
          <div className="archive-user" onClick={()=>
        {
            dispatch(archiveUser(values.currentUser.id, values.currentUser.emailId));
        }}>
                  {archivedUser[0].isActive && <p>Archive</p>}
                  {!(archivedUser[0].isActive) && <p>Archived</p>}
                  <FontAwesomeIcon icon={faBoxArchive}></FontAwesomeIcon>
          </div>
        </Card>
    )
}


export default CurrentReceiver