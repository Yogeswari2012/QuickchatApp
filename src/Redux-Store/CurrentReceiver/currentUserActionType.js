export const changeCurrentUSer=(emailId, name,id,img,isActive)=>
{
    console.log(emailId);
    return {
        type:'changeCurrentUser',
        emailId,
        name,
        id,
        img,
        isActive
    }
}

