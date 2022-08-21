import { combineReducers } from "redux";
import { CurrentUserReducer } from "./CurrentReceiver/currentUserReducer";
import { UserReducer } from "./UserData/userReducer";
import { changeModalDisplay } from "./SenderProfile/senderReducer";

const rootReducer=combineReducers(
    {
      currentUser:  CurrentUserReducer,
      users:  UserReducer,
      senderProfile: changeModalDisplay,
    }
)

export default rootReducer;