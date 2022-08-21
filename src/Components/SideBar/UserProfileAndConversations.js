import React from 'react';
import './Styles/sidebar.css'
import Header from './Header';
import Profile from './UserProfile';
import ActiveArchiveUser from './ActiveandArchiveUser';
import ExpandedUserProfile from './DetailedUserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from'@fortawesome/free-solid-svg-icons';
import {useState,useEffect,useCallback} from 'react'


const SideBar = ()=>
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

    return(
        <div>
            <FontAwesomeIcon icon={faUser}  size="2x" className="hidedisplay" onClick={changeDisplay} cursor="pointer"></FontAwesomeIcon>
        <div className={windowwidth<=900 && display ?'sidebar-Containerdisplay':"sidebar-Container"}>
            <Header   display={display}    changeDisplay={changeDisplay}  windowwidth={windowwidth}></Header>
            <Profile></Profile>
            <ActiveArchiveUser></ActiveArchiveUser>
            <ExpandedUserProfile></ExpandedUserProfile>
        </div>
        </div>
    )
}


export default SideBar