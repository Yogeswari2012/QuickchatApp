import UserDisplay from './ReceiverDisplayList';
import { useSelector } from 'react-redux/es/exports';

const ActiveArchiveUser=()=>
{
    
  const users= useSelector(state=>
    {
        return{
           activeUser :state.users.userdata.filter(data=> data.isActive===true),
           archiveUser: state.users.userdata.filter(data=> data.isActive===false)
        }
    })

   



    return(

       <>
          <UserDisplay  class="active"header="Active Conversation" users={users.activeUser}  count={users.activeUser.length}></UserDisplay>

          <UserDisplay  class="archive" header="Archieve Conversation" users={users.archiveUser} count={users.archiveUser.length}></UserDisplay>
       </>


    )
}


export default ActiveArchiveUser