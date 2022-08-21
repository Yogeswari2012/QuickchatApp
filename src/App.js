import React from 'react'
import SideBar from './Components/SideBar/UserProfileAndConversations';
import MessageComponent from './Components/MainChat/MessageComponents';
import RightSideComponent from './Components/RightSideComponent/ReceiverProfileAndActivities';
import './App.css'
function App() {
  return (
    <div className="App">
      
         <SideBar></SideBar>
         <MessageComponent></MessageComponent>
         <RightSideComponent></RightSideComponent>

         </div>

  );
}

export default App;
