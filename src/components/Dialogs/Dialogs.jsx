import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Nav from '../Navbar/Navbar';

let Dialogs =(props) =>{
    return(
        <div className ={s.dialogs}> 
            <div className ={s.dialogs_item}>
                <div className = {s.dialog}>
                    <NavLink activeClassName = {s.activeL} to="/dialogs/5">David</NavLink>
                </div>
                <div className = {s.dialog}>
                   <NavLink activeClassName = {s.activeL} to="/dialogs/1">Ani</NavLink> 
                </div>
                <div className = {s.dialog}>
                <NavLink activeClassName = {s.activeL} to="/dialogs/2">John</NavLink> 
                    
                </div>
                <div className = {s.dialog}>
                <NavLink activeClassName = {s.activeL} to="/dialogs/3">EZO</NavLink> 
                    
                </div>
                <div className = {s.dialog}>
                <NavLink to="/dialogs/4" activeClassName = {s.activeL}>Jennifer</NavLink>  
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
