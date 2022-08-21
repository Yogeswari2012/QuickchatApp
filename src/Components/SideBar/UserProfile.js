
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear , faToggleOn} from'@fortawesome/free-solid-svg-icons'
import { useDispatch  } from 'react-redux';
import './Styles/profile.css';
import { changeDisplay } from '../../Redux-Store/SenderProfile/SenderActionType';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const Profile=()=>
{

 const dispatch=useDispatch();

const values=useSelector(state=>
  {
    return{
      userProfile: state.senderProfile
    }
  })
console.log(values);
  return(
  <Card class="sender-container">
            
           
           <img  className="sender-image"src={values.userProfile.img} alt=""></img>
           <div >
           <h3>{values.userProfile.name}</h3>
           <FontAwesomeIcon className="option-icon"   onClick={()=>
          {
            dispatch(changeDisplay())
          }} icon={faGear}></FontAwesomeIcon>
           </div>
          
           <p>{values.userProfile.designation}</p>
           <div>
            <FontAwesomeIcon  className="icons"icon={faToggleOn}></FontAwesomeIcon>
            <p>Active</p>
            </div>


            </Card>
  )



}

export default Profile