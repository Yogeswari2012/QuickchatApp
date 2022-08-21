import { useSelector } from 'react-redux'
import './Styles/Conversation.css'

const Conversations=()=>
{

  const values = useSelector(state=>
    {
       return{
        currentUser: state.currentUser.currentUser,
        conversations:state.users.userdata

       }
    })
    
    console.log(values.currentUser);

    const chat = values.conversations.filter(data =>
        {
            if(data.id===values.currentUser.id)
            {
                return data.conversation;
            }
            
        })


console.log(chat);


    return(
        <div className="conversation">
           {chat[0].conversation.map((data,index)=>(
          <li  className={data.from==='sender'?'sender':'receiver'} key="index">
            <div className="online"></div>
            <img src={data.from==='sender'? 'https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60':chat[0].img} alt=""></img>
            <p>{data.message}</p>
            </li>
           ))}
        </div>
    )
}

export default Conversations