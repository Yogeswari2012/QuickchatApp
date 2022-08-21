import './Styles/ExpandedUserProfile.css'
import Modal
 from '../UI/Modal'
 import { useSelector, useDispatch } from 'react-redux'
 import { changeDisplay } from '../../Redux-Store/SenderProfile/SenderActionType'

const ExpandedUserProfile=(props)=>
{


    const dispatch=useDispatch();
    const values= useSelector((state)=>
    {
        return{
                profiledetails: state.senderProfile
        }
    })

    console.log(values);


    return(
        <>
        {values.profiledetails.todisplay && <Modal onClose={()=>
        {
            dispatch(changeDisplay());
        }}>
            <div className="profile-container">
                  <img src={values.profiledetails.img} className="senderimage"></img>
                 <div className="profile-details">

                   <div className="keys">
                        <p>Name</p>
                        <p>Designation</p>
                        <p>EmailID</p>
                        <p>Contact Number</p>
                        <p>Location</p>
                        <p>Reports To</p>

                   </div>
                  <div className="values">
                  <p>{values.profiledetails.name}</p>
                        <p>{values.profiledetails.designation}</p>
                        <p>{values.profiledetails.emailId}</p>
                        <p>{values.profiledetails.contactNumber}</p>
                        <p>{values.profiledetails.location}</p>
                        <p>David Scraf</p>


                  </div>



                 </div>
                  </div>
            
            </Modal>}
        </>
    )
}


export default ExpandedUserProfile