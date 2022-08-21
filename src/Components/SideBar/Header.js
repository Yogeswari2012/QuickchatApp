import './Styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger  } from '@fortawesome/free-brands-svg-icons'
import { faXmark} from'@fortawesome/free-solid-svg-icons';




const Header=(props)=>
{

    return(
        <div className='header'>
          
            <FontAwesomeIcon icon ={faFacebookMessenger}  className="icon"/>
           
            <h3>QuickChat</h3>
         {props.display &&  props.windowwidth<=900 && <FontAwesomeIcon  className="xmark"  icon={faXmark} onClick={()=>
        {
            props.changeDisplay();
        }} cursor="pointer" ></FontAwesomeIcon>}
        </div>
    )

}

export default Header