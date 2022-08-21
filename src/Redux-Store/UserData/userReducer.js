import {
    data
} from "../../Components/UserData";



const userInitialState = {

    userdata: [...data],
   
  
};

export const UserReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case 'archive': {
            const temp = state.userdata.map(data=>
                {
                    if(data.id === action.id)
                    {
                        return{
                        
                            ...data,
                            isActive:data.isActive? false: true,
                          

                        }
                    }

                    return data;
                })

                return {
                    userdata: [...temp],
                }  
        }

        case 'addmessage' :
            {
                const temp = state.userdata.map(data=>
                    {
                        if(data.id === action.id)
                        {
                            return{
                            
                                ...data,
                                isActive:true,
                                conversation:[...data.conversation, action.message],

                            }
                        }

                        return data;
                    })

                    return {
                        userdata: [...temp],
                    }  
            }

        default:
            return state


    }






}