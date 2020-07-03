import React from 'react';
import classes from './Navbar.module.css'
 // css petqa modulenrov grenq vor amen meki hamar orinak item class@ sax texer@ grac lini item bayc tarber linen petqa Navbar.css tex@ grel Navbar.module.css u import anel stex classes@ es voncvor taza object sarqem pahuma sax ira mej dursa galis senc
/* 
  let classes = {
    "nav":"u stex ira parametrer@",
    "item" : u stex orinak font-color:white
  }
  erb vor grum enq module es mer grac orinak nav class@ darnuma senc
  Navbar_nav__365465465 orinak
  u petqa grenq senc nayi tak@
*/
const Nav =()=>{
    return(
        <nav className = {classes.nav}>
        <div className = {classes.item}>
          <a>Profile</a>
        </div>
        <div className = {classes.item}>
          <a>Messages</a>
        </div>
        <div className = {classes.item}> 
          <a>News</a>
        </div>
        <div className = {classes.item}>
          <a>Music</a>
        </div>
        <div className = {classes.item}>
          <a>Settings</a>
        </div>
      </nav>
        
        
    )
}
export default Nav;