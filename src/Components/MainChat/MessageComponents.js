import Card from '../Card/Card'
import './Styles/MessageComponent.css'
import InputElement from './InputElement'
import Conversations from './ChatWindow'


const MessageComponent=()=>
{

return(
    <Card  class="messageComponent">
        <Conversations></Conversations>
      <InputElement></InputElement>
    </Card>
)
    
}


export default MessageComponent