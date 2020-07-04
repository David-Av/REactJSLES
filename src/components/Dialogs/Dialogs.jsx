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
const Message = (props)=>{
    return(
    <div className={s.message}>{props.message}</div>
    )
}

let Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <DialogItem name="David" id="5" />
        <DialogItem name="Ani" id="1" />
        <DialogItem name="John" id="2" />
        <DialogItem name="Ezo" id="3" />
        <DialogItem name="Jennifer" id="4" />
      </div>
      <div className={s.messages}>
        <Message message = "HI"/>
        <Message message = "Barev"/>
        <Message message = "Privet"/>
      </div>
    </div>
  );
};

export default Dialogs;
