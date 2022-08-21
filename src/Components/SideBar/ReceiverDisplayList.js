import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from'@fortawesome/free-solid-svg-icons'
import './Styles/userdisplay.css'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { changeCurrentUSer } from '../../Redux-Store/CurrentReceiver/currentUserActionType';



const UserDisplay=(props)=>
{

   const[display,setDisplay]= useState(true);

   const dispatch=useDispatch();

   function changeUserDisplay()
   {

    setDisplay(prev => !prev);

   }

  


    return(
        <div className="userdisplay-container">
            <div className="userdisplay-header">
         <p>{props.header}   <span>{props.count}</span></p>
       
         <FontAwesomeIcon  className={display===true?"chevronIcon":"chevronIcon rotate"} icon={faChevronDown} onClick={changeUserDisplay}></FontAwesomeIcon>
         </div>
         <div className={display===true?`${props.class} overflow-element`: `overflow-element setheight`}>
         <ul>
            {props.users.map(user=>(
                <li key={user.id}  onClick={()=>
                {
                    dispatch(changeCurrentUSer(user.emailId,user.name,user.id,user.img, user.isActive));
                }}>
                    <img className="user-images" src={user.img} alt=""></img>
                    {user.name}
                  </li>  
            ))}
         </ul>
         </div>
        </div>
    )
}

export default UserDisplay