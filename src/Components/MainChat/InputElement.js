import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperclip  , faFaceSmile ,faPaperPlane} from'@fortawesome/free-solid-svg-icons'
import './Styles/InputElement.css'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react';
import { addmessage } from '../../Redux-Store/UserData/userActionsType';


const InputElement=()=>
{

    const[inputmessage,setInputMessage] = useState('');
     const dispatch= useDispatch()
    const values= useSelector(state=>
        {
            return{
                currentuser: state.currentUser.currentUser
            }
        })
  
   const dispatchMessage=()=>
   {
        dispatch(addmessage(values.currentuser.id, {from:"sender",message:inputmessage}));
        setInputMessage('');
        
   }


    return(
        <div className="input-element">
            <span>
          <FontAwesomeIcon  className="paperclip" icon={faPaperclip}></FontAwesomeIcon>
          </span>
           <div className="message-field">
          
           <input placeholder='Enter your message' onKeyPress={(e)=>
           {
            if(e.key==='Enter')
            {
                dispatchMessage();
            }

           }}  onChange={(e)=>
        {
            setInputMessage(e.target.value);
        }}  value={inputmessage}></input>
           <FontAwesomeIcon className="smileicon" icon={faFaceSmile}></FontAwesomeIcon>
           </div>
           <button  onClick={dispatchMessage}><span className="sendText">Send</span>
           <span> <FontAwesomeIcon  className="send" icon={faPaperPlane}></FontAwesomeIcon></span>
           </button>
        </div>


    )
}


export default InputElement