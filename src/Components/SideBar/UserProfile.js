
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear , faToggleOn} from'@fortawesome/free-solid-svg-icons'
import { useDispatch  } from 'react-redux';
import './Styles/profile.css';
import { changeDisplay } from '../../Redux-Store/SenderProfile/SenderActionType';
import Card from '../Card/Card';

const Profile=()=>
{

 const dispatch=useDispatch();

  const senderProfile={
       name:'Bill Bradford',
       designation: 'Lead UX/UI Developer',
       contactNumber:'9966445544',
       location: 'Banglore,India',
       img:'https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60',
       emailId:"billbraford@gmail.com"

  }

  return(
  <Card class="sender-container">
            
           
           <img  className="sender-image"src={senderProfile.img}></img>
           <div >
           <h3>{senderProfile.name}</h3>
           <FontAwesomeIcon className="option-icon"   onClick={()=>
          {
            dispatch(changeDisplay())
          }} icon={faGear}></FontAwesomeIcon>
           </div>
          
           <p>{senderProfile.designation}</p>
           <div>
            <FontAwesomeIcon  className="icons"icon={faToggleOn}></FontAwesomeIcon>
            <p>Active</p>
            </div>


            </Card>
  )



}

export default Profile