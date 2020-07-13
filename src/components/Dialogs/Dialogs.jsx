import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";

let Dialogs = (props) => {
  let messageRef = React.createRef()
  let addMessageAlert =()=>{
    let text = messageRef.current.value;
    alert(text)
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
      <input type="text" ref={messageRef} ></input >
      <button onClick={addMessageAlert}>AddMessage</button>
    </div>
  );
  

};

export default Dialogs;
