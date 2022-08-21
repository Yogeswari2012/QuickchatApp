import CurrentReceiver from "./currentReceiver"
import './Styles/RightSideComponent.css'
import Schedule from "./ActivitiesAndRemainder"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faXmark} from'@fortawesome/free-solid-svg-icons';
import {useState,useCallback ,useEffect} from'react'
import SupportLink from "./SupportLink";

const RightSideComponent=()=>
{
    const[windowwidth,setwindowwidth]=useState(window.innerWidth);
    const [display,setDisplay]=useState(false);


    const changeDisplay=()=>
    {
        setDisplay(prev=> !prev)
    }

    const handleWindowResize = useCallback(event => {

        setwindowwidth(window.innerWidth);
  
    }, []); 
  
  
    useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, [handleWindowResize]);


    return (
        <div>
            {}
            <FontAwesomeIcon icon={faBars}  cursor="pointer"  size="2x" className="baricon"  onClick={changeDisplay}></FontAwesomeIcon>
           
        <div className={windowwidth<=900 && display ? 'rightContainerDisplay':'right-container'} >
        <FontAwesomeIcon icon={faXmark}  className="xmark" cursor="pointer" onClick={changeDisplay} ></FontAwesomeIcon>
               <CurrentReceiver></CurrentReceiver>
               <Schedule></Schedule>
               <SupportLink></SupportLink>
        </div>
        </div>
    )
}

export default RightSideComponent