import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";


let dialogsData = [
  { id: 5, name: "David" },
  { id: 1, name: "Ani" },
  { id: 2, name: "John" },
  { id: 3, name: "Ezo" },
  { id: 4, name: "Jennifer" }
];
let messages = [
  { id: 5, message: "hi" },
  { id: 1, message: "barev" },
  { id: 2, message: "privet" },
  { id: 3, message: "Yo" },
  { id: 4, message: "YO" }
]
let messagesElement = messages
.map(element=> <Message message = {element.message} id = {element.id} /> )

 let elementsData = dialogsData
 .map((elem => {
  return (
    <DialogItem name= {elem.name} id = {elem.id} />
  )
}))
let Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
      {elementsData}
      </div>
      <div className={s.messages}>
        {messagesElement}
      </div>
    </div>
  );
  

};

export default Dialogs;
