import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageBodyActionCreator,sendMessageActionCreator} from "../../Redux/state"
let Dialogs = (props) => {
  
  let messageRef = React.createRef()
  let sendMessage =()=>{
    // let text = messageRef.current.value;
    let action = sendMessageActionCreator()
    props.dispatch(action)
    
  }
  let onTypeMessage = () =>{
    let messageText = messageRef.current.value
    let action = updateNewMessageBodyActionCreator(messageText)
    props.dispatch(action)
  }
  let messagesElement = props.state.dialogsmessages
.map(element=> <Message message = {element.message} id = {element.id} /> )

 let elementsData = props.state.dialogsData
 .map((elem => {
  return (
    <DialogItem name= {elem.name} id = {elem.id} />
  )
}))
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
      {elementsData}
      </div>
      <div className={s.messages}>
        {messagesElement}
        
      </div>
      <input type="text" ref={messageRef} autoFocus={true} placeholder="Type Your Message" onChange={onTypeMessage} value={props.state.newMessageBody}></input >
      <button onClick={sendMessage}>Send</button>
    </div>
  );

  
};
export default Dialogs;
