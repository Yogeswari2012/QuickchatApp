import { data } from "../../Components/UserData"

const currentUserInitialState={
   
    currentUser:{...data[0] }
       
}

export const CurrentUserReducer=(state=currentUserInitialState,action)=>
{
console.log(action.name);
   if(action.type==='changeCurrentUser')
   {
     console.log(action.isActive)
        return  {
          currentUser:{  name: action.name,
            emailId:action.emailId,
            id:action.id,
            img:action.img,
            isActive:action.isActive
          }
        }

   }

  return state;

}