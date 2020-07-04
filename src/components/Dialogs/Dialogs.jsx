import React from 'react';
import s from './Dialogs.module.css'

let Dialogs =(props) =>{
    return(
        <div className ={s.dialogs}> 
            <div className ={s.dialogs_item}>
                <div className = {s.dialog}>
                    David
                </div>
                <div className = {s.dialog + ' ' + s.active}>
                    Ani
                </div>
                <div className = {s.dialog}>
                    John
                </div>
                <div className = {s.dialog}>
                    EZO
                </div>
                <div className = {s.dialog}>
                    Jennifer
                </div>
            </div>
            <div className = {s.messages}>
                <div className = {s.message}>HI</div>
                <div className = {s.message}>Barev</div>
                <div className = {s.message}>Privet</div>
            </div>
        </div>
    )
}

export default Dialogs;
console.log(s);
