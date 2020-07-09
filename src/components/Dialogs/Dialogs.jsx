import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink activeClassName={s.activeL} to={`/dialogs/${props.id}`}>
        {props.name}
      </NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};
let dialogsData = [
  { id: 5, name: "David" },
  { id: 1, name: "Ani" },
  { id: 2, name: "John" },
  { id: 3, name: "Ezo" },
  { id: 4, name: "Jennifer" }
];
let messagesData = [
  { id: 5, message: "hi" },
  { id: 1, message: "barev" },
  { id: 2, message: "privet" },
  { id: 3, message: "Yo" },
  { id: 4, message: "YO" }
]

let Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        {/* <DialogItem name="David" id="5" />
        <DialogItem name="Ani" id="1" />
        <DialogItem name="John" id="2" />
        <DialogItem name="Ezo" id="3" />
        <DialogItem name="Jennifer" id="4" /> */}
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.messages}>
        {/* <Message message="HI" />
        <Message message="Barev" />
        <Message message="Privet" /> */}
        <Message message = {messagesData[0].message} />
        <Message message = {messagesData[1].message} />
      </div>
    </div>
  );
};

export default Dialogs;
