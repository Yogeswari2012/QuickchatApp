import Card from "../Card/Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink} from'@fortawesome/free-solid-svg-icons';
import './Styles/SupportLink.css'

const SupportLink=()=>
{


    return(
        <Card class="support-container">
               <h2>Onboard Clients</h2>
               <p> Share the link with prospects and discuss all stuff</p>
               <button>Copy Link     
                 <FontAwesomeIcon
                  onClick={()=>
                {
                    navigator.clipboard.writeText("Hi Hello");}
                }
                 icon={faLink}></FontAwesomeIcon>
                 </button>
        </Card>
    )
}

export default SupportLink