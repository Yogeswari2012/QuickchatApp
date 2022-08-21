export const archiveUser=(id, mailId)=>
{
    return{
        type:"archive",
        id,
        emaildId:mailId,
    }
}

export const addmessage=(id,message)=>
{
    return{
        type:"addmessage",
        id,
        message

    }
}