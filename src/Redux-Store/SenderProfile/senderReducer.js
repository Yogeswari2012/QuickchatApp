


const initialState={
     
    name:'Bill Bradford',
       designation: 'Lead UX/UI Developer',
       contactNumber:'9966445544',
       location: 'Banglore,India',
       img:'https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60',
       todisplay:false,
       emailId:"billbraford@gmail.com"
}

export const changeModalDisplay=(state=initialState,action)=>
{
    if(action.type === "changemodaldisplay")
    {
          return{
            ...state,
            todisplay:!state.todisplay
          }
    }

    return state;
}

